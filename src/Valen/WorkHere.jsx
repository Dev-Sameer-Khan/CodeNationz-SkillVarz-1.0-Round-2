import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const WorkHere = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      gsap.fromTo(
        ".move",
        {
          y: 0,
        },
        {
          y: 1000,
          ease: "none",
          willChange: "transform",
          scrollTrigger: {
            trigger: ".screen",
            start: "top center",
            end: "bottom center",
            scrub: 0.3,
          },
        }
      );
    });

    mm.add("(max-width: 799px)", () => {
      gsap.fromTo(
        ".move",
        {
          y: 0,
        },
        {
          y: 200,
          ease: "none",
          willChange: "transform",
          scrollTrigger: {
            trigger: ".screen",
            start: "top center",
            end: "bottom center",
            scrub: 0.3,
          },
        }
      );
    });
  }, []);

  return (
    <div className="screen min-h-screen max-[599px]:min-h-[200vh] max-[599px]:px-8 max-[599px]:py-10 relative flex-col flex max-[599px]:gap-y-10 gap-y-25 items-center justify-center overflow-hidden">
      <img
        className="w-full h-full max-[599px]:h-screen object-cover move scale-150 max-[599px]:scale-200 -mt-40"
        src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745601234/Rectangle_13_cqzqap.png"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
        <div className="flex items-center max-[1024px]:w-[90%]  max-[599px]:w-full w-[60%] max-[599px]:flex-col justify-around max-[599px]:mt-40 ">
          <h1 className="text-white max-[1024px]:text-5xl max-[599px]:text-5xl text-6xl font-[neue5] max-[599px]:mb-5">
            Shophia{" "}
          </h1>
          <img
            className="w-72"
            src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745601231/Rectangle_15_apaatq.png"
            alt=""
          />
        </div>
        <p className=" max-[599px]:w-full max-[1024px]:w-[90%] w-[60%] max-[1024px]:ml-2 text-white font-[neue5] max-[599px]:text-lg text-2xl px-3 mt-20">
          The dynamic force behind Valantina Wonderkin, a fashion-forward brand
          redefining elegance and empowerment in the world of fashion services
          and modeling. With a deep-rooted passion for style and
          self-expression, she founded the company to be more than just a brand
          — it’s a platform for individuality, creativity, and confidence. Under
          her leadership, Valantina Wonderkin has become a launchpad for
          aspiring models and a trusted name in fashion consulting, styling, and
          talent management. Shophia’s vision bridges high fashion with
          real-world authenticity, making glamour accessible, inclusive, and
          inspiring for all.
        </p>
      </div>
    </div>
  );
};

export default WorkHere;
