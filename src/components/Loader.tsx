import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 800); // Allow exit animation to complete
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="luxury-loader"
          className="fixed inset-0 bg-[#1A1817] z-50 flex flex-col items-center justify-center text-center p-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Glowing Radial Ambient Aura */}
          <div className="absolute inset-0 bg-radial-gradient from-luxury-gold/10 via-transparent to-transparent opacity-60"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Elegant Monogram Ring */}
            <motion.div
              className="w-24 h-24 rounded-full border border-luxury-gold/20 flex items-center justify-center mb-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: 180,
                transition: { duration: 2, ease: "easeOut" }
              }}
            >
              {/* Shimmer Orbit */}
              <motion.div 
                className="absolute inset-[2px] rounded-full border-t border-r border-[#ebdcb9]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <span className="font-serif text-3xl font-light text-[#ebdcb9] tracking-widest translate-x-[2px]">A</span>
            </motion.div>

            {/* Signature Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1 } }}
            >
              <h1 className="font-display font-light text-xl md:text-2xl letter tracking-[0.3em] uppercase text-gold-gradient">
                AURA BRIDAL
              </h1>
              <p className="font-serif italic font-light text-[#ebdcb9]/60 text-xs md:text-sm mt-2 tracking-widest">
                Maison de Beauté Élite
              </p>
            </motion.div>

            {/* Micro progress line */}
            <div className="w-32 h-[1px] bg-luxury-gray relative mt-10 overflow-hidden">
              <motion.div
                className="absolute h-full left-0 top-0 bg-gradient-to-r from-luxury-gold to-[#ebdcb9]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              className="text-white/30 text-[9px] font-mono mt-4 tracking-[0.5em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              2026 BRIDAL COLLECTIONS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
