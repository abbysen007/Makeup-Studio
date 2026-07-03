import { motion } from "motion/react";
import { ShieldCheck, Heart, Camera, Sliders, Sparkles, CheckCircle2, Award, Zap } from "lucide-react";

interface BenefitCard {
  title: string;
  desc: string;
  icon: any;
  citation: string;
}

const BENEFIT_CARDS: BenefitCard[] = [
  {
    title: "Tailored Personalized Care",
    desc: "Every face has a distinct signature. We construct facial proportion grids to align blush angles, lash heights, and eyeshadow cuts precisely with your unique bone architecture.",
    icon: Sliders,
    citation: "Aesthetic Blueprinting"
  },
  {
    title: "HD 4K Camera-Ready Base",
    desc: "Formulated with specialized quartz crystals and light refractors that prevent flash flashback and eliminate camera pore-flickering under heavy zoom lenses.",
    icon: Camera,
    citation: "Pure Pixel Matching"
  },
  {
    title: "100% Guaranteed Waterproof Formula",
    desc: "Tears of absolute joy, heavy humidity, heat waves, and champagne spills are completely resisted by our medical-grade polymer setting barriers.",
    icon: ShieldCheck,
    citation: "Tested 18-Hour Wear"
  },
  {
    title: "Skin-Friendly Clinique Ingredients",
    desc: "Strictly hypoallergenic, oil-free, non-comedogenic minerals. We exclusively source hydration serums and bases rich in lipids to nurture sensitive skin types.",
    icon: Heart,
    citation: "La Mer & Chanel Vault"
  },
  {
    title: "Master Aesthetic Balance",
    desc: "A meticulous harmony bridging modern Pinterest fashion aesthetics and timeless family rich cultural traditions, preventing outdated or cartoonish coloring.",
    icon: Sparkles,
    citation: "Trend + Tradition Merger"
  },
  {
    title: "Sanitized Clinical Sterile Setup",
    desc: "Hospital-grade UV sanitizers for custom palettes, single-use premium disposable spatulas, and micro-cleaned brushes for absolute health safety.",
    icon: Award,
    citation: "Medical-Standard Hygiene"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-[#FAF0ED] overflow-hidden border-t border-b border-luxury-gold/15">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-luxury-radial-glow opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.35em] uppercase text-luxury-gold font-mono font-bold block">
            THE ATELIER STANDARD
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1817] tracking-tight">
            Why Elite Brides <span className="text-gold-gradient font-display italic">Choose Ariadne</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto" />
          <p className="text-[#1A1817]/70 text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Our uncompromising high-fashion standards that turn simple bridal styling into a masterpiece lifestyle experience.
          </p>
        </div>

        {/* Core highlight cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFIT_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                className="glass-luxury rounded-2xl p-8 border border-luxury-gold/25 relative hover:border-luxury-gold hover:shadow-md transition-all duration-500 group flex flex-col justify-between bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
              >
                {/* Gold top border glow shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div>
                  
                  {/* Icon badge */}
                  <div className="w-11 h-11 bg-[#FAF7F2] border border-[#E2B49A]/30 rounded-xl mb-6 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-[#1A1817] transition-all duration-500">
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>

                  {/* Text details */}
                  <h3 className="font-serif text-lg text-[#1A1817] group-hover:text-luxury-gold transition-colors duration-300 font-semibold">
                    {card.title}
                  </h3>
                  
                  <p className="text-[#1A1817]/80 text-xs leading-relaxed font-light mt-3">
                    {card.desc}
                  </p>

                </div>

                {/* Micro Category footer tag */}
                <div className="mt-8 pt-4 border-t border-[#1A1817]/10 flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#1A1817]/40 font-bold">{card.citation}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
