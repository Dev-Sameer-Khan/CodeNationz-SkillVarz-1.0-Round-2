import gsap from "gsap";
import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const wrapperWidth = 180;
    const finalPosition = windowWidth - wrapperWidth;
    const stepDistance = finalPosition / 6;

    const tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      tl.to(".count", {
        x: -900,
        duration: 0.85,
        delay: 0.5,
        ease: "power4.inOut",
      });

      for (let i = 1; i <= 6; i++) {
        const xPosition = -900 + i * 180;

        tl.to(".count", {
          x: xPosition,
          duration: 0.85,
          ease: "power4.inOut",
          onStart: () => {
            gsap.to(".count-wrapper", {
              x: stepDistance * i,
              duration: 0.85,
              ease: "power4.inOut",
            });
          },
        });
      }

      gsap.set("svg", {
        scale: 0,
      });

      const delay = [6, 6.5, 7];

      document.querySelectorAll("svg").forEach((el, index) => {
        gsap.to(el, {
          scale: 45,
          duration: 1.5,
          delay: delay[index],
          ease: "power4.inOut",
          onComplete: () => {
            if (index === delay.length - 1) {
              document.querySelector(".loader").remove();
            }
          },
        });
      });
    });

    mm.add("(max-width: 799px)", () => {
      tl.to(".count", {
        x: -900,
        duration: 0.85,
        delay: 0.5,
        ease: "power4.inOut",
      });

      for (let i = 1; i <= 6; i++) {
        const xPosition = -900 + i * 180;

        tl.to(".count", {
          x: xPosition,
          duration: 0.85,
          ease: "power4.inOut",
        });
      }

      gsap.set("svg", {
        scale: 0,
      });

      const delay = [6, 6.5, 7];

      document.querySelectorAll("svg").forEach((el, index) => {
        gsap.to(el, {
          scale: 45,
          duration: 1.5,
          delay: delay[index],
          ease: "power4.inOut",
          onComplete: () => {
            if (index === delay.length - 1) {
              document.querySelector(".loader").remove();
            }
          },
        });
      });
    });
  }, []);

  return (
    <section className="loader w-full h-screen fixed top-0 left-0 bg-black text-white flex items-end overflow-hidden font-[neue4] z-[99999] cursor-progress">
      <div
        className="count-wrapper relative w-[180px] h-[360px] will-change-transform"
        style={{ clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)" }}
      >
        <div className="count relative w-[1080px] h-[360px] flex -translate-x-[1080px] will-change-transform">
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              9
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              8
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              7
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              4
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              2
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              0
            </h1>
          </div>
        </div>
      </div>
      <div
        className="count-wrapper relative w-[180px] h-[360px] will-change-transform"
        style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
      >
        <div className="count relative w-[1080px] h-[360px] flex -translate-x-[1080px] will-change-transform">
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              9
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              5
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              9
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              7
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              4
            </h1>
          </div>
          <div className="digit relative w-[180px] h-[360px]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[360px] font-extralight leading-1">
              0
            </h1>
          </div>
        </div>
      </div>

      <div className="revealer-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform">
        <svg
          width="344"
          height="344"
          viewBox="0 0 344 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-7.51836e-06 172L97.6202 169.159C136.649 168.022 168.022 136.649 169.158 97.6202L172 2.29992e-05L174.841 97.6202C175.978 136.649 207.351 168.022 246.38 169.159L344 172L246.38 174.841C207.351 175.978 175.978 207.351 174.841 246.38L172 344L169.159 246.38C168.022 207.351 136.649 175.978 97.6202 174.842L-7.51836e-06 172Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <div className="revealer-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform">
        <svg
          width="344"
          height="344"
          viewBox="0 0 344 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-7.51836e-06 172L97.6202 169.159C136.649 168.022 168.022 136.649 169.158 97.6202L172 2.29992e-05L174.841 97.6202C175.978 136.649 207.351 168.022 246.38 169.159L344 172L246.38 174.841C207.351 175.978 175.978 207.351 174.841 246.38L172 344L169.159 246.38C168.022 207.351 136.649 175.978 97.6202 174.842L-7.51836e-06 172Z"
            fill="#383838"
          />
        </svg>
      </div>
      <div className="revealer-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform">
        <svg
          width="344"
          height="344"
          viewBox="0 0 344 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-7.51836e-06 172L97.6202 169.159C136.649 168.022 168.022 136.649 169.158 97.6202L172 2.29992e-05L174.841 97.6202C175.978 136.649 207.351 168.022 246.38 169.159L344 172L246.38 174.841C207.351 175.978 175.978 207.351 174.841 246.38L172 344L169.159 246.38C168.022 207.351 136.649 175.978 97.6202 174.842L-7.51836e-06 172Z"
            fill="black"
          />
        </svg>
      </div>
    </section>
  );
};

export default Loader;
