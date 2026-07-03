import { motion } from "motion/react";
import { Sparkles, Compass, Eye, ShieldCheck, Heart, Camera, Calendar } from "lucide-react";

interface TimelineStep {
  idx: string;
  title: string;
  duration: string;
  subtitle: string;
  desc: string;
  icon: any;
}

const LUXURY_STEPS: TimelineStep[] = [
  {
    idx: "01",
    title: "Culinary-Grade Consultation",
    duration: "Immediately Upon Inquiry",
    subtitle: "The Aesthetic Architecture Dialogue",
    desc: "A private consultation where we map out your individual skin genetics, wedding layout geometry, fabric textures, jewelry weight, and photographic goals. We design custom conceptual visual drafts.",
    icon: Compass
  },
  {
    idx: "02",
    title: "Cellular Hydro-Prep Countdown",
    duration: "30 to 60 Days Out",
    subtitle: "Inner-Glow Sculpting & Conditioning",
    desc: "We formulate a state-of-the-art cellular diet and topical skincare regime with elite botanical formulas to stabilize redness, plump skin lipids, and guarantee a completely flawless canvas.",
    icon: Calendar
  },
  {
    idx: "03",
    title: "The Editorial Mastery Trial",
    duration: "4 to 6 Weeks Prior",
    subtitle: "The Camera-Behavior Dress Rehearsal",
    desc: "A champagne-filled simulation in our private studio. We formulate your exact makeup recipe down to custom individual lash styling. We test your look under studio hot-lights and 4K flash cameras.",
    icon: Eye
  },
  {
    idx: "04",
    title: "Cohesive Theme Alignment",
    duration: "2 Weeks Out",
    subtitle: "Weving Veil, Hair, & Jewelry Harmony",
    desc: "A collaborative review with your stylist, couturier, and hairstylist to ensure every piece lines up. This aligns dupatta pinning weight, jewelry drop angles, and saree pleating for perfect balance.",
    icon: Sparkles
  },
  {
    idx: "05",
    title: "On-Suite Sanctuary Glam",
    duration: "The Magnificent Day",
    subtitle: "Calm, Pampered, Timeless Transformation",
    desc: "We arrive early at your castle or resort suite, setting up dynamic natural-spectrum studio lighting and sterile environments. You sit relaxed in pure bliss while we apply your bespoke transformation.",
    icon: Heart
  },
  {
    idx: "06",
    title: "Unforgettable Grand Entrance",
    duration: "Until Your Veil Is Stepped",
    subtitle: "Photogenic Starlight & Final Veil Shimmer",
    desc: "The ultimate touch-up, veil pinning precision, collarbone highlight melt, and a protective satin setting-shield that holds your glow complete during tears, champagne, and late-night dances.",
    icon: Camera
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-28 bg-[#FAF0ED] overflow-hidden">
      {/* Background elegant visual elements */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-luxury-radial-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.35em] uppercase text-luxury-gold font-mono font-bold block">
            OUR SACRED PROCESS
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1817] tracking-tight">
            The <span className="text-gold-gradient font-display italic">Bridal Journey</span> Experience
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto" />
          <p className="text-[#1A1817]/70 text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto">
            A state-of-the-art cinematic breakdown of custom skin care, dress rehearsals, and editorial wedding day makeup engineering.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {/* Timeline connecting lines (glowing luxury effect) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E2B49A]/10 to-transparent pointer-events-none" />

          {LUXURY_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.idx}
                className="glass-luxury rounded-2xl p-8 relative flex flex-col justify-between hover:border-luxury-gold/60 transition-all duration-500 group overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
              >
                {/* Micro gold gradient accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-luxury-gold/5 to-transparent pointer-events-none rounded-bl-3xl" />
                
                {/* Accent Shimmer overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#F5E6D3]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-out pointer-events-none" />

                <div>
                  
                  {/* Top line step label */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/25 flex items-center justify-center text-luxury-gold">
                      <IconComponent className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <span className="text-2xl font-display font-light text-luxury-gold/40 group-hover:text-luxury-gold transition-colors duration-500">
                      {step.idx}
                    </span>
                  </div>

                  {/* Date Flag */}
                  <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#1A1817] bg-luxury-gold/15 px-3 py-1 rounded-full border border-luxury-gold/25 inline-block mb-4 font-bold">
                    {step.duration}
                  </span>

                  {/* Text Details */}
                  <h3 className="font-serif text-lg text-[#1A1817] group-hover:text-luxury-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-[#1A1817]/50 text-[11px] mt-1.5 mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-[#1A1817]/80 text-xs leading-relaxed font-light font-sans">
                    {step.desc}
                  </p>

                </div>

                <div className="mt-6 pt-4 border-t border-[#1A1817]/10 flex items-center justify-between text-[9px] font-mono text-[#1A1817]/40 tracking-[0.25em] uppercase font-bold">
                  <span>Maison Certified</span>
                  <span className="text-luxury-gold">★ VIP EXCLUSIVE</span>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Persuasive Urgency footnote */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center space-x-2.5 text-xs text-[#1A1817] font-medium text-center border border-luxury-gold/35 bg-white/70 rounded-full px-6 py-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Exquisite bridal care meticulously sculpted over months. <strong className="text-luxury-gold font-bold">Recommend booking 3–6 months early.</strong></span>
          </p>
        </div>

      </div>
    </section>
  );
}
