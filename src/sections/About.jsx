import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const About1 = () => {
  const moveRef = useRef([]);
  const scaleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    moveRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { x: 0 },
        {
          x: -100,
          willChange: "transform",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top -150",
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      scaleRef.current,
      { scale: 1, marginTop: 0 },
      {
        scale: 1.35,
        marginTop: "5rem",
        willChange: "transform",
        ease: "none",
        scrollTrigger: {
          trigger: scaleRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="w-full min-h-screen max-[599px]:w-full px-40 max-[1024px]:px-20 pt-40 max-[599px]:px-6 flex flex-col justify-center items-center leading-none overflow-hidden">
      <div className="text w-full text-[8vw] max-[1024px]:text-[10.5vw] max-[599px]:text-[11.5vw]">
        <h2 className="font-[neue6] text-start">CRAFTING</h2>
        <h2
          ref={(el) => (moveRef.current[0] = el)}
          className="move font-[sloop] text-center"
        >
          Oustanding
        </h2>
        <h2 className="font-[neue6] text-end">WEBSITES</h2>
        <h2
          ref={(el) => (moveRef.current[1] = el)}
          className="move font-[neue6] text-start"
        >
          THAT LEAVES A
        </h2>
        <h2 className="font-[sloop] text-end">Lasting Impression</h2>
      </div>

      <div className="w-full flex flex-col gap-10 items-center justify-center pt-40 font-[neue1]">
        <p className="text-[2.25vw] max-[599px]:text-[5.25vw] max-[1024px]:text-[4.25vw] text-center">
          We are a Digital Creative agency who specializes in web design and
          development for clients who care about details. Building upon my
          experiences in digital design across various industry sectors and
          numerous projects, my goal is to create high-end web experiences that
          elevate your brand to exceptional heights.
        </p>
        <div className="owners w-full flex items-center justify-between text-[1.3vw]  max-[599px]:text-[3.3vw] max-[1024px]:text-[3.3vw]">
          <h4>Designer: Aditya</h4>
          <h4>Studio: VisuaLab</h4>
          <h4>Coder: Sameer</h4>
        </div>
        <div ref={scaleRef} className="img w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="../src/assets/images/about.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About1;
