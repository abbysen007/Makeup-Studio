import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Phone, Calendar, MapPin, Smile, Send, Check, MessageSquare } from "lucide-react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    event: "traditional_bridal",
    makeupStyle: "The Royal Couture Bridal Look",
    location: "",
    message: ""
  });

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    setLoading(true);

    // Simulate luxury API lock
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Persist locally for state persistence validation
      localStorage.setItem("m_bridal_reservation", JSON.stringify(formData));
    }, 1500);
  };

  return (
    <section id="booking" className="relative py-28 bg-[#FAF0ED] overflow-hidden border-t border-luxury-gold/15">
      
      {/* Background glow overlay */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-luxury-radial-glow opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Dual Split Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* COLUMN A: ARTISTIC EMBEDDED CAMPAIGN SHEET (5 cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between space-y-8 relative">
            
            <div className="space-y-6">
              <span className="text-xs tracking-[0.35em] uppercase text-luxury-gold font-mono font-bold block">
                ATELIER DATE RESERVATION
              </span>
              <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1817] tracking-tight leading-tight">
                Secure Your <span className="text-gold-gradient font-display italic">Bridal Window</span>
              </h2>
              <div className="w-16 h-[1px] bg-luxury-gold" />
              <p className="text-[#1A1817]/80 text-xs md:text-sm leading-relaxed font-light">
                Brides typically reserve their aesthetic calendar window 3 to 6 months in advance. Enter your wedding details below to freeze your date in our VIP bridal books.
              </p>
            </div>

            {/* Campaign imagery with overlay stats */}
            <div className="picture-editorial-frame aspect-[4/5] rounded-2xl overflow-hidden relative group shrink-0 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Chandelier Bridal Portrait"
                className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-102 transition duration-[1s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF0ED] via-transparent to-transparent opacity-20" />
              
              {/* Dynamic Overlay Counter */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-luxury rounded-xl border border-luxury-gold/25 bg-white shadow-sm">
                <span className="text-[10px] tracking-widest font-mono text-luxury-gold block mb-1 font-bold">CURRENT STATUS:</span>
                <p className="text-[11.5px] text-[#1A1817] leading-relaxed font-sans font-medium">
                  🌟 **December 2026 is at 94% capacity.** Saree draping and master stylist blocks are assigned on a first-come, first-reserved timeline.
                </p>
              </div>
            </div>

            {/* Micro Accolade tags */}
            <div className="space-y-3 pt-4 border-t border-[#1A1817]/10 text-xs">
              <div className="flex items-center space-x-2.5 text-[#1A1817]/80 font-bold">
                <Check className="w-4 h-4 text-luxury-gold" />
                <span>Complimentary premium touch-up kit provided on-day.</span>
              </div>
              <div className="flex items-center space-x-2.5 text-[#1A1817]/80 font-bold">
                <Check className="w-4 h-4 text-luxury-gold" />
                <span>No travel extra surcharges for selected Destination weddings.</span>
              </div>
            </div>

          </div>

          {/* COLUMN B: THE GLASSMORPHIC SHEET (7 cols) */}
          <div className="col-span-1 lg:col-span-7">
            <div className="glass-luxury rounded-3xl p-8 md:p-12 border border-luxury-gold/25 relative shadow-md bg-white">
              
              {/* Header inside the form */}
              <div className="mb-8 border-b border-[#1A1817]/10 pb-4">
                <h3 className="font-serif text-lg text-[#1A1817] font-bold tracking-wide">
                  Maison de Beauté Booking Registry
                </h3>
                <p className="text-[10px] text-[#1A1817]/45 font-mono uppercase tracking-widest mt-1 font-bold">
                  Personal data encryption protected • Secured Response in 12h
                </p>
              </div>

              <AnimatePresence mode="wait">
                
                {/* 1. SECURED SUCCESS BOARD */}
                {submitted ? (
                  <motion.div
                    key="success-form"
                    className="text-center py-10 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-luxury-gold/10 border-2 border-luxury-gold flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-luxury-gold animate-pulse" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl text-gold-gradient font-bold">
                        Your Bridal Date Is Locked!
                      </h4>
                      <div className="w-12 h-[1px] bg-luxury-gold mx-auto" />
                      <p className="text-[#1A1817]/80 leading-relaxed text-xs md:text-sm max-w-md mx-auto font-medium">
                        Dearest <strong className="text-[#1A1817] font-extrabold">{formData.name}</strong>, thank you for inviting us to sculpt your wedding day glamour. Our VIP styling coordinator has reserved your calendar window for <strong className="font-bold">{formData.date}</strong>.
                      </p>
                    </div>

                    <div className="p-5 bg-[#FAF7F2] rounded-xl border border-luxury-gold/20 max-w-sm mx-auto text-left space-y-2 text-xs shadow-sm">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-luxury-gold block mb-1 font-bold">WHAT HAPPENS NEXT?</span>
                      <p className="text-[#1A1817]/85 font-semibold">✓ You will receive a WhatsApp and email message within 12 hours.</p>
                      <p className="text-[#1A1817]/85 font-semibold">✓ We will attach a preliminary inspirational style board for details.</p>
                      <p className="text-[#1A1817]/85 font-semibold">✓ Our master trial date scheduler is activated immediately.</p>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-luxury-gold/25 text-[#1A1817] text-[10px] uppercase font-mono tracking-widest hover:bg-black/5 font-bold transition-all duration-300"
                    >
                      Make Another Request
                    </button>
                  </motion.div>
                ) : (
                  
                  // 2. ACTIVE REGISTRATION FIELDS
                  <motion.form
                    key="active-form"
                    onSubmit={handleBookingSubmit}
                    className="space-y-6 text-xs text-[#1A1817]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    {/* Grid Name and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="booking-name" className="block text-[10px] font-mono tracking-widest uppercase text-luxury-gold mb-2 font-bold">Full Name</label>
                        <input
                          id="booking-name"
                          type="text"
                          required
                          placeholder="e.g. Genevieve Thorne"
                          className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg px-4 py-3 text-[#1A1817] outline-none shadow-sm font-medium"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-phone" className="block text-[10px] font-mono tracking-widest uppercase text-luxury-gold mb-2 font-bold">Phone Number</label>
                        <div className="relative">
                          <input
                            id="booking-phone"
                            type="tel"
                            required
                            placeholder="e.g. +1 234 567 890"
                            className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg pl-10 pr-4 py-3 text-[#1A1817] outline-none shadow-sm font-medium"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                          <Phone className="w-3.5 h-3.5 text-[#1A1817]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    </div>

                    {/* Grid Date and Event */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="booking-date" className="block text-[10px] font-mono tracking-widest uppercase text-luxury-gold mb-2 font-bold font-mono">Wedding Date</label>
                        <div className="relative">
                          <input
                            id="booking-date"
                            type="date"
                            required
                            className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg pl-10 pr-4 py-3 text-[#1A1817] outline-none text-xs font-medium shadow-sm"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          />
                          <Calendar className="w-3.5 h-3.5 text-[#1A1817]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="booking-event" className="block text-[10px] font-mono tracking-widest uppercase text-luxury-gold mb-2 font-bold font-mono">Wedding Event Type</label>
                        <select
                          id="booking-event"
                          className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg px-3 py-3 text-[#1A1817] outline-none text-xs font-semibold shadow-sm"
                          value={formData.event}
                          onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                        >
                          <option value="traditional_bridal">Traditional Big Wedding Ceremony</option>
                          <option value="destination_beach">Destination Outdoor / Beach Wedding</option>
                          <option value="reception_evening">Evening Reception Glamour</option>
                          <option value="minimalist_editorial">Quiet Minimal / Intimate Ceremony</option>
                        </select>
                      </div>
                    </div>

                    {/* Single Full width Makeup Style styling option */}
                    <div>
                      <label htmlFor="makeupStyle" className="block text-[10px] font-mono tracking-widest uppercase text-luxury-gold mb-2 font-bold font-mono">PREFERRED STYLE THEME</label>
                      <select
                        id="makeupStyle"
                        className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg px-3 py-3 text-[#1A1817] outline-none text-xs font-semibold shadow-sm"
                        value={formData.makeupStyle}
                        onChange={(e) => setFormData({ ...formData, makeupStyle: e.target.value })}
                      >
                        <option value="The Royal Couture Bridal Look">The Royal Couture Bridal Look ($1,850)</option>
                        <option value="Minimal Luxury Editorial">Minimal Luxury Editorial ($1,400)</option>
                        <option value="Signature Dewy Luminous Glow">Signature Dewy Luminous Glow ($1,550)</option>
                        <option value="The Reception Champagne Glam">The Reception Champagne Glam ($1,250)</option>
                        <option value="HD Photographic Makeup">HD Photographic Makeup (Custom Addition)</option>
                      </select>
                    </div>

                    {/* Grid Location and message */}
                    <div>
                      <label htmlFor="booking-loc" className="block text-[10px] font-mono tracking-widest uppercase text-luxury-gold mb-2 font-bold">Event Venue / Location</label>
                      <div className="relative">
                        <input
                          id="booking-loc"
                          type="text"
                          required
                          placeholder="e.g. Château de Chantilly, France"
                          className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg pl-10 pr-4 py-3 text-[#1A1817] outline-none shadow-sm font-medium"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        />
                        <MapPin className="w-3.5 h-3.5 text-[#1A1817]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="booking-desc" className="block text-[10px] font-mono tracking-widest uppercase text-luxury-gold mb-2 font-bold">Special Notes / Lehenga Colors / Jewelry Style</label>
                      <textarea
                        id="booking-desc"
                        rows={3}
                        placeholder="Please detail your skin characteristics, drape request, or veil lengths..."
                        className="w-full bg-[#FAF7F2] border border-luxury-gold/25 focus:border-luxury-gold rounded-lg px-4 py-3 text-[#1A1817] outline-none shadow-sm font-medium resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-full bg-gradient-to-r from-luxury-gold to-[#F5E6D3] text-[#1A1817] border border-luxury-gold/25 font-bold tracking-[0.2em] uppercase hover:shadow-md transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
                            <span>LOCKING ATELIER DATE...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>RESERVE COUTURE BRIDAL DATE</span>
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                )}

              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
