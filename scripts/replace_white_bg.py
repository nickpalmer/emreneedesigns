#!/usr/bin/env python3
"""
Replace a flat light studio background with a soft grey gradient that
matches the neighbouring studio shots in the brochure collection grid.

Usage: replace_white_bg.py INPUT OUTPUT [--height N]

Approach:
  1. Downscale for manageable processing.
  2. Build a "background" mask = low-saturation + light pixels that are
     connected to the image border (so interior highlights/jewellery and
     the figures themselves are never treated as background).
  3. Erode + feather the mask to kill the light edge fringe and blend.
  4. Composite the subject over a generated vertical grey gradient
     (with a gentle radial highlight) tuned to the neighbour backdrops.
"""
import sys, argparse
import numpy as np
from PIL import Image
from scipy import ndimage

def build_gradient(h, w):
    # vertical: darker grey at top -> lighter grey toward the bottom
    top = np.array([184, 184, 187], float)
    bot = np.array([223, 223, 225], float)
    t = np.linspace(0, 1, h)[:, None]
    grad = (top[None, :] * (1 - t) + bot[None, :] * t)      # (h,3)
    grad = np.repeat(grad[:, None, :], w, axis=1)           # (h,w,3)
    # gentle radial highlight centred a bit low, behind the figures
    yy, xx = np.mgrid[0:h, 0:w]
    cy, cx = 0.52 * h, 0.5 * w
    r = np.sqrt(((yy - cy) / (0.7 * h))**2 + ((xx - cx) / (0.6 * w))**2)
    glow = np.clip(1 - r, 0, 1)[..., None] * 14.0           # up to +14 brightness
    return np.clip(grad + glow, 0, 255)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("inp"); ap.add_argument("out")
    ap.add_argument("--height", type=int, default=2600)
    a = ap.parse_args()

    im = Image.open(a.inp).convert("RGB")
    if im.height > a.height:
        w = round(im.width * a.height / im.height)
        im = im.resize((w, a.height), Image.LANCZOS)
    img = np.asarray(im, float)
    h, w, _ = img.shape

    mx = img.max(2); mn = img.min(2)
    sat = mx - mn
    bright = img.mean(2)
    # background candidate: greyish AND light
    bg = (sat < 20) & (bright > 150)
    # keep only the component(s) connected to the border
    lbl, n = ndimage.label(bg)
    border = set(lbl[0, :]) | set(lbl[-1, :]) | set(lbl[:, 0]) | set(lbl[:, -1])
    border.discard(0)
    bgmask = np.isin(lbl, list(border))
    # erode 2px to eat the light fringe, then feather
    bgmask = ndimage.binary_erosion(bgmask, iterations=2)
    alpha = ndimage.gaussian_filter(bgmask.astype(float), sigma=1.6)
    alpha = np.clip(alpha, 0, 1)[..., None]

    grad = build_gradient(h, w)
    out = img * (1 - alpha) + grad * alpha
    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(a.out, quality=90)
    print(f"wrote {a.out}  {w}x{h}  bg pixels replaced: {bgmask.mean()*100:.1f}%")

if __name__ == "__main__":
    main()
