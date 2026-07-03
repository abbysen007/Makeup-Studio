import { motion } from "motion/react";
import { Sparkles, Heart, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="relative py-28 bg-[#FAF7F2] overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-luxury-radial-glow opacity-20 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.35em] uppercase text-luxury-gold font-mono font-bold block">
            THE MAESTRO FOUNDER
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1817] tracking-tight">
            Meet <span className="text-gold-gradient font-display italic">Ariadne Sterling</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto" />
          <p className="text-[#1A1817]/70 text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Celebrity makeup director and aesthetician. Sculpting timeless transformations that grace global campaign booklets.
          </p>
        </div>

        {/* Dual Column Layout: Collage vs Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Collage Column (Left side: 5 cols) */}
          <div className="col-span-1 lg:col-span-5 space-y-6 relative">
            
            {/* Main Premium portrait */}
            <div className="picture-editorial-frame group overflow-hidden rounded-2xl shadow-sm">
              <div className="overflow-hidden relative rounded-xl h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
                  alt="Ariadne Sterling Portrait"
                  className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Float Overlay Widget 1 - Artist philosophy */}
            <motion.div
              className="glass-luxury rounded-2xl p-5 absolute -right-6 -bottom-6 max-w-[210px] shadow-sm border border-luxury-gold/30"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-luxury-gold mb-2">
                <Heart className="w-4 h-4 fill-luxury-gold stroke-none" />
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-bold">FOUNDER VALUE</span>
              </div>
              <p className="text-[10px] text-[#1A1817] leading-relaxed font-sans italic">
                &ldquo;Your wedding makeup is not a mask; it is your ultimate skin symmetry illuminated.&rdquo;
              </p>
            </motion.div>

            {/* Float Badge 2 - Vogue Citation */}
            <div className="absolute -left-6 top-12 glass-luxury p-3 rounded-xl flex items-center space-x-2.5 shadow-sm border border-luxury-gold/25">
              <Award className="w-4 h-4 text-luxury-gold" />
              <span className="text-[9px] text-[#1A1817]/80 font-mono tracking-widest uppercase font-bold">AS SEEN IN VOGUE</span>
            </div>

          </div>

          {/* Narrative Column (Right side: 7 cols) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col space-y-8">
            
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.3em] font-mono text-[#1A1817]/50 uppercase font-bold">
                THE STORY & INSPIRATION
              </span>
              <h3 className="font-serif text-2xl md:text-3.5xl text-[#1A1817] tracking-tight leading-snug">
                Designing a realm where elegance becomes your <span className="italic text-rose-gold-gradient font-bold">timeless legacy</span>.
              </h3>
            </div>

            <div className="space-y-6 text-[#1A1817]/80 font-light text-sm leading-relaxed max-w-xl">
              <p>
                As a little girl, I sat in my grandmother's dressing room, captivated by the scent of rosewater and the soft hum of silk. I watched her look in the mirror, transforming from a busy matriarch into an ethereal, classic queen. I realized early on that makeup was never about coverups—it was about <strong className="text-[#1A1817] font-semibold">unveiling internal magic</strong>.
              </p>
              <p>
                After training in London, Paris, and Milan, and compiling portfolios for international beauty houses, I returned to build an atelier specifically for brides. A setting optimized to turn bridal makeup planning into a highly sensory, deeply loving, peaceful ceremony.
              </p>
              <p>
                My brides are confident, sophisticated, and appreciate the absolute depth of micro-textures. We design skin that breathes, shines elegantly under chandelier lighting, and holds up gracefully to tears, hugs, and 5:00 AM champagne toasts.
              </p>
            </div>

            {/* Philosophy quotes */}
            <div className="p-6 bg-white/60 rounded-xl border border-luxury-gold/20 italic font-serif text-[#1A1817] text-sm relative shadow-sm">
              <div className="absolute top-[-10px] left-4 bg-luxury-gold-light text-[#1A1817] pl-2 pr-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-[0.2em] uppercase border border-luxury-gold/15">
                SIGNATURE METHOD
              </div>
              &ldquo;I don't paint faces. I formulate a customized canvas chemistry—aligning lighting angles, undertone balance, and personal expressions so you photograph with absolute cinematic majesty.&rdquo;
            </div>

            {/* Bullet Point Accolades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1A1817]/10">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span className="text-xs text-[#1A1817]/90 font-light">
                  <strong>Elite Skin Focus:</strong> Only non-comedogenic luxury clinical-grade hydration foundations used.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span className="text-xs text-[#1A1817]/90 font-light">
                  <strong>High-Performance Lock:</strong> Completely waterproof base that prevents oxidation.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
