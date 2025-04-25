import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      ".links a",
      {
        y: 20,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
        stagger: 0.05,
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=2"
    );
    gsap.fromTo(
      ".logo",
      {
        y: 20,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
        stagger: 0.05,
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(-10% 0% 0% 0%)",
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=2"
    );
    gsap.fromTo(
      ".menu1",
      {
        y: 20,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
        stagger: 0.05,
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        willChange: "transform opacity",
      },
      "-=2"
    );
    gsap.fromTo(
      ".line",
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        transformOrigin: "center",
        willChange: "transform",
        duration: 0.5,
        ease: "power2.out",
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
          stagger: 0.05,
          willChange: "transform opacity",
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            isAnimating = false;
          },
        });
        gsap.to(".line", {
          scaleY: "0",
          transformOrigin: "center",
          willChange: "transform",
          duration: 0.5,
          ease: "power2.out",
        });
      } else if (currentScroll < lastScroll && !isAnimating) {
        // Scroll Up - Show
        isAnimating = true;
        gsap.to(header, {
          y: "0%",
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          stagger: 0.05,
          willChange: "transform opacity",
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            isAnimating = false;
          },
        });
        gsap.to(".line", {
          scaleY: "1",
          transformOrigin: "center",
          willChange: "transform",
          duration: 0.5,
          ease: "power2.out",
        });
      }

      lastScroll = currentScroll;
    });
  }, []);

  const handleClick = () => {
    if (!isToggled) {
      gsap.to(".line01", { opacity: 0 });
      gsap.to(".line02", { opacity: 0 });
      gsap.to(".close", { opacity: 1 });
      gsap.to(".links a", { opacity: 0 });
      gsap.to(".manubar", {
        x: "0%",
        duration: 0.5,
        willChange: "transform",
        onStart: () => {
          gsap.from(".menu-links a, .logo1, .social-links", {
            y: 20,
            opacity: 1,
            delay: 0.3,
            clipPath: "inset(100% 0% 0% 0%)",
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
            willChange: "transform opacity",
          });
        },
      });
    } else {
      gsap.to(".line01", { opacity: 1 });
      gsap.to(".line02", { opacity: 1 });
      gsap.to(".close", { opacity: 0 });
      gsap.to(".links a", { opacity: 1 });
      gsap.to(".manubar", {
        x: "100%",
        duration: 0.5,
        willChange: "transform",
      });
    }

    setIsToggled(!isToggled);
  };
  return (
    <>
      <nav className="w-full px-10 max-[599px]:px-7 pt-10 max-[599px]:pt-7 fixed top-0 left-0 flex items-center justify-between z-[9999] font-[neue4] mix-blend-difference">
        <div className="logo leading-none cursor-pointer text-white">
          <Link to="/">
            <h1 className="font-[neue5] text-[2vw] max-[599px]:text-[5vw] max-[1024px]:text-[3vw]">
              VisuaLab <sup>&copy;</sup>
            </h1>
          </Link>
        </div>
        <div className="menu flex items-center gap-10 max-[599px]:gap-5">
          <div className="links flex items-center text-white gap-10 text-[1vw] max-[1025px]:text-[2vw] max-[599px]:hidden">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="/shop">Shop</a>
            <a href="/contact">Contact</a>
          </div>
          <span className="line origin-top inline-block w-[0.1px] h-[2rem] max-[599px]:h-[1.5rem] bg-[#D9D9D9]"></span>
          <div
            onClick={handleClick}
            className="menu1 flex flex-col gap-2 cursor-pointer"
          >
            <span className="line01 origin-[43%] will-change-transform w-[4rem] max-[599px]:w-[2.5rem] h-[1px] bg-[#D9D9D9]"></span>
            <span className="line02 origin-[43%] will-change-transform w-[4rem] max-[599px]:w-[2.5rem] h-[1px] bg-[#D9D9D9]"></span>
          </div>
        </div>
      </nav>
      <div className="manubar w-full h-screen translate-x-full fixed top-0 left-0 z-[999] bg-[#111111]">
        <div className="close w-full absolute top-0 max-[599px]:right-0 flex items-center justify-end py-9 opacity-0 px-13 max-[599px]:px-10 max-[599px]:pt-7">
          <img
            className="w-10 max-[599px]:w-6"
            src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745579770/Group_21222_kupyew.svg"
            alt=""
          />
        </div>
        <div className="w-full h-full flex max-[599px]:flex-col-reverse">
          <div className="w-1/2 max-[599px]:w-full h-full bg-[#DBD3C5] flex items-center justify-center">
            <h1 className="logo1 font-[neue1] text-[5vw] max-[599px]:text-[10vw] max-[1024px]:text-[7vw]">
              VisuaLab <sup>&copy;</sup>
            </h1>
          </div>
          <div className="w-1/2 max-[599px]:w-full h-full pt-14 max-[599px]:pt-20 px-14 max-[599px]:px-7 pb-6 max-[599px]:pb-3 flex flex-col justify-between text-[#DBD3C5]">
            <div className="menu-links leading-none flex flex-col gap-10 max-[599px]:gap-6 text-[4.5vw] max-[599px]:text-[7vw] max-[1024px]:text-[6vw] uppercase max-[1025px]:text-[2vw]">
              <a onClick={handleClick} className="w-fit" href="/">Home</a>
              <a onClick={handleClick} className="w-fit" href="#about">About</a>
              <a onClick={handleClick} className="w-fit" href="#work">Work</a>
              <a onClick={handleClick} className="w-fit" href="/shop">Shop</a>
              <a onClick={handleClick} className="w-fit" href="/contact">Contact</a>
            </div>
            <div className="w-full text-[1.3vw] max-[599px]:text-[3.3vw] max-[1024px]:text-[2vw] max-[599px]:mt-10 flex items-center justify-between font-[neue4]">
             <div className="flex flex-col">
              <a href="https://www.instagram.com/aditya_09_28/" target="_blank" className="social-links">INSTAGRAM</a>
              <a href="https://www.linkedin.com/in/aditya-k-2720a7251/"target="_blank"  className="social-links">LINKEDIN</a>
              <a href="https://www.behance.net/adityasK386"target="_blank"  className="social-links">BRHANCE</a>
             </div>
             <div className="flex flex-col gap-6">
              <a href="mailto:adi1423tya@gmail.com" target="_blank" className="social-links">adi1423tya@gmail.com</a>
              <a href="tel:+919695882854" target="_blank" className="social-links">+91-9695882854</a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
