import React, { useState,useEffect } from "react";
import profile from "../../assets/images/about/me.jpg";
import { RiDownloadLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { RiMessage2Fill } from "@remixicon/react";
import BlurText from "../ui/BlurText";
import GradientText from "../ui/GradientText";
import SplitText from "../ui/Splittext";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: "31%", y: "40%" });
// Trigger fade-in when component mounts
useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Small delay
    return () => clearTimeout(timer);
  }, []);
  // Update mouse position
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <section
      id="home"
      className="main-hero-area z-1 relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }}
    >
      {/* Background Grid with Black Background */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
            
          backgroundColor: "linear-gradient(315deg, #130f40 0%, #000000 74%)", // Apply black only to the grid container
        //   maskImage: `radial-gradient(circle 150px at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0))`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0))`,
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      ></div>

      {/* Hero Content */}
      <div className="container relative z-50 text-black">
        <div className="row align-items-center">
          <div className="w-full flex items-center justify-center">
            <div className="hero-content fade-in flex flex-col justify-center items-center">
              <h4 className="text-center">Hi, I’m Madhan 👋</h4>
        
                <h1 className="text-center text-4xl md:text-5xl lg:text-6xl">
                  Bringing Ideas to Life with <br />
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                    >
                    Full-Stack <span cl>Expertise.</span>
                  </GradientText>
                  {/* <span className="aurora-text"></span> Expertise. */}
                </h1>

              <h2 className="text-center sm:w-full sm:text-[12px] sm:text-start flex md:text-xl lg:w-1/2">
                A freelance full-stack developer who believes in creating
                experiences that leave a lasting impression. With a deep love
                for innovation and a knack for solving complex problems.
              </h2>
              <div className="hero-btns mt-9 flex flex-col md:flex-row gap-3">
                <div className="hero-btns">
                  <a
                    href="/Madhan-resume.pdf"
                    download
                    className="flex gap-2 theme-btn"
                  >
                    Download CV <RiDownloadLine size={16} />
                  </a>
                </div>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn flex flex-row gap-2">
                    Contact Me <RiMessage2Fill size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        {/* Grid Background */}
        <svg
  className="absolute top-0  left-0 w-fullh-full"
  width="100%"
  height="100%"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    {/* Grid Pattern */}
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path
        d="M 40 0 L 0 0 0 40"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
      />
    </pattern>

    {/* Combined Mask */}
    <mask id="fade-mask">
      <linearGradient id="left-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="110%" stopColor="white" stopOpacity="0" /> {/* Left edge */}
        <stop offset="80%" stopColor="white" stopOpacity="0.1" /> {/* Gradual fade */}
        <stop offset="100%" stopColor="white" stopOpacity="0.1" /> {/* Right fully visible */}
      </linearGradient>

      <radialGradient id="circle-fade" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="white" stopOpacity="0" />
        <stop offset="70%" stopColor="white" stopOpacity="0.1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>

      <rect width="100%" height="100%" fill="url(#left-fade)" />
      <rect width="100%" height="100%" fill="url(#circle-fade)" />
    </mask>
  </defs>

  {/* Grid with Combined Fade */}
  <rect
    width="100%"
    height="100%"
    fill="url(#grid)"
    mask="url(#fade-mask)"
  />
</svg>

    </section>
    
  );
};

export default Hero;
