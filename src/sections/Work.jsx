import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".img1",
      {
        y: 0,
      },
      {
        y: -200,
        scrollTrigger: {
          trigger: ".img1",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".img2",
      {
        y: 0,
      },
      {
        y: -200,
        scrollTrigger: {
          trigger: ".img2",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".img3",
      {
        y: 0,
      },
      {
        y: -200,
        scrollTrigger: {
          trigger: ".img3",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);
  const handleMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    gsap.to(".click", {
      x: x - window.innerWidth / 2 - 0,
      y: y - (window.innerHeight / 2) * 0.95,
      duration: 2,
    });
  };
  const handleEnter = () => {
    gsap.to(".click", {
      scale: 1,
      duration: 0.5,
      ease: "power4.out",
    });
  };
  const handleLeave = () => {
    gsap.to(".click", {
      scale: 0,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  return (
    <section className="w-full min-h-screen">
      <div className="text text-[9vw] leading-none py-40 w-full flex flex-col justify-center items-center -translate-x-20">
        <h4 className="font-[sloop]">Selected</h4>
        <h4 className="font-[neue5] translate-x-1/2 -translate-y-8">Works</h4>
      </div>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onMouseMove={handleMove}
        className="imgs w-full relative"
      >
        <div className="click w-20 h-20 rounded-full backdrop-blur-md z-30 fixed top-1/2 left-1/2 scale-0 flex items-center justify-center text-white font-[neue4]">
          View
        </div>
        <a href="">
          <div className="img-1 h-screen w-full overflow-hidden relative">
            <img
              className="img1 w-full object-cover object-top"
              src="./src/assets/images/work1.jpg"
              alt=""
            />
            <div className="txt absolute leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
              <h1 className="font-[neue5] text-[8.5vw]">Valantina</h1>
              <h1 className="font-[sloop] translate-x-26 text-[6vw]">
                Wonderkin
              </h1>
            </div>
            <div className="txt absolute leading-none bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
              <h1 className="font-[neue4] text-[2vw]">Model</h1>
            </div>
          </div>
        </a>
        <div className="img-2 h-screen w-full overflow-hidden relative">
          <img
            className="img2 w-full object-cover"
            src="./src/assets/images/work2.jpg"
            alt=""
          />
          <div className="txt absolute leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
            <h1 className="font-[neue5] text-[8.5vw]">Wooden</h1>
            <h1 className="font-[sloop] translate-x-32 text-[6vw]">Works</h1>
          </div>
          <div className="txt absolute leading-none bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
            <h1 className="font-[neue4] text-[2vw]">Furniture</h1>
          </div>
        </div>
        <div className="img-3 h-screen w-full overflow-hidden relative">
          <img
            className="img3 w-full object-cover"
            src="./src/assets/images/work3.jpg"
            alt=""
          />
          <div className="txt absolute leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
            <h1 className="font-[neue5] text-[8.5vw]">Natural</h1>
            <h1 className="font-[sloop] translate-x-30 text-[6vw]">Space</h1>
          </div>
          <div className="txt absolute leading-none bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
            <h1 className="font-[neue4] text-[2vw]">Traveling</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
