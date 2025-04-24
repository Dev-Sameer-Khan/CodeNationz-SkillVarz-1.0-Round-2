import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".hero-wrapper",
      {
        padding: "0rem",
      },
      {
        padding: "1rem",
        duration: 1,
        ease: "power4.out",
        willChange: "padding",
      },
      "<=0.5"
    );
    gsap.fromTo('.hero-bg', {
        padding: 0,
        opacity : 0
       },{
           padding: "1rem",
           opacity : 1,
           duration: 1,
           ease: 'power4.out',
           willChange : "padding opacity"
       },"-=0.5")
    gsap.fromTo(
      ".hero-text",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "+=0.01"
    );
    gsap.fromTo(
      ".hero-subtext",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=0.9"
    );
    gsap.fromTo(
      ".hero-para",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=0.9"
    );
    gsap.fromTo(
      ".hero-line",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=0.9"
    );
    gsap.fromTo(
      ".hero-work",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=0.9"
    );
  }, []);
  return (
    <section className="hero-wrapper w-full h-screen bg-white overflow-hidden relative">
      <img className="hero-bg absolute top-0 left-0 z-10 w-full h-full object-cover" src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431512/herobg_kuwujx.png" alt=""/>
      <div className="hero w-full h-full flex justify-center flex-col items-center max-[599px]:px-6 max-[1024px]:px-10 text-white pt-20 relative z-20">
        <h1 className="hero-text text-[10vw] max-[599px]:text-[19vw] max-[1024px]:text-[19vw] text-center font-[neue5] leading-none">
          VisuaLab,
        </h1>
        <h4 className="hero-subtext font-[sloop] text-[4vw] max-[599px]:text-[10vw] max-[1024px]:text-[9vw] text-end ml-[15%]">
          Design Web Studio
        </h4>
        <p className="hero-para font-[neue4] text-[1.3vw] max-[599px]:text-[3.3vw] max-[1024px]:text-[3vw] tracking-[10px] w-[45%] max-[1024px]:w-full leading-tight mb-6 mt-4 max-[599px]:mt-2">
          We design bold gamified experiences that captivate, engage, and make
          brands unforgettable.
        </p>
        <span className="hero-line inline-block w-[0.5px] h-[12%] bg-white"></span>
        <h5 className="hero-work mt-6 font-[neue2] text-[1.3vw] max-[599px]:text-[4vw] max-[1024px]:text-[3.5vw] uppercase">
          <a href="#work"> View Our Work</a>
        </h5>
      </div>
    </section>
  );
};

export default Hero;
