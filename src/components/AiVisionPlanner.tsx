import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Loader2, Award, ClipboardCheck, CheckCircle2, RefreshCw, Printer } from "lucide-react";
import { ConsultationResponse } from "../types";

export default function AiVisionPlanner() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<ConsultationResponse | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skinType: "combination",
    makeupStyle: "Dewy Editorial",
    locationType: "outdoor",
    skinConcerns: [] as string[],
    message: ""
  });

  const skinTypes = [
    { key: "dry", label: "Dry / Dehydrated" },
    { key: "oily", label: "Oily / Satin-Sheen" },
    { key: "combination", label: "Combination" },
    { key: "sensitive", label: "Sensitive & Redness-Prone" },
    { key: "normal", label: "Balanced / Normal" }
  ];

  const makeupStyles = [
    { label: "Dewy Editorial", desc: "La Mer moisture lock, ultra-high luminosity & feathered brows" },
    { label: "Royal Heritage", desc: "24k golds, rich symmetrical contours & classic velvet rose lips" },
    { label: "Quiet Luxury Minimal", desc: "Monochrome nude hues, soft peach melts & satin veil finishes" },
    { label: "Evening Spotlight Glam", desc: "Metallic dustings, feline winged contours & deep sculpting" }
  ];

  const coreConcerns = [
    { id: "redness", label: "Rosacea & Redness" },
    { id: "hydration", label: "Hydration Drop" },
    { id: "pores", label: "Pore Diminution" },
    { id: "pigment", label: "Sunspots / Uneven Tone" },
    { id: "texture", label: "Micro-texture Smoothing" }
  ];

  const handleCheckboxChange = (concernId: string) => {
    if (formData.skinConcerns.includes(concernId)) {
      setFormData({
        ...formData,
        skinConcerns: formData.skinConcerns.filter(id => id !== concernId)
      });
    } else {
      setFormData({
        ...formData,
        skinConcerns: [...formData.skinConcerns, concernId]
      });
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    setLoading(true);
    setFormSubmitted(true);

    try {
      const resp = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await resp.json();
      setAiResponse(data);
    } catch (err) {
      console.error("Failed to generate AI model consult:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setAiResponse(null);
    setFormSubmitted(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="ai-planner" className="relative py-28 bg-[#FAF7F2] overflow-hidden border-t border-b border-luxury-gold/15">
      
      {/* Decorative backing spotlight elements */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-luxury-radial-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-luxury-radial-glow opacity-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.35em] uppercase text-luxury-gold font-mono font-bold block">
            CELEBRITY AI TECH
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1817] tracking-tight">
            The <span className="text-gold-gradient font-display italic">Elite Bridal Vision</span> Advisor
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto" />
          <p className="text-[#1A1817]/70 text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Answer 5 private skin questions to receive a meticulously customized makeup and nutrition blueprint designed by Maison Gemini and Ariadne Sterling.
          </p>
        </div>

        {/* Dynamic State Outer block */}
        <div className="max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            
            {/* 1. INPUT CONFIGURATION STAGE */}
            {!formSubmitted && (
              <motion.div
                key="input-stage"
                className="glass-luxury rounded-2xl p-8 md:p-12 border border-luxury-gold/25 relative bg-white shadow-sm"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                {/* Visual Top Bar Banner */}
                <div className="text-center mb-10 pb-6 border-b border-[#1A1817]/10">
                  <p className="font-serif text-gold-gradient text-xl md:text-2xl font-bold">MAISON BESPOKE ADVISOR PROFILE</p>
                  <p className="text-[9.5px] font-mono tracking-[0.3em] text-[#1A1817]/50 uppercase mt-1 font-bold">
                    CONFIDENTIAL PRE-CONSULTATION REGISTRATION
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-8">
                  {/* Row 1: Basic Identifiers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="planner-name" className="block text-[10px] font-mono uppercase tracking-widest text-[#1A1817]/70 mb-2 font-bold">Your Name</label>
                      <input
                        id="planner-name"
                        type="text"
                        required
                        placeholder="e.g. Genevieve Thorne"
                        className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg px-4 py-3 text-xs text-[#1A1817] outline-none transition-colors shadow-sm font-medium"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="planner-email" className="block text-[10px] font-mono uppercase tracking-widest text-[#1A1817]/70 mb-2 font-bold">Secret Email</label>
                      <input
                        id="planner-email"
                        type="email"
                        required
                        placeholder="e.g. genevieve@example.com"
                        className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg px-4 py-3 text-xs text-[#1A1817] outline-none transition-colors shadow-sm font-medium"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Section 2: Skin Physiology */}
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#1A1817]/70 font-bold">YOUR SKIN PHYSIOLOGY</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                      {skinTypes.map(st => (
                        <button
                          key={st.key}
                          type="button"
                          onClick={() => setFormData({ ...formData, skinType: st.key })}
                          className={`p-3 rounded-lg text-left text-[11px] font-bold border transition-all duration-300 ${
                            formData.skinType === st.key
                              ? "bg-luxury-gold/20 border-luxury-gold text-[#1A1817]"
                              : "bg-[#FAF7F2] border-luxury-gold/15 text-[#1A1817]/75 hover:border-luxury-gold/35"
                          }`}
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: Key Concerns */}
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#1A1817]/70 font-bold">CANVAS CONCERNS (Choose multiple)</span>
                    <div className="flex flex-wrap gap-2.5">
                      {coreConcerns.map(cc => {
                        const isSelected = formData.skinConcerns.includes(cc.id);
                        return (
                          <button
                            key={cc.id}
                            type="button"
                            onClick={() => handleCheckboxChange(cc.id)}
                            className={`px-4 py-2 rounded-full text-[10px] tracking-widest uppercase transition-all duration-300 border ${
                              isSelected
                                ? "bg-[#E2B49A]/20 text-[#1A1817] border-luxury-gold font-bold"
                                : "bg-[#FAF7F2] border-luxury-gold/15 text-[#1A1817]/65 font-medium"
                            }`}
                          >
                            {cc.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 4: Looking Styling Selection */}
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#1A1817]/70 font-bold">CHAMPAGNE LOOK DIRECTION</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {makeupStyles.map(st => (
                        <button
                          key={st.label}
                          type="button"
                          onClick={() => setFormData({ ...formData, makeupStyle: st.label })}
                          className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                            formData.makeupStyle === st.label
                              ? "bg-luxury-gold/20 border-luxury-gold text-[#1A1817] font-bold"
                              : "bg-[#FAF7F2] border-luxury-gold/15 text-[#1A1817]/80"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-serif text-sm font-bold">{st.label}</span>
                            {formData.makeupStyle === st.label && <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />}
                          </div>
                          <span className="block text-[11px] text-[#1A1817]/55 font-normal mt-1 font-sans">{st.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 5: Venue Category & Msg */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <label htmlFor="venue-type" className="block text-[10px] font-mono uppercase tracking-widest text-[#1A1817]/70 mb-2 font-bold font-mono">VENUE LIGHTING TYPE</label>
                      <select
                        id="venue-type"
                        className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg px-3 py-3 text-xs text-[#1A1817] font-medium outline-none shadow-sm"
                        value={formData.locationType}
                        onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
                      >
                        <option value="indoor">Indoor Castle / Ballroom</option>
                        <option value="outdoor">Outdoor Garden Light</option>
                        <option value="beach">Beach / Horizon Glow</option>
                        <option value="vintage">Vintage Estate Shadows</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="venue-details" className="block text-[10px] font-mono uppercase tracking-widest text-[#1A1817]/70 mb-2 font-bold font-mono">PARTICULAR IDEAL / PREFERENCES (Optional)</label>
                      <input
                        id="venue-details"
                        type="text"
                        placeholder="e.g. My dupatta is very heavy sheer peach crimson custom fabric"
                        className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg px-4 py-3 text-xs text-[#1A1817] outline-none shadow-sm font-medium"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pt-6 text-center border-t border-[#1A1817]/10">
                    <button
                      type="submit"
                      disabled={!formData.name}
                      className="inline-flex items-center space-x-3 px-10 py-4 rounded-full bg-gradient-to-r from-luxury-gold to-[#F5E6D3] text-[#1A1817] text-xs font-bold tracking-[0.2em] uppercase hover:shadow-md active:scale-95 transition-all duration-300 disabled:opacity-40 border border-luxury-gold/25"
                    >
                      <Sparkles className="w-4.5 h-4.5 text-luxury-gold" />
                      <span>GENERATE MY LUXURY BLUEPRINT</span>
                    </button>
                  </div>

                </form>

              </motion.div>
            )}

            {/* 2. LOADING SCREEN WITH VOGUE QUOTES */}
            {formSubmitted && loading && (
              <motion.div
                key="loading-stage"
                className="glass-luxury rounded-2xl p-16 text-center flex flex-col items-center justify-center space-y-8 min-h-[500px] bg-white border border-luxury-gold/25 shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Micro spinning loader with nested ring */}
                <div className="relative">
                  <Loader2 className="w-14 h-14 text-luxury-gold animate-spin" />
                  <Sparkles className="w-5 h-5 text-luxury-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>

                <div className="space-y-3 max-w-md">
                  <h4 className="font-display text-lg tracking-[0.25em] text-gold-gradient uppercase animate-pulse font-bold">
                    CALIBRATING ATELIER MATRIX
                  </h4>
                  <div className="w-24 h-[1px] bg-luxury-gold/30 mx-auto" />
                  
                  {/* Luxury dynamic text reveal */}
                  <div className="h-6">
                    <p className="text-xs text-[#1A1817] italic font-serif font-semibold">
                      Sourcing Chanel base matching and modeling camera reflectance...
                    </p>
                  </div>
                </div>

                <p className="text-[9px] font-mono tracking-widest text-[#1A1817]/50 uppercase max-w-xs leading-relaxed font-bold">
                  MAISON GEMINI ENGINE IS COMPILING SECURE CELLULAR METRICS
                </p>
              </motion.div>
            )}

            {/* 3. EXPERT RESULTS DISPLAY */}
            {formSubmitted && !loading && aiResponse && (
              <motion.div
                key="results-stage"
                className="print:bg-white print:text-black space-y-6"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                
                {/* Main Portrait printable sheet */}
                <div className="glass-luxury rounded-2xl p-8 md:p-12 border-2 border-luxury-gold shadow-md relative overflow-hidden bg-white">
                  
                  {/* Top Header Citation logo for print realism */}
                  <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-[#1A1817]/15 mb-10">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                      <p className="font-display text-xl tracking-[0.25em] text-[#1A1817] font-bold">AURA BRIDAL ATELIER</p>
                      <p className="text-[9px] font-mono tracking-[0.2em] text-[#1A1817]/55 uppercase mt-0.5 font-bold">MAISON DE BEAUTÉ BESPOKE DECREE</p>
                    </div>
                    {/* Exquisite Print click trigger */}
                    <div className="flex space-x-3 print:hidden">
                      <button 
                        onClick={handlePrint}
                        className="px-4 py-2 bg-[#FAF7F2] hover:bg-[#FAF0ED] rounded-full border border-luxury-gold/25 text-[#1A1817] text-[10px] uppercase font-mono tracking-widest flex items-center space-x-1.5 transition-colors font-bold"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Blueprint</span>
                      </button>
                      <button 
                        onClick={handleResetForm}
                        className="px-4 py-2 bg-luxury-gold text-[#1A1817] rounded-full text-[10px] uppercase font-mono tracking-widest flex items-center space-x-1.5 transition-colors font-bold"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Reset Advisor</span>
                      </button>
                    </div>
                  </div>

                  {/* Blueprint Title Title */}
                  <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 pb-6 border-b border-[#1A1817]/10">
                    <span className="text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-bold">PREMIUM CONCEPT VIBE</span>
                    <h3 className="font-serif text-3xl md:text-5xl text-gold-gradient tracking-tight leading-tight font-normal">
                      {aiResponse.vibeSummary}
                    </h3>
                    <p className="text-[#1A1817]/50 text-xs tracking-wider italic font-serif">
                      Prepared exclusively for {formData.name}
                    </p>
                  </div>

                  {/* Core Narrative card item */}
                  <div className="bg-[#FAF7F2] p-6 md:p-8 border border-luxury-gold/20 rounded-2xl mb-10 shadow-sm">
                    <p className="text-[10px] font-mono tracking-widest text-[#1A1817]/40 uppercase mb-3 font-bold">CONCEIVED NARRATIVE VISION:</p>
                    <p className="font-serif italic leading-relaxed text-[#1A1817] text-sm md:text-base font-semibold">
                      &ldquo;{aiResponse.conceptDetail}&rdquo;
                    </p>
                  </div>

                  {/* Grid layout containing 90-day skincare countdown vs visual traits */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
                    
                    {/* Left side: Skincare preparation countdown calendar */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center space-x-2 text-luxury-gold mb-2 border-b border-luxury-gold/20 pb-2">
                        <Award className="w-4.5 h-4.5" />
                        <h4 className="font-serif text-base text-[#1A1817] uppercase tracking-wider font-semibold">SKIN PREPARATION TIMELINE</h4>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3.5">
                          <div className="w-6 h-6 rounded bg-[#E2B49A]/20 text-[#1A1817] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 border border-luxury-gold/25 mt-1">3M</div>
                          <div>
                            <span className="block text-[10px] font-mono text-[#1A1817]/45 tracking-widest uppercase font-bold">3 Months Prior</span>
                            <p className="text-xs text-[#1A1817]/85 leading-relaxed font-light mt-0.5">{aiResponse.skincareTimeline.threeMonthsBefore}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3.5">
                          <div className="w-6 h-6 rounded bg-[#E2B49A]/20 text-[#1A1817] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 border border-luxury-gold/25 mt-1">1M</div>
                          <div>
                            <span className="block text-[10px] font-mono text-[#1A1817]/45 tracking-widest uppercase font-bold">30 Days Countdown</span>
                            <p className="text-xs text-[#1A1817]/85 leading-relaxed font-light mt-0.5">{aiResponse.skincareTimeline.oneMonthBefore}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3.5">
                          <div className="w-6 h-6 rounded bg-[#E2B49A]/20 text-[#1A1817] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 border border-luxury-gold/25 mt-1">1W</div>
                          <div>
                            <span className="block text-[10px] font-mono text-[#1A1817]/45 tracking-widest uppercase font-bold">7 Days Countdown</span>
                            <p className="text-xs text-[#1A1817]/85 leading-relaxed font-light mt-0.5">{aiResponse.skincareTimeline.oneWeekBefore}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3.5">
                          <div className="w-6 h-6 rounded bg-luxury-gold text-[#1A1817] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-1">GD</div>
                          <div>
                            <span className="block text-[10px] font-mono text-luxury-gold tracking-widest uppercase font-bold">Grand Day Of Ceremony</span>
                            <p className="text-xs text-[#1A1817] leading-relaxed font-semibold mt-0.5">{aiResponse.skincareTimeline.weddingDayOf}</p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Right side: Look visual parameters maps */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center space-x-2 text-luxury-gold mb-2 border-b border-luxury-gold/20 pb-2">
                        <ClipboardCheck className="w-4.5 h-4.5" />
                        <h4 className="font-serif text-base text-[#1A1817] uppercase tracking-wider font-semibold">COSMETIC VISUAL ATTRIBUTES</h4>
                      </div>

                      <div className="p-5 bg-[#FAF7F2] border border-luxury-gold/20 rounded-xl space-y-4 font-sans text-xs">
                        <div>
                          <strong className="text-luxury-gold uppercase tracking-widest font-mono text-[9px] block mb-1 font-bold">SKIN ALCHEMY FINISH:</strong>
                          <p className="text-[#1A1817]/85 leading-relaxed font-light">{aiResponse.lookAttributes.skinFinish}</p>
                        </div>
                        <div>
                          <strong className="text-luxury-gold uppercase tracking-widest font-mono text-[9px] block mb-1 font-bold">EYE CONTOUR & SHADOWS:</strong>
                          <p className="text-[#1A1817]/85 leading-relaxed font-light">{aiResponse.lookAttributes.eyeMakeupDetail}</p>
                        </div>
                        <div>
                          <strong className="text-luxury-gold uppercase tracking-widest font-mono text-[9px] block mb-1 font-bold">CHEEK SCULPTING & HIGHLIGHT:</strong>
                          <p className="text-[#1A1817]/85 leading-relaxed font-light">{aiResponse.lookAttributes.blushAndHighlightTones}</p>
                        </div>
                        <div>
                          <strong className="text-luxury-gold uppercase tracking-widest font-mono text-[9px] block mb-1 font-bold">LIP LINER & SATIN SHADE:</strong>
                          <p className="text-[#1A1817]/85 leading-relaxed font-semibold">{aiResponse.lookAttributes.lipShadeRecommendation}</p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Sourced elite products list */}
                  <div className="pt-6 border-t border-luxury-gold/20">
                    <p className="text-[10px] font-mono tracking-widest text-[#1A1817]/40 uppercase mb-3 text-center font-bold">ELITE INGREDIENT VAULT SUGGESTIONS:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {aiResponse.productSourcingSuggestions.map((prod, index) => (
                        <div key={index} className="p-3 bg-white rounded-lg border border-luxury-gold/20 text-center flex flex-col justify-center shadow-sm">
                          <span className="text-[9px] font-mono text-luxury-gold uppercase block mb-1 font-bold">COSMETIC {index + 1}</span>
                          <span className="text-xs text-[#1A1817] font-semibold font-sans">{prod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified badge print marker */}
                  <div className="mt-10 pt-4 border-t border-[#1A1817]/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#1A1817]/45 tracking-widest font-mono uppercase font-bold">
                    <span className="flex items-center">
                      <Award className="w-3.5 h-3.5 text-luxury-gold mr-1.5" />
                      SECURED & VERIFIED BY MAISON CELEBRITY SUITE
                    </span>
                    <span className="mt-2 sm:mt-0">Ref: PL-2026-AI</span>
                  </div>

                </div>

                <div className="text-center">
                  <p className="text-xs text-[#1A1817]/55 italic font-serif font-semibold">
                    Save or print this blueprint to present during your physical Trial session with Ariadne.
                  </p>
                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
