import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Sparkles, Sliders, Scissors, Heart, Calendar, HelpCircle, Flame } from "lucide-react";
import { SERVICES_DATA } from "../data";

interface MicroAtelierService {
  name: string;
  category: string;
  price: string;
  blurb: string;
}

const MICRO_SERVICES: MicroAtelierService[] = [
  { name: "HD Photographic Makeup", category: "Face Art", price: "Included in packages", blurb: "Ultra fine pigments that disperse light flawlessly under raw 4K lenses." },
  { name: "Elite Airbrush Systems", category: "Face Art", price: "+ $250 addition", blurb: "Mist technology sealing base with skin mimetic, breathable polymers." },
  { name: "Engagement Ceremony Glam", category: "Ritual Looks", price: "Starts from $750", blurb: "A classic, elegant balance of soft peaches and medium shimmer focal look." },
  { name: "Haldi Sunlit Glow", category: "Ritual Looks", price: "Starts from $500", blurb: "Highly luminous marigold dust highlighter paired with waterproof sheer tint." },
  { name: "Mehendi Boho Radiance", category: "Ritual Looks", price: "Starts from $550", blurb: "Earthy, warm organic bronzes paired with soft dewy bitten cheeks." },
  { name: "High-Fashion Editorial", category: "Fashion & Photo", price: "Custom Estimate", blurb: "Avant-garde or extreme minimal runway aesthetics tailored to custom shoots." },
  { name: "VIP Party Glamour", category: "Social Events", price: "Starts from $400", blurb: "Symmetrical feline liners, deep contours, and long-wear pigments." },
  { name: "Creative Photoshoot Styling", category: "Fashion & Photo", price: "Starts from $450", blurb: "Makeup mapped precisely to the focal length and warmth of your lens." },
  { name: "Editorial Haute Hairstyling", category: "The Crown", price: "Included in packages", blurb: "Elegant Hollywood waves, intricate traditional braids, or deconstructed buns." },
  { name: "Luxury Saree / Dupatta Draping", category: "Cohesive Fit", price: "Included in packages", blurb: "Micro-perfect structural pleating aligned seamlessly to your body movement." }
];

