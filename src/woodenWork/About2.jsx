import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const About2 = () => {

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
    <div className=" min-h-screen z-10 flex items-center relative bg-[#DBD3C5] justify-center px-7">
      <div class="flex max-[599px]:flex-col max-[599px]:gap-y-6 gap-x-5 max-[559px]:mb-40 justify-center ">
        <div class="flex items-start max-[599px]:mt-50 mr-28">
          <p class="fade mb-4 font-bold text-6xl font-[neue5]">About</p>
        </div>

        <div class=" max-[599px]:w-full max-[1024px]:w-[60%] w-1/4 flex ">
          <p class=" fade text-xl font-[neue2]">
            I Aditya, had an amazing opportunity to work on this project and
            bring it to life while envisioning how the product will look like if
            we were to be present there and buy a natural product that will not
            only exist through ought lifetime but also be natural.Not only does
            the Owner of the Company is passionate about the product but is also
            helping in the plantation and growth of trees.
          </p>
        </div>

        <div class=" max-[599px]:w-full max-[1024px]:w-[60%] w-1/4">
          <p class="fade text-xl font-[neue2]">
            As a designer at VisuaLab, I had the opportunity to collaborate with
            my team on developing a custom website for Wooden Works, a freelance
            event management company known for its energetic style and high
            standards. Our mission was clear: to create a digital identity that
            mirrors Wooden Works bold creativity, meticulous planning, and
            passion for unforgettable experiences.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0">
        <svg
          width="521"
          height="130"
          viewBox="0 0 521 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_60_160" fill="white">
            <path d="M521 260.5C521 191.411 493.555 125.152 444.701 76.2987C395.848 27.4455 329.589 5.21607e-06 260.5 0C191.411 -5.21607e-06 125.152 27.4454 76.2987 76.2987C27.4455 125.152 1.04321e-05 191.411 0 260.5L260.5 260.5H521Z" />
          </mask>
          <path
            d="M521 260.5C521 191.411 493.555 125.152 444.701 76.2987C395.848 27.4455 329.589 5.21607e-06 260.5 0C191.411 -5.21607e-06 125.152 27.4454 76.2987 76.2987C27.4455 125.152 1.04321e-05 191.411 0 260.5L260.5 260.5H521Z"
            stroke="#838383"
            stroke-width="6"
            mask="url(#path-1-inside-1_60_160)"
          />
        </svg>
      </div>
      <div className=" bg-black w-48 h-48 cursor-pointer flex items-center justify-center absolute -bottom-24  border-black rounded-full">
        <img src="./assets/" alt="" />
        <h1 className="text-2xl  text-white font-[neue1]">Work Here</h1>
      </div>
    </div>
  );
};

export default About2;
