import gsap from "gsap";
import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      ".links span",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=2"
    );
  }, []);

  return (
    <nav className="w-full px-10 max-[599px]:px-7 pt-10 max-[599px]:pt-6 fixed top-0 left-0 flex items-center justify-between z-[9999] font-[neue4] mix-blend-difference">
      <div className="logo text-[2vw] max-[599px]:text-[6vw] max-[1024px]:text-[4vw] leading-none cursor-pointer text-white">
        VisuaLab
      </div>
      <div className="menu flex items-center gap-10 max-[599px]:gap-5">
        <div className="links flex items-center gap-10 text-[1vw] max-[1025px]:text-[2vw] max-[599px]:hidden">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Work</span>
          <span className="cursor-pointer">Shop</span>
          <span className="cursor-pointer">Contact</span>
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