export default function Services() {
  const [activeCornerstone, setActiveCornerstone] = useState(0);
  const [selectedAtelierFilter, setSelectedAtelierFilter] = useState("All");

  const filterCategories = ["All", "Face Art", "Ritual Looks", "Fashion & Photo", "Social Events", "The Crown"];

  const filteredMicroServices = selectedAtelierFilter === "All"
    ? MICRO_SERVICES
    : MICRO_SERVICES.filter(item => item.category === selectedAtelierFilter);

  // Helper to jump scroll down to booking & highlight look
  const handleBookLookClick = (lookTitle: string) => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
      const styleSelect = document.getElementById("makeupStyle") as HTMLSelectElement;
      if (styleSelect) {
        styleSelect.value = lookTitle;
        // Trigger generic change event to update potential state
        const e = new Event("change", { bubbles: true });
        styleSelect.dispatchEvent(e);
      }
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#FAF7F2] overflow-hidden border-t border-luxury-gold/15">
      {/* Decorative backing glows */}
      <div className="absolute top-[30%] left-[-20%] w-[600px] h-[600px] bg-luxury-radial-glow opacity-20 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-20%] w-[600px] h-[600px] bg-luxury-radial-glow opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.35em] uppercase text-luxury-gold font-mono font-bold block">
            THE ATELIER SELECTIONS
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1817] tracking-tight">
            Our <span className="text-gold-gradient font-display italic">Luxury Services</span> Catalog
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto" />
          <p className="text-[#1A1817]/70 text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Vogue-level bridal design categorized into blockbuster flagship packages and tailored micro-services.
          </p>
        </div>

        {/* SECTION A: BLOCKBUSTER FLAGSHIPS (Big visual sliding carousel / details) */}
        <div className="mb-28">
          <div className="flex flex-col lg:flex-row items-center justify-between pb-6 border-b border-[#1A1817]/15 mb-10">
            <h3 className="font-serif text-xl text-[#1A1817] tracking-wider mb-4 lg:mb-0 flex items-center">
              <Sparkles className="w-5 h-5 text-luxury-gold mr-3 animate-spin duration-[4000ms]" />
              ATELIER BLOCKBUSTER PACKAGES
            </h3>
            <div className="flex flex-wrap gap-2">
              {SERVICES_DATA.map((srv, idx) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveCornerstone(idx)}
                  className={`px-4 py-2 rounded-full text-[10px] tracking-widest uppercase transition-all duration-300 ${
                    activeCornerstone === idx 
                      ? "bg-luxury-gold text-[#1A1817] font-bold shadow-sm" 
                      : "bg-white/70 text-[#1A1817]/60 hover:text-[#1A1817] hover:bg-white border border-luxury-gold/20"
                  }`}
                >
                  {srv.title.split(" - ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Cornerstone display box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCornerstone}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/70 rounded-2xl border border-luxury-gold/25 overflow-hidden p-6 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
            >
              
              {/* Image with extreme cinematic hover zoom */}
              <div className="col-span-1 lg:col-span-6 relative overflow-hidden rounded-xl group h-[300px] md:h-[400px] border border-luxury-gold/15 shadow-sm">
                <img
                  src={SERVICES_DATA[activeCornerstone].imageUrl}
                  alt={SERVICES_DATA[activeCornerstone].title}
                  className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-all duration-[1s] ease-in-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-luxury-gold text-[#1A1817] border border-luxury-gold/30 px-3 py-1 text-[10px] uppercase font-mono tracking-widest rounded-md font-bold shadow-sm">
                  {SERVICES_DATA[activeCornerstone].duration}
                </div>
              </div>

              {/* Package detailed info */}
              <div className="col-span-1 lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-display text-gold-gradient font-bold">MAISON EXCLUSIVITY</span>
                    <span className="text-2xl font-serif text-[#1A1817] tracking-wider font-semibold">{SERVICES_DATA[activeCornerstone].price}</span>
                  </div>
                  <h4 className="font-serif text-2.5xl md:text-3xl text-[#1A1817] tracking-wide font-normal">
                    {SERVICES_DATA[activeCornerstone].title}
                  </h4>
                  <p className="text-[#1A1817]/80 text-xs md:text-sm font-light leading-relaxed">
                    {SERVICES_DATA[activeCornerstone].description}
                  </p>
                </div>

                {/* List highlights */}
                <div className="space-y-3 bg-white/80 p-5 rounded-xl border border-luxury-gold/20">
                  <span className="text-[10px] tracking-widest font-mono text-[#1A1817]/50 uppercase block mb-1 font-bold">EDITORIAL SPECIFICATIONS:</span>
                  {SERVICES_DATA[activeCornerstone].editorialDetails.map((det, index) => (
                    <div key={index} className="flex items-start space-x-2.5 text-xs text-[#1A1817]/85">
                      <span className="text-luxury-gold select-none mt-0.5">✧</span>
                      <span className="font-light">{det}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleBookLookClick(SERVICES_DATA[activeCornerstone].title)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-luxury-gold to-[#F5E6D3] text-[#1A1817] text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:shadow-md transition-all duration-300 border border-luxury-gold/25"
                  >
                    Reserver Look & Consultation
                  </button>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* SECTION B: THE MICRO-ATELIER MENUS (The high-end customized catalog grid) */}
        <div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#1A1817]/10 mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="font-serif text-xl text-[#1A1817] tracking-wider uppercase">
                ATELIER TAILORED SPECIALTIES
              </h3>
              <p className="text-[11px] text-[#1A1817]/50 tracking-widest mt-1 uppercase font-semibold">
                Custom menu items configured dynamically
              </p>
            </div>
            {/* Category selection */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {filterCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedAtelierFilter(cat)}
                  className={`px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase transition-colors ${
                    selectedAtelierFilter === cat 
                      ? "bg-luxury-gold/20 text-[#1A1817] border border-luxury-gold/30 font-bold" 
                      : "bg-transparent text-[#1A1817]/50 hover:text-[#1A1817] border border-transparent font-medium"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMicroServices.map((mSrv, ind) => (
              <motion.div
                key={mSrv.name}
                className="p-6 bg-white/65 rounded-xl border border-luxury-gold/20 flex flex-col justify-between hover:border-luxury-gold/55 hover:bg-white transition-all duration-300 group shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ind * 0.05, duration: 0.5 }}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono tracking-widest text-[#1A1817]/40 uppercase font-semibold">
                      {mSrv.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#1A1817] whitespace-nowrap bg-luxury-gold/20 px-2.5 py-0.5 rounded-full">
                      {mSrv.price}
                    </span>
                  </div>
                  <h4 className="font-serif text-base text-[#1A1817] group-hover:text-luxury-gold transition-colors duration-300 font-semibold">
                    {mSrv.name}
                  </h4>
                  <p className="text-[#1A1817]/75 text-[11.5px] font-light leading-relaxed">
                    {mSrv.blurb}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1A1817]/10 flex items-center justify-between text-[10px]">
                  <span className="text-[#1A1817]/40 italic font-serif">Maison Elite Ingredient</span>
                  <button
                    onClick={() => handleBookLookClick(mSrv.name)}
                    className="text-luxury-gold hover:text-luxury-gold font-bold flex items-center space-x-1 outline-none font-sans uppercase tracking-[0.15em] text-[10px]"
                  >
                    <span>Request Addition</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
