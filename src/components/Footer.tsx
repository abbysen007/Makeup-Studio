import { Heart, Instagram, Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const instaFeeds = [
    { url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=150&q=80", tag: "#GoldenPalette" },
    { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=150&q=80", tag: "#DewySymmetry" },
    { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=150&q=80", tag: "#BridalLuster" },
    { url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=150&q=80", tag: "#TraditionalCrown" }
  ];

  return (
    <footer className="relative bg-[#1A1817] text-[#FAF7F2]/80 text-xs font-light pt-20 pb-10 border-t border-luxury-gold/30 overflow-hidden">
      
      {/* Absolute ambient backing filter */}
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-luxury-radial-glow opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
        
        {/* COLUMN 1: BRAND LOGO CITATION (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-[#FAF7F2]/5">
              <span className="font-serif text-lg font-light text-luxury-gold tracking-widest translate-x-[1px]">A</span>
            </div>
            <div>
              <p className="font-display tracking-[0.2em] text-[#FAF7F2] uppercase text-sm font-bold">AURA BRIDAL</p>
              <p className="text-[8.5px] font-mono tracking-[0.2em] text-luxury-gold uppercase mt-0.5 font-bold">Maison de Beauté Élite</p>
            </div>
          </div>

          <p className="text-[#FAF7F2]/60 leading-relaxed font-light text-xs">
            Designing award-winning, globally documented model transformations that integrate skin care kinetics with the pristine aesthetics of luxury cosmetics. Located in elite suites globally.
          </p>

          <div className="space-y-2.5 pt-2 text-[#FAF7F2]/90 font-sans font-medium">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-luxury-gold" />
              <span>Plaza Suite Penthouse, Paris • Beverly Hills • Milan</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-luxury-gold" />
              <span>Direct Booking Line: +1 (800) 902-BEAUTÉ</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-luxury-gold" />
              <span>Atelier Concierge: bookings@aurabridal.com</span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: INTERNAL LINKS (2 cols) */}
        <div className="lg:col-span-2 space-y-6 lg:pl-6">
          <p className="font-display text-[#FAF7F2] text-xs uppercase tracking-widest font-bold border-b border-luxury-gold/25 pb-2">Atelier Map</p>
          <ul className="space-y-3 font-semibold text-[#FAF7F2]/80">
            <li><a href="#story" className="hover:text-luxury-gold transition-colors">Our Founder Story</a></li>
            <li><a href="#experience" className="hover:text-luxury-gold transition-colors">The 6 Bridal Stages</a></li>
            <li><a href="#services" className="hover:text-luxury-gold transition-colors">Master Packages</a></li>
            <li><a href="#portfolio" className="hover:text-luxury-gold transition-colors">Master Portfolio</a></li>
            <li><a href="#ai-planner" className="hover:text-luxury-gold text-luxury-gold-light font-bold transition-colors flex items-center space-x-1.5"><span>AI Advisor Tool</span><span className="text-[8px] bg-luxury-gold/20 px-1 py-0.5 rounded text-luxury-gold">NEW</span></a></li>
            <li><a href="#booking" className="hover:text-luxury-gold transition-colors">Book Consultation</a></li>
          </ul>
        </div>

        {/* COLUMN 3: QUALITY DISCLOSURES (2 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <p className="font-display text-[#FAF7F2] text-xs uppercase tracking-widest font-bold border-b border-luxury-gold/25 pb-2">Policy Disclosures</p>
          <div className="space-y-3.5 text-xs text-[#FAF7F2]/50 leading-relaxed font-light">
            <p>
              <strong>Atelier Slots:</strong> We strictly limit booking to 5 signature brides per month per geographical zone to maintain extreme artistic care and energy.
            </p>
            <p>
              <strong>Products Sourced:</strong> All products in the artist's vault are 100% cruelty-free and clinical-grade.
            </p>
            <p>
              <strong>Cancellation:</strong> Retainer deposits are non-refundable but transferable of date within 12 months.
            </p>
          </div>
        </div>

        {/* COLUMN 4: INSTAGRAM REAL-LOOK FEEDS (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <p className="font-display text-[#FAF7F2] text-xs uppercase tracking-widest font-bold border-b border-luxury-gold/25 pb-2">Instagram Diary</p>
          
          <div className="grid grid-cols-2 gap-2">
            {instaFeeds.map((feed) => (
              <a
                key={feed.tag}
                href="https://www.instagram.com"
                target="_blank"
                rel="referrer"
                className="relative overflow-hidden aspect-square border border-[#FAF7F2]/10 rounded-lg group select-none pointer-events-none"
              >
                <img
                  src={feed.url}
                  alt={feed.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 font-light brightness-[0.8]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1A1817]/65 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] text-luxury-gold tracking-widest font-mono font-bold">{feed.tag}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM CREDITS BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-[#FAF7F2]/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/40 font-mono tracking-widest">
        <p>© {year} AURA BRIDAL MAISON. ALL PRIVACY REGISTERED.</p>
        <div className="flex items-center space-x-1 mt-4 md:mt-0">
          <span>HIGH-FASHION INSPIRED WITH</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <span>FOR EXCEPTIONAL BRIDES</span>
        </div>
      </div>

    </footer>
  );
}
