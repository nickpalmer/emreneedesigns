import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Home page
      "home.hero.title": "Bespoke Wearable Art",
      "home.hero.description1": "Natural.  Refined.  Fantastical.\nM Renee creates elegance from the wild, walking the line between rough and refined — a slow fashion siren with Louisiana roots and Houston heat in her veins.\n\nHeirloom-quality leather to wear, handcrafted from wild-sourced deer and elk hides designed to move with your body and celebrate natural beauty.\n\nGenuine, sumptuous, unique; the beauty of these pieces is more than skin deep.\n",
      "home.hero.description2": "Designed and handmade by Emily Renee, this foundational offering from M Renee introduces timeless leather garments crafted for presence, movement, and sensuality. Each piece is genuine leather— selected for its supple drape, earthy aroma, and lived-in beauty— shaped to accentuate and delight.\n\nFrom elegant jackets to sculptural skirts, the silhouettes are adaptable, breathable, and built to be worn, loved, and remembered. These are not seasonal garments; they are lifetime pieces—crafted slowly, worn boldly, and made to last.",

      // About page
      "about.title": "The short and the long of it",
      "about.tagline": "Connecting clients to the joy of their body. Design impulse: elegant flair and decadent experience. Made with attention and intention in Houston by the artistic hand of M Renee.",
      "about.intro": "I am deeply tactile — not just with the materials, but with life itself. Thoughtful but bold, grounded but never dull. A little wild, a lot intentional.\n\nDeer leather-- earthy aromatic supple-- seduced me back to fashion creation in 2012 because it is timeless, real, and durable enough to live long with a human. Beyond being outside fast fashion, my leather offers a grounding sense, a comforting and pleasurable encounter. My designs are about your body, not an idea in my mind. I love bodies. It's my artistic aim that wearing my work, you will enjoy even more your embodiment. \n\nI bring out the refined in the raw, and the fantastical in the functional.",
      "about.paragraph1": "My mother-- skilled seamstress herself-- started me sewing at 6 because I was unhappy with clothes available, but clear about what I wanted. I took to it like a fish to water, mixing and matching pattern elements from the very beginning, competitive sewing in 4-H, free hand designing details for show clothes I created for AQHA, tailoring any store-bought clothes. The industry aspect of fashion design... that's why I didn't accept the fashion design scholarship offered. But long story short, here I am full-time designer and artisan! And I love it. I'm good at it, I love doing it, and I am grateful. \n\nSo much of elegance is line, and feeling the line is a natural gift difficult to explain or to teach; but, is perceived instantly. My early work was savage and raw, intentionally so. Minimal. Yet now I play with refined shapes and techniques because I can, I have great capacity with fine sewing at the machine, and honestly it delights me– especially with the raw natural material in a finessed shaped. ",
      "about.paragraph2": "Today, I make bespoke pieces for private clients and will soon offer small-batch ready-to-wear collections for select boutiques. \n\nMy workshop is in north Houston, near the Woodlands. ",
      "about.paragraph3": "What leather do I use?  \nPrimarily, wild-sourced domestic deer and elk hides because their supple feel and raw beauty. These hides carry the stories of their former life—scars, marks, wildness and I love that authenticity. The lithe nature of deer leaping through the forest is perceptible in the stretch and texture of these hides as they move with you. \n\nNaturally, curious being that I am, I do also use other leathers and hides like Alligator, Ostrich, Python, Horsehide, Lamb, Kangaroo, Moose, hair-on hides, and of course some beautiful cowhides as well. \n\nIf you are excited by a particular leather, I enjoy exploring new possibilities! ",
      "about.paragraph4": "Each creation begins with a conversation and evolves through fittings and refinement. Timelines are guided with care, respecting both the artistry of the piece and the Client's participation in the process. \n\nThis is slow fashion. I make about 25 projects a year. ",

      // Designs page
      "designs.title": "Looks",
      "designs.subtitle": "Natural ~ Refined ~ Fantastical",
      "designs.description": "Every jacket, skirt, or top is built for real life—layerable, breathable, low-maintenance, and strong enough to last.\n\nThese aren't mass-produced. I create each piece myself in Houston, Texas, using wild-sourced deer and elk hides known for their supple feel and raw beauty. These hides carry the stories of their former life—scars, textures, wildness—and I shape them into daring fashion that feels as luxurious as it looks. M Renee is elegance grounded in nature. \n\n** Look Book coming soon with images of current work ** \nI am deep in the making, so here is a glimpse of sold pieces as I prepare a new body of work to photograph, to share, to offer.\n\nIn the meantime, my best effort of describing the range of possibilities.\n \nAny of these looks can be made in two silhouettes (full bust or sleek bust), two collar/sleeve styles (Queen collar with bell sleeves, or Elvira standing collar with classic sleeves), and customizable length and style (raw edge or clean seams), in your choice of color: black, dark chocolate, tobacco, willow, red (or inquire for other colors).\n\nCustomizable looks: Jackets. Dresses. Skirts. Bustier vests. Fringe capes/belts. Jock straps. \n \nIn development: Mens vests and jackets, pants, jumpsuits, Alligator corset belts, and more.\n\nPhotos are for reference-- current pattern cuts have been updated and refined. \n",
      "designs.product1": "Queen Collar Leather Coat (front)",
      "designs.product2": "Queen Collar Leather Coat (back)",
      "designs.product3": "Queen collar vest (or jacket) with peplum back",
      "designs.product4": "Deer leather backless halter dress- mini, midi, or maxi",
      "designs.product5": "Bustier Vest",
      "designs.product6": "Deer leather halter dress, raw edge hem",

      // Custom page
      "custom.title": "Custom Designs",
      "custom.tagline": "Custom design fittings are one on one, creating bespoke epic fashion from the hides of your choice, draped to flatter your form, designed suit your function",
      "custom.subtitle": "Empowerment through personalized fashion design",
      "custom.motto": "Natural. Refined. Fantastical.",
      "custom.description": "One-on-one design consultation and fittings in my Houston atelier, or fly me to you (details and pricing via email).\n\nDiscretion is at the heart of the M. Renee experience. All measurements, communications, and private details entrusted to the Atelier are held in strict confidence. No Client's identity shall be revealed without explicit written consent. Photographs of works may appear in editorial or promotional contexts, yet always without attribution unless invited by the Client.\n\nClients may apply to host a trunk show. Designer and assistants will bring current inventory for personal shopping, and I will be available for custom order consultations in a social atmosphere.",
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
