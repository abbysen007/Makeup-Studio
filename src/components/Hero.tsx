import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Instagram, Star, Award, ChevronDown } from "lucide-react";

interface HeroLookVibe {
  id: string;
  name: string;
  imgUrl: string;
  subTitle: string;
  tagline: string;
  quote: string;
  glowColor: string;
}

const HERO_VIBES: HeroLookVibe[] = [
  {
    id: "vibe-royal",
    name: "Imperial Royal",
    imgUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=90",
    subTitle: "For Heritage Elegance",
    tagline: "LUXURY BRIDAL BEAUTY DESIGNED TO BE REMEMBERED",
    quote: "A masterpiece blend of rich historical textures, sculpted 24k luster, and pure symmetry.",
    glowColor: "from-[#8e6d2f]/30"
  },
  {
    id: "vibe-editorial",
    name: "Riviera Luminous",
    imgUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=90",
    subTitle: "Quiet French Luxury",
    tagline: "CRAFTING BRIDAL MAGIC THAT FEELS TIMELESS",
    quote: "Sheer, hydration-plumped canvas, feathered brow alignments, and cashmeres.",
    glowColor: "from-[#b8857a]/30"
  },
  {
    id: "vibe-glam",
    name: "Golden Hour Sunset",
    imgUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=90",
    subTitle: "Spotlight Reception Glam",
    tagline: "FOR BRIDES WHO WANT TO FEEL UNFORGETTABLE",
    quote: "Dazzling high-definition metallic dusts paired with luxury liquid contours.",
    glowColor: "from-[#c5a059]/40"
  }
];

