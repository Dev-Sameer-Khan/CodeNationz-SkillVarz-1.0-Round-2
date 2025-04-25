import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".fade",
      {
        y: 100,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.5,
        ease: "none",
        willChange: "transform opacity",
        scrollTrigger: {
          trigger: ".fade",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <footer className="w-full h-screen bg-[#DBD3C5] px-10 max-[599px]:px-6 pb-10 max-[599px]:pb-4 pt-20 max-[1024px]:pt-[50%] max-[599px]:pt-[70%] flex items-center justify-between flex-col">
      <div className="text flex flex-col items-center justify-center text-[10vw] leading-none">
        <h1 className="fade font-[neue5] self-start">LET’S START</h1>
        <h1 className="fade font-[sloop] self-end max-[1024px]:-translate-x-20 max-[599px]:-translate-x-14">
          Something Great
        </h1>
        <div className="wrapper flex items-center justify-center gap-10 -translate-y-16 max-[599px]:-translate-y-6">
          <span className="fade w-[20rem] max-[1024px]:w-[15rem] max-[599px]:w-[7rem] h-[20rem] max-[1024px]:h-[15rem] max-[599px]:h-[7rem] rounded-full border-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer border-black text-[2vw] max-[1024px]:text-[3vw] font-[neue2] flex items-center gap-4 max-[599px]:gap-2 justify-center max-[599px]:flex-col">
            <img
              src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745576249/telegram_logo_metktv.svg"
              alt=""
            />
            <h1>Contact Form</h1>
          </span>
          <h1 className="font-[neue5] fade">TOGETHER</h1>
        </div>
      </div>
      <div className="copyright flex items-center justify-end w-full gap-8 max-[599px]:gap-4 text-[1.5vw] max-[599px]:text-[3.5vw] max-[1024px]:text-[3vw] font-[neue1]">
        <img
          className="w-24"
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745576158/Logo111_uztzh1.svg"
          alt=""
        />
        <span className="w-[0.5px] h-4 bg-black"></span>
        <p className="fade">2025</p>
        <a
          href="#"
          className="fade w-[3rem] max-[1024px]:w-[4rem] max-[599px]:w-[2rem] h-[3rem] max-[1024px]:h-[4rem] max-[599px]:h-[2rem] rounded-full flex items-center justify-center bg-black"
        >
          <img
            className="h-6 max-[599px]:h-4"
            src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745576158/Arrow_2_pp2ibc.svg"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
