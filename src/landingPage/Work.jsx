import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
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
            start: "-10% center",
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
            start: "-10% center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    mm.add("(max-width: 799px)", () => {
      gsap.fromTo(
        ".img1",
        {
          y: 0,
        },
        {
          y: -100,
          scrollTrigger: {
            trigger: ".img1",
            start: "top center",
            end: "500% center",
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
          y: -100,
          scrollTrigger: {
            trigger: ".img2",
            start: "-10% center",
            end: "500% center",
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
          y: -100,
          scrollTrigger: {
            trigger: ".img3",
            start: "-10% center",
            end: "500% center",
            scrub: true,
          },
        }
      );
    });
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
      <div className="text text-[9vw] max-[599px]:text-[15vw] max-[1024px]:text-[15vw] leading-none py-40 max-[599px]:py-10 max-[1024px]:py-20 w-full flex flex-col justify-center items-center -translate-x-20">
        <h4 className="font-[sloop]">Selected</h4>
        <h4 className="font-[neue5] translate-x-1/2 -translate-y-8 max-[1024px]:translate-y-0">
          Works
        </h4>
      </div>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onMouseMove={handleMove}
        className="imgs w-full relative"
      >
        <div className="click w-20 h-20 max-[1024px]:hidden rounded-full backdrop-blur-md z-30 fixed top-1/2 left-1/2 scale-0 flex items-center justify-center text-white font-[neue4]">
          View
        </div>
        <a href="">
          <div className="img-1 h-screen w-full overflow-hidden relative ">
            <img
              className="img1 w-full max-[1024px]:h-full object-cover"
              src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431511/work1_lceomu.png"
              alt=""
            />
            <div className="txt absolute leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
              <h1 className="font-[neue5] text-[8.5vw] max-[599px]:text-[14.5vw] max-[1024px]:text-[15vw]">
                Valantina
              </h1>
              <h1 className="font-[sloop] translate-x-26 max-[599px]:translate-x-4 max-[1024px]:translate-x-16 text-[6vw] max-[599px]:text-[15vw] max-[1024px]:text-[13vw]">
                Wonderkin
              </h1>
            </div>
            <div className="txt absolute leading-none bottom-10 max-[599px]:bottom-[27%] max-[1024px]:bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
              <h1 className="font-[neue4] text-[2vw] max-[599px]:text-[5vw] max-[1024px]:text-[6vw]">
                Model
              </h1>
            </div>
          </div>
        </a>
        <Link to="/wooden">
          <div className="img-2 h-screen w-full overflow-hidden relative max-[599px]:-mt-40 max-[1024px]:-mt-[25%]">
            <img
              className="img2 w-full max-[1024px]:h-full object-cover"
              src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431512/work2_mwosrs.png"
              alt=""
            />
            <div className="txt absolute leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
              <h1 className="font-[neue5] text-[8.5vw] max-[599px]:text-[14.5vw] max-[1024px]:text-[15vw]">
                Wooden
              </h1>
              <h1 className="font-[sloop] translate-x-32 max-[599px]:translate-x-6 max-[1024px]:translate-x-24 text-[6vw] max-[599px]:text-[15vw] max-[1024px]:text-[13vw]">
                Works
              </h1>
            </div>
            <div className="txt absolute leading-none bottom-10 max-[599px]:bottom-[27%] max-[1024px]:bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
              <h1 className="font-[neue4] text-[2vw] max-[599px]:text-[5vw] max-[1024px]:text-[6vw]">
                Furniture
              </h1>
            </div>
          </div>
        </Link>
        <a href="">
          <div className="img-3 h-screen w-full overflow-hidden relative max-[599px]:-mt-40 max-[1024px]:-mt-[25%]">
            <img
              className="img3 w-full max-[1024px]:h-full object-cover"
              src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431511/work3_n0fagd.png"
              alt=""
            />
            <div className="txt absolute leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
              <h1 className="font-[neue5] text-[8.5vw] max-[599px]:text-[14.5vw] max-[1024px]:text-[15vw]">
                Natural
              </h1>
              <h1 className="font-[sloop] translate-x-30 max-[599px]:translate-x-8 max-[1024px]:translate-x-24 text-[6vw] max-[599px]:text-[15vw] max-[1024px]:text-[13vw]">
                Space
              </h1>
            </div>
            <div className="txt absolute leading-none bottom-10 max-[599px]:bottom-[27%] max-[1024px]:bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
              <h1 className="font-[neue4] text-[2vw] max-[599px]:text-[5vw] max-[1024px]:text-[6vw]">
                Traveling
              </h1>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Work;
