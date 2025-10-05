# M. Renee Designs Website

A modern, responsive website for M. Renee Designs - showcasing bespoke wearable art and heirloom-quality leather pieces handcrafted in Houston from wild-sourced deer and elk hides.

## 🌐 Live Sites

- **Production:** https://mreneedesigns.com
- **Development:** https://mrd.nick.codes

## 🎨 Features

### Design & Functionality
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Progressive Image Loading** - Blur-up effect and lazy loading for improved performance on slow connections
- **Instagram Feed Loader** - Loading spinner for iframe content
- **Automatic Image Optimization** - Images compressed during build (80% quality JPEG, optimized PNG/SVG)
- **Color Picker** - Live theme customization (only visible on localhost or nick.codes domains)
- **Translation Editor** - Edit all website copy in real-time (only visible on localhost or nick.codes domains)
- **Dynamic Logos** - SVG logos with customizable colors
- **Smooth Navigation** - Client-side routing with React Router
- **GitHub Pages Optimized** - Proper 404 handling for direct links

### Content Management Tools

#### Color Picker (Development Only)
- **Access:** Click the 🎨 button (bottom-right corner)
- **Features:**
  - Edit all theme colors in real-time
  - Preview changes instantly
  - Export/Import color schemes as CSS
  - Quick-select from brand color palette

#### Translation Editor (Development Only)
- **Access:** Click the 📝 button (bottom-right, above color picker)
- **Features:**
  - Edit all website text content
  - Organized by page sections
  - Export/Import translations as JSON
  - Share changes via email or file

## 🚀 Deployment

### For Developers

**Deploy to Development (mrd.nick.codes):**
```bash
npm run deploy
```

**Deploy to Production (mreneedesigns.com):**
```bash
npm run deploy-production
```

### First-Time Production Setup

The production site has been deployed to: `git@github.com:nick-codes/mreneedesigns.git`

**DNS Configuration Required:**

Configure your domain registrar's DNS settings for **mreneedesigns.com**:

1. **CNAME Record (for www subdomain):**
   - **Name:** `www`
   - **Value:** `nick-codes.github.io`
   - **TTL:** 3600 (or default)

2. **A Records (for apex domain):**
   Add these four A records:
   - **Name:** `@` (or blank)
   - **Values:**
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **TTL:** 3600 (or default)

3. **Wait for DNS Propagation:**
   - DNS changes can take 24-48 hours to fully propagate
   - Check status: https://www.whatsmydns.net/

4. **Enable HTTPS in GitHub:**
   - Go to: https://github.com/nick-codes/mreneedesigns/settings/pages
   - Check "Enforce HTTPS" (may need to wait for DNS to propagate first)

## 📝 Editing Website Content

### Using the Translation Editor (Recommended)

1. **Access the editor:**
   - Visit http://localhost:5173 (during development) or https://mrd.nick.codes
   - Click the 📝 button in the bottom-right corner

2. **Edit content:**
   - Browse sections by page (Home, About, Designs, etc.)
   - Click any text block to edit it
   - Changes appear instantly on the site

3. **Save changes:**
   - Click "Export Translations" to copy JSON to clipboard
   - Send the JSON to your developer to update the production site
   - Or: Developer can import the JSON and redeploy

### For Developers: Manual Content Updates

Content translations are stored in: `src/i18n.js`

After editing, rebuild and deploy:
```bash
npm run deploy-production
```

## 🎨 Customizing Colors

### Using the Color Picker (Recommended)

1. **Access the picker:**
   - Visit http://localhost:5173 or https://mrd.nick.codes
   - Click the 🎨 button in the bottom-right corner

2. **Edit colors:**
   - Click any color swatch to open the color editor
   - Use the color wheel or select from brand colors
   - See changes in real-time

3. **Save changes:**
   - Click "Export Colors" to copy CSS to clipboard
   - Send the CSS to your developer to update the theme
   - Or: Developer can import the CSS and update `src/index.css`

### For Developers: Manual Color Updates

Theme colors are defined in: `src/index.css`

```css
:root {
  /* Header & Footer Colors */
  --header-footer-bg: #286140;
  --header-footer-text: #F5E6D3;
  --header-footer-hover: #B86125;

  /* Gradient Colors */
  --gradient-top: #6B6B6B;
  --gradient-bottom: #C2C2C2;

  /* Text Box Colors */
  --textbox-bg: #B86125;
  --textbox-text: #F5E6D3;

  /* Logo Colors */
  --logo-color: #833921;
  --logo-tail-tip-color: #FDFDFD;
  --name-logo-color: #F5E6D3;
}
```

After editing, rebuild and deploy:
```bash
npm run deploy-production
```

## 📄 Pages

- **Home (`/`)** - Hero section with brand introduction
- **About (`/about`)** - Designer bio and philosophy
- **Designs (`/designs`)** - Product showcase and gallery
- **Custom (`/custom`)** - Custom design services information
- **Contact (`/contact`)** - Contact information and Instagram feed

## 🔄 Route Redirects

Old store routes automatically redirect to the new designs page:
- `/store` → `/designs`
- `/store/*` → `/designs` (all store subcategories)

## 💻 Development

### Prerequisites
- Node.js 18+ and npm

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Tech Stack
- **Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Routing:** React Router DOM 7.9.3
- **Styling:** Tailwind CSS 4.1.14
- **Internationalization:** react-i18next 16.0.0
- **Deployment:** gh-pages 6.3.0

## 📧 Support

For technical support or questions about updating the website, contact your developer.

For business inquiries:
- **Email:** emily@mReneeDesigns.com
- **Phone:** (504) 383-5044
- **Instagram:** [@mrenee_designs](https://www.instagram.com/mrenee_designs)

---

**© 2025 M. Renee Designs. All rights reserved.**

*Built with ❤️ using React and deployed on GitHub Pages*
