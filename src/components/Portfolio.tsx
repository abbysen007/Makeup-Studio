import { useState, useRef, useEffect, TouchEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Info, Sparkles, Sliders } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sliderPosition, setSliderPosition] = useState(50);
  const beforeAfterContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { key: "all", label: "Master Portfolio" },
    { key: "bengali", label: "Bengali Bridal" },
    { key: "royal", label: "Royal Bridal" },
    { key: "minimal_lux", label: "Minimal Luxury" },
    { key: "reception", label: "Reception Glam" },
    { key: "soft_dewy", label: "Soft Dewy Looks" },
    { key: "traditional", label: "Traditional Bridal" }
  ];

  // Drag function for Before/After transformation slider
  const handleDrag = (clientX: number) => {
    if (!beforeAfterContainerRef.current) return;
    const { left, width } = beforeAfterContainerRef.current.getBoundingClientRect();
    const relativeX = clientX - left;
    const position = Math.max(0, Math.min(100, (relativeX / width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) handleDrag(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1) handleDrag(e.clientX);
  };

  const filteredItems = selectedCategory === "all"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === selectedCategory || (selectedCategory === "traditional" && ["traditional", "bengali"].includes(item.category)));

  return (
    <section id="portfolio" className="relative py-28 bg-[#FAF0ED] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-[-10%] right-[-20%] w-[500px] h-[500px] bg-luxury-radial-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.35em] uppercase text-luxury-gold font-mono font-bold block">
            THE GALLERY MASTERPIECES
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1817] tracking-tight">
            The <span className="text-gold-gradient font-display italic">Editorial Portfolio</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto" />
          <p className="text-[#1A1817]/70 text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Witness our highly addictive, real transformations. Swipe standard camera-neutral skin into spectacular royalty.
          </p>
        </div>

        {/* 1. BEFORE AFTER INTERACTIVE DRAG SLIDER */}
        <div className="max-w-3xl mx-auto mb-28">
          <h3 className="font-serif text-sm text-center text-[#1A1817] tracking-widest uppercase mb-6 flex items-center justify-center space-x-2 font-bold">
            <Sparkles className="w-4.5 h-4.5 text-luxury-gold" />
            <span>INTERACTIVE SKIN ALCHEMY SLIDER</span>
          </h3>
          
          <div 
            ref={beforeAfterContainerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative border border-luxury-gold/30 select-none cursor-ew-resize photo-box group shadow-sm"
          >
            {/* AFTER BEAUTIFIED IMAGE (Full Screen Base) */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80" 
                alt="After Bridal Glamour"
                className="w-full h-full object-cover"
                draggable="false"
                referrerPolicy="no-referrer"
              />
              {/* After label */}
              <div className="absolute bottom-4 right-4 bg-luxury-gold text-[#1A1817] px-3.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-[0.2em] font-bold shadow-sm">
                AFTER: MAISON ILLUMINATED GLOW
              </div>
            </div>

            {/* BEFORE NORMAL SKIN IMAGE (Clipped on top dependend on drag position) */}
            <div 
              className="absolute inset-0 z-10"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80" 
                alt="Before Organic Skin"
                className="w-full h-full object-cover filter saturate-[0.85] contrast-[0.95]"
                draggable="false"
                referrerPolicy="no-referrer"
              />
              {/* Before label */}
              <div className="absolute bottom-4 left-4 bg-[#1A1817] text-white px-3.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-[0.2em] font-bold">
                BEFORE: CLAY-PURIFIED BIO CANVAS
              </div>
            </div>

            {/* SEPARATOR SLIDER BAR AND DRAG HANDLE BUTTON */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-luxury-gold-light z-25 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-[45%] -translate-y-1/2 -left-[18px] w-9 h-9 rounded-full bg-white border-2 border-luxury-gold flex items-center justify-center shadow-lg">
                <Sliders className="w-3.5 h-3.5 text-luxury-gold rotate-90 animate-pulse" />
              </div>
            </div>

            {/* Hover guidance tooltip */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center text-center p-4 transition-all duration-500 pointer-events-none z-20">
              <div className="bg-white/95 border border-luxury-gold/35 p-5 rounded-2xl shadow-md max-w-xs scale-90 group-hover:scale-100 transition-transform duration-500 text-[#1A1817]">
                <Sliders className="w-8 h-8 text-luxury-gold mx-auto mb-2.5" />
                <p className="font-serif text-sm font-bold">Skin Alchemy Drag</p>
                <p className="text-[10px] text-[#1A1817]/80 leading-relaxed font-light mt-1">
                  Click and slide the separator handle left & right to witness the flawless HD camouflage transition.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 2. CHOSEN CATEGORIES FILTER SLIDE */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-500 ${
                selectedCategory === cat.key
                  ? "bg-luxury-gold/20 text-[#1A1817] border border-luxury-gold/40 font-bold shadow-sm"
                  : "bg-transparent text-[#1A1817]/50 hover:text-[#1A1817] border border-transparent font-medium"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3. PINTEREST MASONRY DEWY LOOK GALLERIES */}
        <motion.div 
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="break-inside-avoid relative glass-luxury rounded-2xl overflow-hidden border border-luxury-gold/25 group shadow-sm bg-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                layout
              >
                {/* Visual Cover image */}
                <div className="relative overflow-hidden h-auto max-h-[480px]">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full object-cover filter brightness-[0.95] group-hover:scale-[1.03] transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category overlay tab indicator */}
                  <span className="absolute top-4 left-4 text-[9px] font-mono tracking-widest text-[#1A1817] bg-white/90 border border-luxury-gold/20 font-bold px-3 py-1 rounded shadow-sm">
                    {item.category.replace("_", " ").toUpperCase()}
                  </span>
                </div>

                {/* Detail content card bottom */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-serif text-base text-[#1A1817] tracking-wider font-semibold group-hover:text-luxury-gold transition-colors duration-300">
                      {item.title}
                    </h4>
                    <div className="w-8 h-[1px] bg-luxury-gold/40 mt-2" />
                  </div>

                  {/* Micro Recipe elements */}
                  <div className="space-y-1.5 pt-1.5">
                    <span className="text-[9px] tracking-widest font-mono text-[#1A1817]/40 uppercase block font-bold">LOOK FORMULATION:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.makeupDetails.map((det) => (
                        <span key={det} className="text-[10px] text-[#1A1817] bg-[#FAF7F2] border border-[#E2B49A]/30 px-2.5 py-0.5 rounded-full font-medium">
                          {det}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* High luxury skin secret tip section */}
                  <div className="bg-[#FAF7F2]/60 border-l-2 border-luxury-gold p-3 rounded-r-lg text-[10.5px] text-[#1A1817]/85 font-light font-sans flex items-start space-x-2">
                    <Info className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                    <span><strong>Skin Secret:</strong> {item.skinSecret}</span>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Portfolio wrapper */}
        <div className="mt-20 text-center">
          <p className="text-sm font-serif italic text-[#1A1817] mb-4">
            &ldquo;Skin care is a science. Beauty is an absolute fine-art campaign.&rdquo;
          </p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="referrer"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest uppercase text-luxury-gold hover:text-luxury-gold-light transition duration-300"
          >
            <span>DISCOVER TODAY'S DIARY ON INSTAGRAM</span>
            <span className="text-[10px] animate-pulse">● LIVE</span>
          </a>
        </div>

      </div>
    </section>
  );
}
