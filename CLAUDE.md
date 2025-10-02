# M. Renee Designs Website

## Project Overview

This is a fashion designer website for **M. Renee Designs**, a boutique fashion brand specializing in handcrafted leather goods made from wild-sourced deer and elk hides. The brand is founded by Emily Renee Smith and based in Houston, Texas.

**Brand Philosophy:** Creating heirloom-quality pieces that celebrate natural materials and individual body types, emphasizing "Deep roots. Strong wings."

**Tagline:** "Alluring and dynamic fashion handcrafted for your body"

---

## Technology Stack

- **Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Routing:** React Router DOM 7.9.3
- **Styling:** Tailwind CSS 4.1.14
- **CSS Processing:** PostCSS + Autoprefixer
- **Package Manager:** npm
- **Code Quality:** ESLint 9.36.0

---

## Project Structure

```
website/
├── src/
│   ├── assets/
│   │   └── images/          # Product and brand images
│   ├── components/
│   │   ├── Header.jsx       # Sticky navigation header
│   │   └── Footer.jsx       # Copyright footer
│   ├── hooks/
│   │   └── useScrollDirection.js  # Scroll direction detection hook
│   ├── pages/
│   │   ├── Home.jsx         # Landing page with hero section
│   │   ├── About.jsx        # Designer bio and philosophy
│   │   ├── Designs.jsx      # Product gallery (Store)
│   │   ├── Custom.jsx       # Custom design services
│   │   └── Contact.jsx      # Contact information
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   ├── App.css              # Component-specific styles
│   └── index.css            # Global styles and Tailwind imports
├── public/                  # Static assets
├── dist/                    # Build output
├── index.html               # HTML entry point
├── tailwind.config.js       # Tailwind configuration with brand colors
├── vite.config.js           # Vite build configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

---

## Brand Color Palette

The website uses a custom color palette defined in `tailwind.config.js`:

- **olive-dark:** `#3D441E` - Primary text and navigation
- **brown-dark:** `#833921` - Headings and accents
- **brown-light:** `#B86125` - Secondary accents
- **green-dark:** `#286140` - Additional accent
- **olive-light:** `#4E5B31` - Additional olive tone
- **blue-dark:** `#012169` - Additional accent

---

## Pages & Features

### 1. Home (`/`)
- **Component:** `src/pages/Home.jsx`
- **Features:**
  - Full-screen hero section with background image
  - Parallax effect (`bg-fixed`)
  - Brand tagline overlay
  - Gallery grid showcasing leather products
- **Images:** `home_01_zoeSm.jpg`, `home_02_3C5330C5.jpeg`, `home_03_IMG_9621.jpg`

### 2. About (`/about`)
- **Component:** `src/pages/About.jsx`
- **Content:**
  - Designer bio: Emily Renee Smith
  - Brand philosophy and background
  - Design approach and materials
  - Photo gallery of the designer
- **Key Quote:** "Creating leather goods that connect people to the joy of their bodies"

### 3. Designs (`/designs`)
- **Component:** `src/pages/Designs.jsx`
- **Features:**
  - Product grid layout (1/2/3 columns responsive)
  - Product cards with images and names
  - Featured products:
    - Queen Collar Full Grain Leather Coat
    - Raw Duster in Elk Leather
    - Queen Peplum Vest
    - Backless Halter Dress (Deer Leather)
    - Deer Leather Halter Top
    - Leather Messenger Bags
    - Leather Journals
- **Note:** Pricing not currently displayed (can be added later)

### 4. Custom (`/custom`)
- **Component:** `src/pages/Custom.jsx`
- **Content:**
  - Custom design services overview
  - Bespoke fitting process
  - Hide selection information
  - Gallery of custom work examples
- **Services:**
  - One-on-one design fittings
  - Personalized draping and fitting
  - Custom hide selection
  - Functional and flattering designs

### 5. Contact (`/contact`)
- **Component:** `src/pages/Contact.jsx`
- **Information:**
  - Email: emily@mReneeDesigns.com
  - Phone: (504) 383-5044
  - Location: Houston Heights
  - Hours: By appointment
  - Social: Instagram (@mrenee_designs)

---

## Components

### Header
- **Location:** `src/components/Header.jsx`
- **Features:**
  - Sticky navigation (stays at top on scroll)
  - Brand logo
  - Navigation links to all pages
  - Hover effects on links
  - Uses `useScrollDirection` hook (though not currently affecting display)