export default function Hero() {
  const [activeVibeIndex, setActiveVibeIndex] = useState(0);
  const activeVibe = HERO_VIBES[activeVibeIndex];

  // Auto-slide to show off different luxury models unless clicked
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVibeIndex((prev) => (prev + 1) % HERO_VIBES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="luxury-hero" className="relative w-full min-h-screen bg-[#FAF0ED] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Editorial radial glow background pattern */}
      <div className="absolute inset-0 z-0 bg-luxury-radial-glow pointer-events-none select-none" />

      {/* Elegant framed backdrop layout */}
      <div className="absolute inset-0 z-0 opacity-[0.22] pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVibe.id}
            className="absolute right-0 top-0 w-1/2 h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={activeVibe.imgUrl}
              alt=""
              className="w-full h-full object-cover filter grayscale-[40%]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF0ED] via-[#FAF0ED]/85 to-transparent" />
      </div>

      {/* Floating light particles (Decorative Ambient Sparks) */}
      <div className="absolute inset-0 z-1 pointer-events-none select-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-br from-luxury-gold to-[#E2B49A] rounded-full opacity-30"
            style={{
              top: `${20 + i * 12}%`,
              left: `${15 + (i * 137) % 70}%`,
            }}
            animate={{
              y: [-15, -60],
              x: [-10, 10],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 7 + (i % 3) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Hero Core Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
        
        {/* Narrative Side (Left column: Typography and CTA) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start space-y-8 mt-10 lg:mt-0">
          
          {/* Booking Opening Banner */}
          <motion.div
            className="flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-white/70 backdrop-blur-md shadow-sm"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-bounce" />
            <span className="text-[10px] tracking-[0.25em] font-mono text-[#1A1817] uppercase font-semibold">
              2026 BRIDAL BOOKINGS OPEN
            </span>
          </motion.div>

          {/* Epic Main Headline */}
          <div className="space-y-4">
            <h2 className="text-[#1A1817]/50 tracking-[0.3em] uppercase text-[10px] font-mono font-bold">
              MAISON DE BEAUTÉ — {activeVibe.subTitle}
            </h2>
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeVibe.id}
                className="font-serif font-light text-4xl sm:text-5xl xl:text-7xl tracking-normal text-[#1A1817] leading-[1.1] relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeVibe.tagline.split(" ").map((word, index) => {
                  const isGold = ["TIMELESS", "REMEMBERED", "UNFORGETTABLE", "MAGIC", "LUXURY", "BEAUTY"].includes(word.replace(/[",.]/g, ""));
                  return (
                    <span 
                      key={index} 
                      className={`inline-block mr-2.5 ${isGold ? "text-gold-gradient font-display italic font-normal" : "font-serif"}`}
                    >
                      {word}
                    </span>
                  );
                })}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtitle / Philosopy Quote */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeVibe.id}
              className="text-[#1A1817]/80 font-light text-sm md:text-base max-w-xl leading-relaxed border-l-2 border-luxury-gold/40 pl-4 font-sans italic"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.6 }}
            >
              &ldquo;{activeVibe.quote}&rdquo; — Creating elegant bridal transformations that feel emotional, timeless, luxurious, and absolute masterpieces.
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Lead Booking Form */}
            <a
              href="#booking"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-gold to-[#F5E6D3] text-[#1A1817] text-center text-xs font-semibold tracking-[0.25em] uppercase hover:scale-[1.03] transition-all duration-300 relative overflow-hidden group shadow-md border border-luxury-gold/20"
            >
              <span className="relative z-10 font-bold">Secure Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

            {/* View Masterpiece Gallery */}
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-[#1A1817]/15 hover:border-luxury-gold bg-white/40 backdrop-blur-md text-[#1A1817] text-center text-xs tracking-[0.2em] uppercase hover:bg-white/80 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Masterpieces</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Social Proof Badges with Premium counters */}
          <motion.div
            className="pt-6 border-t border-[#1A1817]/10 w-full grid grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="flex flex-col">
              <span className="text-xl font-display text-[#1A1817] font-semibold">500+</span>
              <span className="text-[9px] text-[#1A1817]/40 tracking-widest uppercase font-mono mt-1 font-bold">
                Luxury Brides
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display text-[#1A1817] font-semibold flex items-center">
                4.9<Star className="w-3.5 h-3.5 fill-luxury-gold stroke-none inline ml-1" />
              </span>
              <span className="text-[9px] text-[#1A1817]/40 tracking-widest uppercase font-mono mt-1 font-bold">
                Verified Reviews
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display text-[#1A1817] font-semibold animate-pulse">12+ Yrs</span>
              <span className="text-[9px] text-[#1A1817]/40 tracking-widest uppercase font-mono mt-1 font-bold">
                Maison Mastery
              </span>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Interactive Vibe Morphing Grid panel (Right column) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col space-y-4">
          
          <div className="glass-luxury rounded-2xl p-6 relative overflow-hidden border border-luxury-gold/20 shadow-md">
            {/* Shimmer line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/45 to-transparent animate-luxury-shimmer" />

            <div className="flex justify-between items-center mb-6 border-b border-[#1A1817]/10 pb-3">
              <span className="text-[10px] tracking-[0.3em] font-mono text-luxury-gold uppercase font-bold">
                CHAMPAGNE LOOK BOOK
              </span>
              <div className="flex items-center space-x-1 text-[9px] text-[#1A1817]/40 tracking-widest font-mono font-bold">
                <span>VIBE {activeVibeIndex + 1}/{HERO_VIBES.length}</span>
              </div>
            </div>

            {/* Vibe Selection Button Stack */}
            <div className="space-y-4">
              {HERO_VIBES.map((vibe, index) => {
                const isActive = activeVibeIndex === index;
                return (
                  <button
                    key={vibe.id}
                    onClick={() => setActiveVibeIndex(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-500 ease-in-out flex items-center justify-between border ${
                      isActive 
                        ? "bg-luxury-gold/20 border-luxury-gold shadow-sm transform translate-x-1" 
                        : "bg-white/40 border-transparent hover:border-luxury-gold/30 hover:bg-white/70"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Tiny preview thumbnail */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#1A1817]/10 select-none pointer-events-none">
                        <img 
                          src={vibe.imgUrl} 
                          alt={vibe.name}
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-xs uppercase tracking-[0.15em] font-bold ${isActive ? "text-[#1A1817]" : "text-[#1A1817]/70"}`}>
                          {vibe.name}
                        </span>
                        <span className="text-[10px] text-[#1A1817]/50 italic font-serif">
                          {vibe.subTitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {isActive ? (
                        <div className="w-2 h-2 rounded-full bg-luxury-gold animate-ping" />
                      ) : (
                        <span className="text-[10px] font-mono text-[#1A1817]/30 font-bold">VIBE</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* FOMO Exclusivity Micro Footer */}
            <div className="mt-6 pt-4 border-t border-[#1A1817]/10 text-center">
              <p className="text-[9.5px] tracking-widest font-mono text-luxury-gold uppercase font-bold">
                ⚡ Only 3 Bridal Slots Left For December 2026
              </p>
            </div>
          </div>

          {/* Elite Micro Review Card floating below lookbook */}
          <motion.div
            className="glass-luxury-light rounded-xl p-4 flex items-center space-x-3.5 text-xs border border-luxury-gold/15 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="w-9 h-9 rounded-full bg-luxury-gold flex items-center justify-center font-serif font-semibold text-[#1A1817] text-xs shrink-0 shadow-sm border border-luxury-gold/20">
              M
            </div>
            <div>
              <p className="font-serif italic font-light text-[#1A1817]/90 leading-snug">
                &ldquo;She created my dream royal look! Pure celebrity treatment.&rdquo;
              </p>
              <p className="text-[9px] font-mono text-[#1A1817]/50 uppercase tracking-widest mt-1 font-bold">
                — Melanie S., Lake Como Bride
              </p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#1A1817]/40 mb-2 font-bold">SCROLL TO DISCOVER</span>
        <motion.div 
          className="w-5 h-8 rounded-full border border-luxury-gold/40 flex justify-center pt-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-luxury-gold" />
        </motion.div>
      </div>

    </div>
  );
}
