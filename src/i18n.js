import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Home page
      "home.hero.title": "Bespoke Wearable Art",
      "home.hero.description1": "Natural.  Refined.  Fantastical.\nHeirloom-quality leather pieces handcrafted in Houston from wild-sourced deer and elk hides . designed to move with your body and celebrate its natural beauty.",
      "home.hero.description2": "From intimate one-on-one design fittings to personalized draping and custom hide selection, every piece tells a story—yours and the hide's. An elegance grounded in nature, built to last generations.",

      // About page
      "about.title": "The short and the long of it",
      "about.tagline": "Connecting clients to the joy of their body. Design impulse: elegant flair and decadent experience. Made with attention and intention in Houston by the artistic hand of M Renee.",
      "about.intro": "Deer leather-- earthy aromatic supple-- seduced me back to fashion creation in 2012 because it is timeless, real, and durable enough to live long with a human. Beyond being outside fast fashion, my leather offers a grounding sense, a comforting and pleasurable encounter. My designs are about your body, not an idea in my mind. I love bodies. It's my artistic aim that wearing my work, you will enjoy even more your embodiment.",
      "about.paragraph1": "My mother-- skilled seamstress herself-- started me sewing at 6 because I was unhappy with clothes available, but clear about what I wanted. I took to it like a fish to water, mixing and matching pattern elements from the very beginning and also free hand designing details for my show clothes (AQHA), tailoring any store-bought clothes. The industry aspect of fashion design, that's why I didn't accept the fashion design scholarship offered. But long story short, here I am full-time designer and artisan! And I love it. I'm good at it, I love doing it, and I am grateful. ",
      "about.paragraph2": "Today, I make bespoke pieces for private clients and am preparing to offer small-batch ready-to-wear collections. \n\nMy workshop is in north Houston, near the Woodlands. ",
      "about.paragraph3": "What type of leather do I use?  Primarily wild-sourced domestic deer and elk hides because their supple feel and raw beauty. These hides carry the stories of their former life—scars, marks, wildness. They feel as luxurious as they look; an elegance grounded in nature. Picture how a deer moves, leaping lithe; that deer hide will move with you as responsively.\n\nNaturally, curious being that I am, I do also use other leathers and hides-- Alligator, Ostrich, Python, Horsehide, Lamb, Kangaroo, Moose, hair-on hides, etc and of course some beautiful cowhides as well. ",
      "about.paragraph4": "It is slow fashion. I make about 25 projects a year.",

      // Designs page
      "designs.title": "Looks",
      "designs.subtitle": "Natural ~ Refined ~ Fantastical",
      "designs.description": "Lookbook coming soon with images of current work.\n\nIn the meantime, my best effort of describing the range of possibilities.\n \nBust silhouette: Marylin Monroe, Audry Hepburn, Kate Moss (bra size)\nCollar/sleeve: Queen collar with bell sleeves, or Elvira standing collar with classic sleeves\nLength and style: raw edge or clean seams\nColor leather: black, dark chocolate, tobacco, willow, red\n",
      "designs.product1": "Queen Collar Leather Coat (front)",
      "designs.product2": "Queen Collar Leather Coat (back)",
      "designs.product3": "Queen collar vest (or jacket) with peplum back",
      "designs.product4": "Deer leather backless halter dress- mini, midi, or maxi",
      "designs.product5": "Bustier Vest",
      "designs.product6": "Deer leather halter dress, raw edge hem",

      // Custom page
      "custom.title": "Custom Designs",
      "custom.tagline": "Custom design fittings are one on one, creating bespoke epic fashion from the hides of your choice, draped to flatter your form and suit your function",
      "custom.subtitle": "Empowerment through personalized fashion design",
      "custom.motto": "Natural. Refined. Fantastical.",
      "custom.description": "One-on-one design consultation and fittings in my Houston atelier, or fly me to you (details and pricing via email).\nApply to host a trunk show. Designer and assistants will bring current inventory for personal shopping, and I will be available for custom order consultations in a social atmosphere.",
      "custom.cta": "To have bespoke clothing made for you pleasure",
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
      "nav.designs": "Looks",
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
