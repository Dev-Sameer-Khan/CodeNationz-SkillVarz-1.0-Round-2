import gsap from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      ".links a",
      {
        y: 20,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
        stagger : 0.05,
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        stagger : 0.05,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=2"
    );

    let lastScroll = 0;
    const header = document.querySelectorAll(".links a");
    let isAnimating = false;
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
  
      if (currentScroll > lastScroll && currentScroll > 10 && !isAnimating) {
        // Scroll Down - Hide
        isAnimating = true;
        gsap.to(header, {
          y: "-100%",
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
          stagger : 0.05,
          willChange: "transform opacity",
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            isAnimating = false;
          }
        });
      } else if (currentScroll < lastScroll && !isAnimating) {
        // Scroll Up - Show
        isAnimating = true;
        gsap.to(header, {
          y: "0%",
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          stagger : 0.05,
          willChange: "transform opacity",
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            isAnimating = false;
          }
        });
      }
  
      lastScroll = currentScroll;
    });
  }, []);

  return (
    <nav className="w-full px-10 max-[599px]:px-7 pt-10 max-[599px]:pt-6 fixed top-0 left-0 flex items-center justify-between z-[9999] font-[neue4] mix-blend-difference">
      <div className="logo text-[2vw] max-[599px]:text-[6vw] max-[1024px]:text-[4vw] leading-none cursor-pointer text-white">
        <Link to="/">VisuaLab</Link>
      </div>
      <div className="menu flex items-center gap-10 max-[599px]:gap-5">
        <div className="links flex items-center text-white gap-10 text-[1vw] max-[1025px]:text-[2vw] max-[599px]:hidden">
          <a href="/" >Home</a>
          <a href="#about" >About</a>
          <a href="#work" >Work</a>
          <a href="/shop" >Shop</a>
          <a href="/contact" >Contact</a>
        </div>
        <span className="inline-block w-[0.1px] h-[2rem] max-[599px]:h-[1.5rem] bg-[#D9D9D9]"></span>
        <div className="menu flex flex-col gap-2 cursor-pointer">
          <span className="inline-block w-[4rem] max-[599px]:w-[2.5rem] h-[1px] bg-[#D9D9D9]"></span>
          <span className="inline-block w-[4rem] max-[599px]:w-[2.5rem] h-[1px] bg-[#D9D9D9]"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
