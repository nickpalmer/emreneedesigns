import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Home page
      "home.hero.title": "M. Renee Designs",
      "home.hero.subtitle": "Refined.  Natural.  Fantastical.",
      "home.hero.description1": "M Renee Designs is a Houston-based slow fashion atelier specializing in handcrafted leather garments made from wild-sourced deer and elk hides.\n\nEach piece is designed and constructed start to finish by the artist, with a focus on fit, movement, and longevity.\n\nMost pieces are made to order, yet select pieces are available ready to wear.",
      "home.hero.description2": "From wild animals, these hides are so close to nature you can sense the earthy aliveness, feel it like the comfort of a hug, decadently supple. M designs *with* the natural hide, draping it on the body– more collaborating with hide and body than directing design from a 2d sketch. Raw edges contrast with elegant sweeping lines; and it is this combination of earthy rawness and irregular natural shapes with technically refined design that creates a fantastical effect.",
      "home.hero.cta": "Inquire",

      // About page
      "about.title": "About M Renee",
      "about.tagline": "Refined. Natural. Fantastical.",
      "about.intro": "M started sewing clothes as a child since what she desired to wear wasn't in stores, learning the technical skills to create her vision.",
      "about.paragraph1": "Growing up in rural Louisiana with a self-directed education shaped both her technical independence and her creative perspective—M has always designed outside of trend cycles, building garments from vision rather than reference.\n\nM Renee found ways– from the very beginning– to mix and match elements of traditional craftsmanship to realize her artistic visions, aided by guidance from her mother, a skilled seamstress. Elegance of line is a natural gift difficult to explain or to teach, but perceived instantly when experienced.",
      "about.paragraph2": "A nature loving wildling ever ready to jump in the water or on horseback, a hands-on healer valuing authenticity, M had no taste for the turn-over and trends of the fashion industry… but, making clothes in *leather* was a different story!\n\nIn her 20s, M's trajectory changed decisively when she made a leather garment as part of a Mardi Gras costume in New Orleans. She loved it, and continued wearing it in daily life, surprised by joy as it became *more* beautiful with wear instead of breaking down: timeless, practical, and expressive.\n\nThat leather look was one of a limited wardrobe she took for a two year traveling abroad adventure. From experience, she realized that leather offered something fabric could not: minimal maintenance and a sensory relationship to the body that improves with wear.\n\nStrangers repeatedly approached to ask where they could buy what she was wearing. That organic demand birthed this venture.",
      "about.paragraph3": "*Refined* skill and *Natural* materials converge as *Fantastical* artistic fashion: M Renee Designs, Est. 2014.\n\nIn her Houston workshop, M Renee creates bespoke slow fashion that feels as good as it looks.",
      "about.paragraph4": "Clients may apply to host a trunk show of current inventory for personal shopping where the designer will be available for custom order consultations. Host in your home, event space, or boutique.",
      "about.cta": "Inquire about a Trunk Show",
      "about.instagram": "Follow on Instagram",

      // Designs page
      "designs.title": "Ready to Wear Looks",
      "designs.subtitle": "Refined.  Natural.  Fantastical.",
      "designs.description": "Photos are for reference because the patterns are ever evolving.",
      "designs.elvira.title": "Sleek supple Elvira layering jacket in deerhide.",
      "designs.elvira.description": "Dynamic in professional environments, alluring on date nights, easy elegance at events, this jacket balances flare and style with timeless aesthetics. Lightweight and well-constructed, easy to take on any enterprise, and layers well under a heavier coat. A *jacket for all seasons*.",
      "designs.queen.title": "Queen Collar Coat with bell sleeves.",
      "designs.queen.description": "This vintage inspired design– empowering and feminine– accentuates and enhances the lines of your body with an elegance that is certainly not off-the-rack.",
      "designs.queen.variation": "*Variation:* Queen Collar Vest with peplum back.",
      "designs.duster.title": "Rustic Elegance Elkhide Duster.",
      "designs.duster.description": "Raw edge ruffle unique to each piece. The earthy quality of elk hide is evocative, and the weight is surprisingly comforting.",
      "designs.skirt.title": "Deerhide skirt.",
      "designs.skirt.description": "featuring the natural edge shape unique to each hide\nHero piece of early collections, this raw elegance and easy wearing sets it apart from conventional leather skirts. Convertible, may be worn as a shawl or cross body top.",
      "designs.bustier.title": "Crop bustier vest in deerhide.",
      "designs.bustier.description": "Sumptuous and supportive, this best-seller is a unique addition to your wardrobe.\nChoose flip collar or sleek décolletage neckline. Fringe may be added to the back.",
      "designs.halterDress.title": "Backless Halter Dress in deerhide.",
      "designs.halterDress.description": "Classy and alluring, this supple deerskin dress, unlined, feels decadent against the skin. Business in the front, party in the back, as comfortable as it is sexy. Halter top is supportive, with adjustable snaps at neck and back.\nChoose mini, midi, or maxi length and classic straight or asymmetric/raw hemline.",
      "designs.halterTop.title": "Halter top.",
      "designs.halterTop.description": "Versatile and lightweight, looks smashing alone or layers well. Deerhide takes your shape, softening to the curves of your particular body, and breathes wonderfully in warm weather.",
      "designs.fringe.title": "Custom fringe fashion.",
      "designs.fringe.description": "Cape, belt, shawl, skirt, etc.",
      "designs.madeToOrder.title": "Made to order.",
      "designs.madeToOrder.description": "Available colors include: black, dark chocolate, tobacco, willow off-white, or red.\nInquire for exotics or creating with your own hides.",
      "designs.timeline": "Timeline varies depending on the scale of the commission, respecting both the artistry of the piece and the Client's participation in the process.\nThis is slow fashion. Yours will be one of approximately 25 projects a year.",

      // Custom page
      "custom.title": "Bespoke Fashion",
      "custom.tagline": "Real materials, designed to be worn with pleasure, strong enough to last.",
      "custom.subtitle": "Custom",
      "custom.motto": "Refined. Natural. Fantastical.",
      "custom.description": "Custom design fittings are one on one, creating with the hides of your choice, draped to flatter your form, designed to suit your function in the Houston atelier, or at your location (contact for details).",
      "custom.refined.title": "Refined.",
      "custom.refined.items": "Designed for the body, including curves (customizable by cup size and measurements)\nElegant lines rather than boxy shapes means more intricate construction and more dynamic effects",
      "custom.natural.title": "Natural.",
      "custom.natural.items": "Raw edges and scars on each hide factor into the design\nWild hides have feeling that commercially farmed hides lack",
      "custom.fantastical.title": "Fantastical.",
      "custom.fantastical.items": "One of a kind pieces\nMade by the designer, rather than a factory, to honor and flatter your body",
      "custom.discretion": "Discretion is at the heart of the M Renee experience.\nAll measurements, communications, and private details entrusted to the Atelier are held in strict confidence. No Client's identity shall be revealed without explicit written consent. Photographs of works may appear in editorial or promotional contexts, yet always without attribution unless invited by the Client.",
      "custom.timeline": "Timeline varies depending on the scale of the commission, respecting both the artistry of the piece and the Client's participation in the process.\n\nThis is slow fashion. Yours will be one of approximately 25 projects a year.",
      "custom.cta": "Inquire about bespoke fashion",
      "custom.cta.link": "contact us",

      // Journals page
      "journals.title": "Nuance Journals",
      "journals.subtitle": "No two alike except in quality & craftsmanship",
      "journals.intro": "Before M Renee Designs there was Nuance Journals: quality handbound leather journals, each a one of a kind design, handcrafted with love.",
      "journals.cta.shop": "Shop available journals",
      "journals.process.title": "About the process",
      "journals.process.paragraph1": "Born of my passion for writing, journal making delights me. I'm honored to offer classic— yet distinctive— handmade journals designed for aesthetics, tactile decadence, and durable functionality.",
      "journals.process.paragraph2": "I buy paper in large format, then fold and tear it to size (rather than cutting it) for the feeling of soft edges that blend well with the deckle edges of handmade or artisan papers. I hand punch the holes and hand stitch each set of pages directly to a genuine leather cover with waxed Irish linen thread.",
      "journals.process.paragraph3": "This oldschool binding style allows the journal to lay flat open to any page— even open fully to 180 degrees without damaging the binding.",
      "journals.process.paragraph4": "Accent colors and deco are customizable.",
      "journals.process.cta": "Shop journals on Etsy",
      "journals.origins.title": "The Origins Of Nuance",
      "journals.origins.quote": "“Education is not the filling of a pail, but the lighting of a fire.”\nMy dad and I love that William Butler Yeats quotation!",
      "journals.origins.paragraph1": "Early as I could express myself, I had strong ideas about what I wanted to wear, and it was not to be found in stores. Thankfully, my mother is an excellent seamstress and taught me to sew my own clothes and bring my designs into being, starting when I was around 6. I designed and made my horse show clothes, my prom dress, and tailored any storebought clothes.",
      "journals.origins.paragraph2": "The story of how *leather* fashion design became my profession is circuitous. Fashion design college scholarship tempted me, but I chose a Forensics scholarship, double majoring in Literature and Philosophy, then started a business as a bookbinder of handmade leather journals when I moved home to Louisiana.",
      "journals.origins.paragraph3": "To be more specific...\nI began working with leather to make leather-bound journals, since I couldn't afford the journals that tantalized me since I first saw them in Florence, Italy, during college study abroad. My leather journals were such a hit that I launched a small business full time 2009.",
      "journals.origins.paragraph4": "In 2014, I made part of my Mardi Gras costume from leather I had on hand for journal covers. The costume top was such fun to wear, I made a skirt to go with it. Once I began wearing leather, I was smitten! The way leather breathes with– and is nourished by– my skin, and the way my body feels in leather, changed my paradigm. Low maintenance, long lasting, and full of pizazz, leather is my jam! Have you ever felt the gentle hug of supple, buttery soft deerskin?",
      "journals.origins.paragraph5": "That leather skirt and top was one of the few outfits I took with me on my European cycling adventure. People kept asking to buy the leather outfit I'd made on a whim before leaving New Orleans. I didn't want to sell that particular outfit, but I started thinking...",
      "journals.origins.paragraph6": "At first, only custom work, but now I also offer ready-to-wear and leather handbags.",
      "journals.origins.tagline": "My fire is lit",
      "journals.origins.cta": "Visit the Etsy shop",
      "journals.fromMyJournal.title": "From My Journal",
      "journals.fromMyJournal.tagline": "When I'm not making journals, I'm writing in them",
      "journals.fromMyJournal.text": "Cycling around Italy and France, I carried my featherlight Nuance Journal of handmade Lokta paper from Nepal.",
      "journals.fromMyJournal.cta": "I want one! Take me to the shop!",

      // Bags page
      "bags.title": "Nuance Bags",
      "bags.subtitle": "Fine leather, one of a kind \u2014 no two bags alike.",
      "bags.intro": "As the Nuance line grew, the hides bought for journal covers began asking for more. Bags were the natural next step: the same wild leather, raw edges, and hand craftsmanship \u2014 on a bigger canvas.",
      "bags.cta.shop": "Shop available bags",
      "bags.expansion.title": "From Journals to Bags",
      "bags.expansion.paragraph1": "Nuance began with handbound leather journals. Working with whole hides for the covers, Emily found herself with leather too beautiful to cut small \u2014 supple elk, rugged moose, buttery deerskin with edges shaped by nature.",
      "bags.expansion.paragraph2": "Bags let the hide speak at full size. Each messenger and purse is designed around a particular skin: raw edges become flaps and fringe, scars and color shifts become the signature of the piece. Leather lined, hand finished, made to be carried every day and to grow more beautiful doing it.",
      "bags.expansion.paragraph3": "The bags were the bridge: from journals to leather goods \u2014 and eventually, by way of a certain Mardi Gras costume, to the clothing that became M Renee Designs.",
      "bags.expansion.cta": "Shop bags on Etsy",
      "bags.designs.title": "The Designs",
      "bags.designs.tagline": "Messengers, fringe purses, and one of a kind layered bags",
      "bags.designs.text": "Gator-accented teal, purple layered hides, chocolate and cream fringe, raw edge earth and water, weightless elk\u2026 every bag in the shop is the only one of its kind.",
      "bags.designs.cta": "I want one! Take me to the shop!",

      // Contact page
      "contact.title": "Contact Us",
      "contact.email.label": "Email:",
      "contact.phone.label": "Phone:",
      "contact.location.label": "Location:",
      "contact.location.value": "Houston Heights",
      "contact.hours.label": "Hours:",
      "contact.hours.value": "By appointment",
      "contact.social.label": "Follow on Instagram",

      // Footer
      "footer.copyright": "M. Renee Designs. All rights reserved.",

      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.designs": "Looks",
      "nav.custom": "Custom",
      "nav.journals": "Journals",
      "nav.bags": "Bags",
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
