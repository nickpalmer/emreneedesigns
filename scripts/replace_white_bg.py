#!/usr/bin/env python3
"""
Studio-background tools for the brochure collection grid.

MODES
  gradient  (default)  replace a flat/white background with a generated grey
                       gradient matching the neighbouring studio shots.
  lighten              keep the existing (grey) background but remap its tonal
                       range into a lighter target range so a too-dark backdrop
                       matches the other grids. Preserves the gradient shape.

Usage:
  replace_white_bg.py INPUT OUTPUT [--mode gradient|lighten]
                      [--height N] [--sat S] [--lo L --hi H]

Both modes build the background mask the same way: neutral (low-saturation)
pixels that are connected to the image border, so the subject and any interior
greys (jewellery, caps) are never touched. The mask is eroded + feathered to
avoid edge halos.
"""
import argparse
import numpy as np
from PIL import Image
from scipy import ndimage


def _keep_border(mask):
    lbl, _ = ndimage.label(mask)
    border = set(lbl[0, :]) | set(lbl[-1, :]) | set(lbl[:, 0]) | set(lbl[:, -1])
    border.discard(0)
    return np.isin(lbl, list(border))

def bg_mask(img, sat_thr, light_only, warm=7.0, open_iters=1):
    r, g, b = img[..., 0], img[..., 1], img[..., 2]
    mx = img.max(2); mn = img.min(2)
    # background = low-saturation AND neutral (not warm: excludes brown jacket,
    # skin, beard, tan cap -> their edges never bridge the mask into the subject)
    cand = ((mx - mn) < sat_thr) & ((r - b) < warm) & ((r - g) < warm)
    if light_only:
        cand &= img.mean(2) > 150
    mask = _keep_border(cand)
    if open_iters:
        mask = ndimage.binary_opening(mask, iterations=open_iters)
        mask = _keep_border(mask)
    # fill small interior speckles (noise), never the subject
    inv = ~mask
    lbl, n = ndimage.label(inv)
    touch = set(lbl[0, :]) | set(lbl[-1, :]) | set(lbl[:, 0]) | set(lbl[:, -1])
    sizes = ndimage.sum(np.ones_like(lbl), lbl, index=range(1, n + 1))
    small = {i + 1 for i, sz in enumerate(sizes)
             if (i + 1) not in touch and sz < 0.0015 * mask.size}
    if small:
        mask |= np.isin(lbl, list(small))
    mask = ndimage.binary_erosion(mask, iterations=1)
    return mask

def make_gradient(h, w):
    top = np.array([184, 184, 187], float)
    bot = np.array([223, 223, 225], float)
    t = np.linspace(0, 1, h)[:, None]
    grad = np.repeat((top * (1 - t) + bot * t)[:, None, :], w, axis=1)
    yy, xx = np.mgrid[0:h, 0:w]
    r = np.sqrt(((yy - 0.52 * h) / (0.7 * h))**2 + ((xx - 0.5 * w) / (0.6 * w))**2)
    return np.clip(grad + np.clip(1 - r, 0, 1)[..., None] * 14.0, 0, 255)


def lighten_bg(img, mask, out_lo, out_hi):
    lum = img.mean(2)
    vals = lum[mask]
    in_lo, in_hi = np.percentile(vals, 2), np.percentile(vals, 98)
    scale = (out_hi - out_lo) / max(in_hi - in_lo, 1e-3)
    # same linear map on every channel keeps the neutral grey neutral
    return np.clip((img - in_lo) * scale + out_lo, 0, 255)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("inp"); ap.add_argument("out")
    ap.add_argument("--mode", choices=["gradient", "lighten"], default="gradient")
    ap.add_argument("--height", type=int, default=2600)
    ap.add_argument("--sat", type=float, default=None)
    ap.add_argument("--lo", type=float, default=178.0)
    ap.add_argument("--hi", type=float, default=236.0)
    a = ap.parse_args()

    im = Image.open(a.inp).convert("RGB")
    if im.height > a.height:
        im = im.resize((round(im.width * a.height / im.height), a.height), Image.LANCZOS)
    img = np.asarray(im, float)
    h, w, _ = img.shape

    sat = a.sat if a.sat is not None else (20 if a.mode == "gradient" else 16)
    mask = bg_mask(img, sat, light_only=(a.mode == "gradient"))
    alpha = np.clip(ndimage.gaussian_filter(mask.astype(float), 1.6), 0, 1)[..., None]

    new_bg = make_gradient(h, w) if a.mode == "gradient" else lighten_bg(img, mask, a.lo, a.hi)
    out = img * (1 - alpha) + new_bg * alpha
    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(a.out, quality=90)
    print(f"wrote {a.out}  {w}x{h}  mode={a.mode}  bg={mask.mean()*100:.1f}%")


if __name__ == "__main__":
    main()