### Footer
- **Location:** `src/components/Footer.jsx`
- **Content:**
  - Copyright notice with dynamic year
  - Simple, minimal design

---

## Custom Hooks

### useScrollDirection
- **Location:** `src/hooks/useScrollDirection.js`
- **Purpose:** Detects scroll direction (up/down)
- **Usage:** Imported in Header but not currently affecting UI
- **Potential Use:** Could hide/show header based on scroll direction

---

## Routes

The application uses React Router with the following routes:

- `/` → Home
- `/about` → About
- `/designs` → Designs (Store)
- `/custom` → Custom
- `/contact` → Contact

All routes are wrapped in a layout with Header and Footer components.

---

## Development

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Development Server
- Runs on Vite dev server (default: http://localhost:5173)
- Hot module replacement (HMR) enabled
- Fast refresh for React components

---

## Assets

### Images
- **Location:** `src/assets/images/`
- **Naming Convention:** `{category}_{number}_{description}.{ext}`
  - Categories: home, about, store, custom
  - Examples: `store_01_IMG_7890.jpg`, `home_04_etsy_285019522.jpg`
- **Logo:** `LogoPNG-300_inked_logo_APRIL EDITS_foot_tail2.png`

### Image Sources
- Mix of professional photography and Etsy listings
- All images showcase leather products and craftsmanship
- Natural, earthy aesthetic consistent with brand

---

## Styling Approach

- **Utility-First:** Tailwind CSS classes directly in JSX
- **Responsive Design:** Mobile-first with `md:` and `lg:` breakpoints
- **Layout Patterns:**
  - Grid layouts for galleries (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
  - Flexbox for alignment
  - Full-height sections (`min-h-screen`, `h-screen`)
- **Effects:**
  - Background overlays (`bg-black bg-opacity-50`)
  - Fixed backgrounds for parallax
  - Rounded corners and shadows on cards

---

## Product Information (Reference)

### Price Range
- Journals: $190-$260
- Tops: from $625
- Dresses: from $1,100
- Messenger Bags: $220-$750
- Vests: $4,800
- Coats: $8,500-$9,200

### Materials
- Wild-sourced deer hides
- Wild-sourced elk hides
- Full grain leather
- Natural, unfinished edges
- Emphasis on unique characteristics and imperfections

---

## Design Philosophy (For Content Reference)

- **Heirloom Quality:** Long-lasting pieces over fast fashion
- **Natural Beauty:** Celebrating imperfections in materials
- **Body Connection:** Designs that move with and flatter the body
- **Bespoke Craftsmanship:** Personalized, one-on-one design process
- **Storytelling:** Each hide has its own story and character
- **Empowerment:** Fashion as a tool for self-expression

---

## Future Enhancements (Potential)

Based on the original website analysis, these features could be added:

1. **E-commerce Integration**
   - Shopping cart functionality
   - Product detail pages
   - Pricing display
   - Checkout process

2. **Enhanced Interactions**
   - Hide/show header on scroll (using existing hook)
   - Image lightbox for product gallery
   - Contact form with validation
   - Newsletter signup

3. **Additional Content**
   - Blog/journal section
   - Customer testimonials
   - Process/behind-the-scenes content
   - Upcoming collections (menswear, exotics)

4. **SEO & Performance**
   - Meta tags and descriptions
   - Image optimization
   - Lazy loading
   - Analytics integration

5. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader optimization
   - Color contrast verification

---

## Notes for Development

- Images are imported as ES modules in each page component
- All navigation uses React Router's `<Link>` component (no full page reloads)
- Tailwind classes are defined in `tailwind.config.js` for brand colors
- The project uses React 19 with modern features (StrictMode, createRoot)
- No TypeScript currently (plain JSX)
- No state management library (not needed for current complexity)
- No API integration yet (static content only)

---

## Contact & Business Info

- **Designer:** Emily Renee Smith
- **Email:** emily@mReneeDesigns.com
- **Phone:** (504) 383-5044
- **Location:** Houston Heights, Houston, Texas
- **Instagram:** @mrenee_designs
- **Website:** https://mreneedesigns.com (original)

---

This project is a clean, modern implementation of the M. Renee Designs brand online presence, built with current web technologies and best practices.
