import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare, Heart, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

interface ChatMessage {
  id: string;
  sender: string;
  avatar: string;
  time: string;
  text: string;
  heartsCount?: number;
}

const DM_REVIEWS: ChatMessage[] = [
  {
    id: "dm-1",
    sender: "melissa_estelle",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    time: "10:24 PM",
    text: "Ariadne, oh my god! Everyone couldn't stop complimenting my makeup. It stayed on perfectly through all the dancing. I literally felt like the most beautiful bride on earth! 😭❤️❤️",
    heartsCount: 5
  },
  {
    id: "dm-2",
    sender: "priya.sharma_luxe",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    time: "Yesterday",
    text: "Exactly the bridal look I dreamed of, but even 10x more polished! The airbrush finish photographed so clean under the heavy sunset lighting. And thank you for keeping me calm during the veil disaster!!",
    heartsCount: 3
  },
  {
    id: "dm-3",
    sender: "lauren_lakecomo",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    time: "2 days ago",
    text: "She made me feel so incredibly calm and confident during preparations. It wasn't just makeup, it was a whole meditation luxury therapy. You are worth every single penny and more!",
    heartsCount: 4
  }
];

export default function Testimonials() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  // Auto sliding stories
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStoryIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const handleNextStory = () => {
    setActiveStoryIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrevStory = () => {
    setActiveStoryIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeStory = TESTIMONIALS_DATA[activeStoryIdx];

  return (
    <section id="testimonials" className="relative py-28 bg-[#FAF7F2] overflow-hidden border-t border-b border-luxury-gold/15">
      
      {/* Back glow */}
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-luxury-radial-glow opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.35em] uppercase text-luxury-gold font-mono font-bold block">
            THE LOVE DIARIES
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1817] tracking-tight">
            Client <span className="text-gold-gradient font-display italic">Symphonies & Love</span> Notes
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto" />
          <p className="text-[#1A1817]/70 text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Real emotional responses from real luxury brides. Unfiltered expressions of confidence, calm, and photographic mastery.
          </p>
        </div>

        {/* Dual Panels: Left is the Flagship Story Carousel, Right is the Instagram DM Screen Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* COLUMN A: CORE CINEMATIC STORY (7 cols) */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            <span className="text-[10px] tracking-[0.25em] font-mono text-[#1A1817]/40 uppercase block font-bold">
              FLAGSHIP BRIDAL RETROSPECTIVES
            </span>

            <div className="relative min-h-[400px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory.id}
                  className="space-y-6"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center space-x-1 text-luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-luxury-gold stroke-none" />
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-[#1A1817] tracking-wide italic leading-snug">
                    &ldquo;{activeStory.quote}&rdquo;
                  </h3>

                  <p className="text-[#1A1817]/80 font-light text-xs md:text-sm leading-relaxed max-w-xl">
                    {activeStory.detailedStory}
                  </p>

                  <div className="flex items-center space-x-4 pt-4">
                    {/* Portrait Avatar */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-luxury-gold/30">
                      <img 
                        src={activeStory.avatarUrl} 
                        alt={activeStory.name}
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-[#1A1817] font-bold tracking-wide">
                        {activeStory.name}
                      </h4>
                      <p className="text-[10px] text-[#1A1817]/45 tracking-widest uppercase font-mono mt-0.5 font-bold">
                        {activeStory.weddingLocation} • {activeStory.weddingDate}
                      </p>
                      <p className="text-[11px] text-luxury-gold italic font-serif mt-0.5 font-bold">
                        Style Theme: {activeStory.vibe}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Slider Controller buttons */}
              <div className="flex items-center space-x-4 pt-8">
                <button
                  onClick={handlePrevStory}
                  className="w-10 h-10 rounded-full border border-[#1A1817]/15 flex items-center justify-center hover:border-luxury-gold text-[#1A1817]/60 hover:text-[#1A1817] transition-colors duration-300 shadow-sm"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex space-x-1.5">
                  {TESTIMONIALS_DATA.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStoryIdx(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        activeStoryIdx === index ? "w-6 bg-luxury-gold" : "w-2 bg-[#1A1817]/15"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextStory}
                  className="w-10 h-10 rounded-full border border-[#1A1817]/15 flex items-center justify-center hover:border-luxury-gold text-[#1A1817]/60 hover:text-[#1A1817] transition-colors duration-300 shadow-sm"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          {/* COLUMN B: RAW CHAT DIRECT MESSAGE PANEL (5 cols) */}
          <div className="col-span-1 lg:col-span-5">
            <span className="text-[10px] tracking-[0.25em] font-mono text-[#1A1817]/40 uppercase block mb-4 text-center lg:text-left font-bold">
              REAL INSTAGRAM CHAT INBOX
            </span>

            <div className="glass-luxury rounded-3xl p-6 relative overflow-hidden border border-luxury-gold/25 shadow-sm bg-white">
              
              {/* Device Header imitation bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1A1817]/10 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-600 tracking-widest uppercase font-bold">@ariadne_sterling_bridal</span>
                </div>
                <span className="text-[9px] font-mono text-[#1A1817]/40 font-bold">Direct Message Verified</span>
              </div>

              {/* Messages Stack */}
              <div className="space-y-5">
                {DM_REVIEWS.map((msg, idx) => (
                  <motion.div
                    key={msg.id}
                    className="flex items-start space-x-3.5 bg-[#FAF0ED]/65 p-4 rounded-2xl border border-luxury-gold/15 relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                  >
                    {/* Avatar with pink story ring */}
                    <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-luxury-gold to-[#fbcce7] shrink-0">
                      <div className="w-full h-full rounded-full overflow-hidden border border-white">
                        <img 
                          src={msg.avatar} 
                          alt={msg.sender}
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-[#1A1817] hover:underline cursor-pointer">
                          {msg.sender}
                        </span>
                        <div className="flex items-center space-x-1.5 text-[9px] text-[#1A1817]/45 font-mono font-bold">
                          <span>{msg.time}</span>
                          <Check className="w-3 h-3 text-sky-500" />
                        </div>
                      </div>
                      <p className="text-[#1A1817]/85 text-[11px] leading-relaxed font-light">
                        {msg.text}
                      </p>

                      {/* Loved indicator double hearts */}
                      {msg.heartsCount && (
                        <div className="flex items-center space-x-0.5 pt-1.5">
                          {[...Array(msg.heartsCount)].map((_, hIdx) => (
                            <Heart key={hIdx} className="w-3 h-3 text-[#fbcce7] fill-[#fbcce7]" />
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input Prompt simulation placeholder */}
              <div className="mt-6 pt-4 border-t border-[#1A1817]/10 text-center">
                <p className="text-[9px] tracking-widest font-mono text-luxury-gold uppercase animate-luxury-shimmer font-bold">
                  💬 Slide in to our DMs for quick inspirations!
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
