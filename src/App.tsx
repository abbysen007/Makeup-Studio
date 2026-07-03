/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import AiVisionPlanner from "./components/AiVisionPlanner";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [showCursor, setShowCursor] = useState(false);

  // Track cursor coordinates for spectacular luxury background glow bubble
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!showCursor) setShowCursor(true);
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showCursor]);

  return (
    <>
      {/* Luxury Cinematic mount loader */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Main Container */}
      <div className={`min-h-screen bg-[#FAF7F2] selection:bg-[#E2B49A] selection:text-[#1A1817] transition-opacity duration-1000 ${
        loading ? "opacity-0" : "opacity-100"
      }`}>
        
        {/* Customized cursor spotlight glow bubble (Only on desktop and when moving) */}
        {showCursor && (
          <div 
            className="luxury-cursor-glow hidden lg:block"
            style={{ 
              left: `${mousePosition.x}px`, 
              top: `${mousePosition.y}px` 
            }}
          />
        )}

        {/* Global sticky navigation header */}
        <Navbar />

        {/* Cinematic intro look selector */}
        <Hero />

        {/* Emotional founder dialogue focus */}
        <BrandStory />

        {/* Vertical step roadmap */}
        <ExperienceTimeline />

        {/* Main interactive services menu */}
        <Services />

        {/* Interactive Before/After masonry portfolio */}
        <Portfolio />

        {/* Brand quality metrics and hygienics */}
        <WhyChooseUs />

        {/* Dedicated Gemini-Powered AI Advisory Consult widget */}
        <AiVisionPlanner />

        {/* Real DMs and auto stories */}
        <Testimonials />

        {/* Lead booking registry sheet */}
        <BookingForm />

        {/* Brand disclosures and Instagram grids */}
        <Footer />

      </div>
    </>
  );
}
