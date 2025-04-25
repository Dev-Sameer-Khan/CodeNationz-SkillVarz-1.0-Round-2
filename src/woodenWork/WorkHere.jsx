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
        src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477814/bgImg4_glfixq.png"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center flex-col justify-center text-white">
        <div className="flex items-center max-[1024px]:w-[90%]  max-[599px]:w-full w-[60%] max-[599px]:flex-col justify-around max-[599px]:mt-40 ">
          <h1 className="text-white max-[1024px]:text-5xl max-[599px]:text-5xl text-6xl font-[neue5] max-[599px]:mb-5">
            Shweta Singh
          </h1>
          <img
            className="w-72"
            src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477814/img2_kbdqew.png"
            alt=""
          />
        </div>
        <p className=" max-[599px]:w-full max-[1024px]:w-[90%] w-[60%] max-[1024px]:ml-2 text-white font-[neue5] max-[599px]:text-lg text-2xl px-3 mt-20">
          The founder and owner of Furniture - Lifetime, a premium brand under
          the Wooden Works Company, renowned for its timeless craftsmanship and
          durable wooden furniture. With a passion for blending tradition with
          modern design, Sweta has built a brand that focuses on quality,
          sustainability, and elegance. Her keen eye for detail and commitment
          to customer satisfaction have made Furniture - Lifetime a trusted name
          in homes and offices alike. Driven by the belief that furniture should
          be both functional and everlasting, she continues to lead the company
          with innovation and purpose
        </p>
      </div>
    </div>
  );
};

export default WorkHere;
