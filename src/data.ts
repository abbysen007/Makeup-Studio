import { BridalService, PortfolioItem, BrideTestimonial } from "./types";

export const SERVICES_DATA: BridalService[] = [
  {
    id: "premium-royal",
    title: "The Royal Couture Bridal Look",
    duration: "4.5 Hours",
    price: "$1,850",
    description: "Our signature luxury transformation designed for brides seeking the absolute highest standard of heritage and modern royalty. Handcrafted skin alchemy paired with bespoke feature-sculpting.",
    editorialDetails: [
      "Custom pre-makeup custom luxury facial preparation & ice relief",
      "High-definition airbrush mesh technology for poreless 24h wear",
      "Bespoke individual mink-silk lash customization",
      "Saree / Dupatta draping, premium jewelry styling & structural alignment",
      "Exclusive golden shimmer chest & shoulder liquid couture"
    ],
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "minimal-lux",
    title: "Minimal Luxury Editorial",
    duration: "3.5 Hours",
    price: "$1,400",
    description: "The peak of under-stated, quiet luxury. Inspired by modern Paris, Dior beauty sheets, and high-fashion editorial. Emphasizes sheer, lit-from-within skin glow, feathered brows, and custom nudes.",
    editorialDetails: [
      "Glass-skin micro-layer moisture therapy (La Mer signature base)",
      "Featherweight breathable HD pixel matching foundation",
      "Organic monochrome contour & custom tint matching",
      "Handcrafted individual lash extensions for organic elegance",
      "Signature soft glaze cashmere lip finish"
    ],
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dewy-luminous",
    title: "Signature Dewy Luminous Glow",
    duration: "3.5 Hours",
    price: "$1,550",
    description: "Optimized specifically for high-sun, outdoor, or beach environments. This is our ultra-demanded hyper-natural glowing makeup system that resists moisture and sweat while mimicking real, pristine skin.",
    editorialDetails: [
      "Waterproofing skin lock treatment with marine extracts",
      "Sunkissed bronze highlighting overlay using mineral pigment",
      "Delicate cream blush melted into the skin with warm oils",
      "Waterproof lip plump & satin finish",
      "Full body collarbone and shoulder illumination veil"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "vogue-reception",
    title: "The Reception Champagne Glam",
    duration: "3 Hours",
    price: "$1,250",
    description: "Designed for spectacular evening lighting, luxury chandeliers, and high-contrast photography. A premium blend of metallic dustings, sharp custom liners, and bold premium lip sculpting.",
    editorialDetails: [
      "High-def spotlight eyeshadow blend with micro-champagne golds",
      "Precision carbon double-liner for cinematic symmetry",
      "Sculpted dimensional bronze highlighting with pearl reflect",
      "Pro-wear velvet matte luxury lip color of choice",
      "Complete photography ready strobe matching test"
    ],
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "p1",
    title: "Priscilla - Celestial Royal Elegance",
    category: "royal",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    makeupDetails: ["Premium Airbrush Base", "Pure Gold Foil Eyeshadow", "Traditional Silk Wing Liner", "Cashmere Rose Lip"],
    skinSecret: "Prepped with Charlotte Tilbury Flawless Filter & Crème de la Mer."
  },
  {
    id: "p2",
    title: "Alisha - Minimalist Parisian Dew",
    category: "minimal_lux",
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    makeupDetails: ["Dewy Glass Skin Barrier", "Feathered Wild Brows", "Soft Peach Melt Blush", "Nude Satin Glaze Lip"],
    skinSecret: "Sealed with Chanel Les Beiges illuminating oil drops."
  },
  {
    id: "p3",
    title: "Sanjana - Imperial Bengali Royal",
    category: "traditional",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    makeupDetails: ["Chandan Hand-detail framing", "Deep Crimson Lips", "Bold Kohled Eyes", "Highlight Sculpted Temple"],
    skinSecret: "Primed with bespoke sandalwood essence and HD Airbrush lock."
  },
  {
    id: "p4",
    title: "Sasha - Candlelit Reception Glam",
    category: "reception",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    makeupDetails: ["Smoked Espresso Eyes", "Golden Platinum Dusting", "Velvet Nude Lipliner", "Sculpting Shadow-contour"],
    skinSecret: "Glow optimized using Tom Ford Shade & Illuminate Cream."
  },
  {
    id: "p5",
    title: "Katarina - Sunset Luminous Dew",
    category: "soft_dewy",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    makeupDetails: ["Coral-Pink Monochromatic tint", "Hydrated Velvet Base", "Waterproof Silk Lashes", "Bitten Rose Plumper"],
    skinSecret: "Infused with Laneige Water Glow Booster serum."
  },
  {
    id: "p6",
    title: "Elena - Editorial Classic Glamour",
    category: "minimal_lux",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    makeupDetails: ["Velvety Matte Porcelain Base", "Feline Eye Flick", "Statement Crimson Satin Lip", "Subtle Peach Sculpt"],
    skinSecret: "Sealed with Dior Forever Luminous breathable mist."
  }
];

export const TESTIMONIALS_DATA: BrideTestimonial[] = [
  {
    id: "t1",
    name: "Genevieve Thorne",
    weddingLocation: "Château de Chantilly, France",
    weddingDate: "September 14, 2025",
    vibe: "Warm Ethereal Glow",
    quote: "I looked in the mirror and completely teared up. It felt expensive, it felt deeply luxurious, but above all, I felt completely like myself. Every single guest complimented my skin glow.",
    detailedStory: "Genevieve requested a high-fashion look that could withstand 16 hours of travel, tears, and candlelit dancing. We created a bespoke dew shield that photographed beautifully from every single camera angle.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    instagramHandle: "@genevieve.thorne"
  },
  {
    id: "t2",
    name: "Navya Sen",
    weddingLocation: "Umaid Bhawan Palace, Jodhpur",
    weddingDate: "December 02, 2025",
    vibe: "Imperial Royal Traditional",
    quote: "Meticulous work! The airbrush application was absolutely feather-light. She balanced structural modern aesthetics with my grandmother's heirloom heavy gold jewelry with masterpiece precision.",
    detailedStory: "Navya wanted to merge high-fashion editorial skin with centuries-old Indian bridal colorways. We designed a gold-accented eye and pure classic velvet crimson lips matching her heavy crimson embroidered lehenga.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    instagramHandle: "@navya.sen_royal"
  },
  {
    id: "t3",
    name: "Audrey Laurent",
    weddingLocation: "Villa d'Este, Lake Como",
    weddingDate: "May 08, 2026",
    vibe: "French Modern Minimalist",
    quote: "She is a literal skin alchemist. My skin has never looked so pristine, hydrated, and elegant. It felt like living inside a Chanel beauty advertisement first class.",
    detailedStory: "Audrey wanted an incredibly sheer base that could merge directly with the lake breeze. We focused on hydration-boosting skin sheets, strategic cheek frosting, and custom gloss layers.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    instagramHandle: "@audreylaurent"
  }
];

export const EXPERIENCE_STEPS = [
  {
    phase: "01",
    title: "Cinematic Virtual Consult & Vision",
    subtitle: "Mapping Your Photographic Vision",
    desc: "We analyze your facial structure, camera lighting setup, fabrics, and jewelry style. Utilizing custom facial mapping, we design an inspired Mood Board representing your private identity.",
    timeframe: "Immediately Upon Booking"
  },
  {
    phase: "02",
    title: "Custom Cellular Prep & Timeline",
    subtitle: "The 30-Day Pure Skin Countdown",
    desc: "Beauty starts beneath the cosmetics. We collaborate with world-class skin specialists to design a cellular nourishment itinerary, keeping you breakout-free, plump, and deeply hydrated.",
    timeframe: "30 Days Leading Up"
  },
  {
    phase: "03",
    title: "The Editorial Master Trial",
    subtitle: "High-Fashion Dress Rehearsal",
    desc: "A relaxed, champagne-fueled trial session where we sculpt your full beauty look down to the microscopic detail. We take sample high-resolution studio photos to preview camera behavior.",
    timeframe: "2-4 Weeks Before"
  },
  {
    phase: "04",
    title: "The VIP Transformation",
    subtitle: "The Masterpiece Wedding Glam",
    desc: "Our master artist team arrives at your estate/hotel suite with custom lighting, sterilizers, and our private vault of luxury items. We keep your bridal party completely calm, pampered, and stunningly gorgeous.",
    timeframe: "The Magnificent Day"
  }
];
