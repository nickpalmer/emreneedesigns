import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Home page
      "home.hero.title": "Bespoke Wearable Art",
      "home.hero.description1": "Heirloom-quality leather pieces handcrafted in Houston from wild-sourced deer and elk hides and other exotics. Each garment is a one-of-a-kind work of art, designed to move with your body and celebrate its natural beauty.",
      "home.hero.description2": "From intimate one-on-one design fittings to personalized draping and custom hide selection, every piece tells a story—yours and the hide's. An elegance grounded in nature, built to last generations.",

      // About page
      "about.title": "Emily Renee",
      "about.tagline": "Emily Renee is a designer focused on creating beautiful, functional leather goods that connect people to the joy of their bodies.",
      "about.intro": "Marrying form and function in design began at a young age for Emily Renee.",
      "about.paragraph1": "I began sewing as a child under the guidance of my mother, eventually combining fashion and function to tailor outfits—even making my own prom dress. In 2014, after working with leather-bound journals and costumes, I began creating custom-fitted leatherwear for real people—and never looked back.",
      "about.paragraph2": "Today, I still make bespoke pieces for private clients and also offer small-batch ready-to-wear collections.",
      "about.paragraph3": "I create each piece myself in Houston, Texas, primarily using wild-sourced deer and elk hides and other exotics known for their supple feel and raw beauty. These hides carry the stories of their former life—scars, marks, wildness—and I shape them into wearable art designed to move with your body. They feel as luxurious as they look; an elegance grounded in nature.",
      "about.paragraph4": "I'm not part of the fast fashion world—I'm here for the long-lasting, heirloom beauty.",

      // Designs page
      "designs.title": "Designs",
      "designs.subtitle": "Natural ~ Refined ~ Fantastical",
      "designs.description": "Emily creates limited run collections of handcrafted leatherware, each piece made from wild-sourced deer and elk hides. Every collection celebrates the natural beauty and unique characteristics of the materials, ensuring that each item is truly one-of-a-kind.",
      "designs.product1": "Queen Collar Full Grain Leather Coat (front)",
      "designs.product2": "Queen Collar Full Grain Leather Coat (back)",
      "designs.product3": "Queen Peplum Vest",
      "designs.product4": "Backless Leather Dress",
      "designs.product5": "Bolero Vest",
      "designs.product6": "Halter Top Leather Dress",

      // Custom page
      "custom.title": "Custom Designs",
      "custom.tagline": "Custom design fittings are one on one, creating bespoke epic fashion from the hides of your choice, draped to flatter your form and suit your function",
      "custom.subtitle": "Empowerment through personalized fashion design",
      "custom.motto": "Deep roots. Strong wings.",
      "custom.description": "Our services include custom design fittings (one-on-one), bespoke epic fashion creation, custom hide selection, personalized draping and fitting, and functional and flattering designs.",
      "custom.cta": "To have bespoke clothing made for you please",
      "custom.cta.link": "contact us",

      // Contact page
      "contact.title": "Contact Us",
      "contact.email.label": "Email:",
      "contact.phone.label": "Phone:",
      "contact.location.label": "Location:",
      "contact.location.value": "Houston Heights",
      "contact.hours.label": "Hours:",
      "contact.hours.value": "By appointment",
      "contact.social.label": "Follow us on Instagram",

      // Footer
      "footer.copyright": "M. Renee Designs. All rights reserved.",

      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.designs": "Designs",
      "nav.custom": "Custom",
      "nav.contact": "Contact"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
