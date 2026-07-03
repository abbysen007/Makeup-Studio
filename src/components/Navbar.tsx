import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Brand Story", href: "#story" },
    { name: "The Experience", href: "#experience" },
    { name: "Our Services", href: "#services" },
    { name: "Master Portfolio", href: "#portfolio" },
    { name: "AI Vision Planner", href: "#ai-planner", highlighted: true },
  ];

  return (
    <>
      <motion.nav
        id="luxury-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          scrolled 
            ? "bg-[#FAF0ED]/90 backdrop-blur-xl border-b border-luxury-gold/15 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand/Signature Monogram */}
          <a href="#" className="flex items-center space-x-3 group relative">
            <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center relative bg-white">
              <span className="font-serif text-lg font-light text-[#1A1817] tracking-widest translate-x-[1px]">A</span>
              <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-luxury-gold/50 transition-colors duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm md:text-base tracking-[0.25em] text-[#1A1817] uppercase group-hover:text-luxury-gold transition-colors duration-300">
                AURA
              </span>
              <span className="text-[8px] tracking-[0.3em] text-[#1A1817]/50 uppercase font-mono">
                BRIDAL BEAUTY
              </span>
            </div>
          </a>

          {/* Core Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-luxury-gold flex items-center space-x-1.5 ${
                  item.highlighted 
                    ? "text-luxury-gold hover:text-luxury-gold font-semibold" 
                    : "text-[#1A1817]/80"
                }`}
              >
                {item.highlighted && <Sparkles className="w-3.5 h-3.5 animate-pulse" />}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Call To Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Soft Whatapp Consult */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="referrer"
              className="text-[#1A1817] hover:text-[#0f0d0b] p-2 transition-colors duration-300 flex items-center space-x-1.5 text-xs tracking-[0.1em] uppercase border border-luxury-gold/25 bg-white/60 px-3 py-2 rounded-full"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1A1817]" />
              <span>WhatsApp</span>
            </a>

            {/* Glowing Golden Reservation */}
            <a
              href="#booking"
              className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-luxury-gold to-[#F5E6D3] text-[#1A1817] text-xs font-semibold tracking-[0.25em] uppercase shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 group overflow-hidden border border-luxury-gold/20"
            >
              <div className="absolute inset-0 bg-[#1A1817]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10">Book Date</span>
            </a>
          </div>

          {/* Toggle Menu Button for Mobile */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="#booking"
              className="px-4 py-2 rounded-full bg-luxury-gold text-[#1A1817] text-[10px] font-bold tracking-widest uppercase border border-luxury-gold/20"
            >
              RESERVE
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1A1817] hover:text-luxury-gold p-1"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Responsive Mobile Drawer Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            className="fixed inset-0 bg-[#FAF0ED] z-30 lg:hidden flex flex-col justify-between pt-28 pb-10 px-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Absolute Background Shimmers */}
            <div className="absolute top-[20%] left-[-10%] w-[80%] h-[50%] bg-luxury-radial-glow opacity-60 pointer-events-none" />

            <div className="flex flex-col space-y-6 relative z-10">
              <span className="text-[10px] tracking-[0.45em] text-[#1A1817]/40 uppercase font-mono border-b border-luxury-gold/20 pb-2">
                MAISON NAVIGATION
              </span>
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg uppercase tracking-[0.15em] font-light block py-2 ${
                    item.highlighted ? "text-luxury-gold" : "text-[#1A1817]"
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="flex items-center space-x-2">
                    {item.highlighted && <Sparkles className="w-4 h-4 text-luxury-gold" />}
                    <span>{item.name}</span>
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 relative z-10 border-t border-luxury-gold/20 pt-6">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="referrer"
                className="w-full py-3.5 bg-white border border-luxury-gold/25 rounded-full flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.15em] font-medium text-[#1A1817]"
              >
                <MessageCircle className="w-4 h-4 text-[#1A1817]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-gradient-to-r from-luxury-gold to-[#F5E6D3] text-[#1A1817] text-center font-bold text-xs uppercase tracking-[0.2em] rounded-full border border-luxury-gold/20 shadow-md"
              >
                Secure Bridal Date
              </a>
              <p className="text-center text-[9px] text-[#1A1817]/40 tracking-widest uppercase font-mono pt-4">
                ★ 2026 BRIDAL BOOKINGS OPEN ★
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
