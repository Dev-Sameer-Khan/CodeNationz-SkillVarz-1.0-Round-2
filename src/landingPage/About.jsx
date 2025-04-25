import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const About1 = () => {
  const moveRef = useRef([]);
  const scaleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      moveRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { x: 0 },
          {
            x: -50,
            willChange: "transform",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "top -150",
              scrub: 0.3,
            },
          }
        );
      });

      gsap.fromTo(
        ".text3",
        { x: 0 },
        {
          x: 30,
          willChange: "transform",
          scrollTrigger: {
            trigger: ".text3",
            start: "top bottom",
            end: "top -150",
            scrub: 0.3,
          },
        }
      );
      gsap.fromTo(
        ".text4",
        { x: 0 },
        {
          x: 30,
          willChange: "transform",
          scrollTrigger: {
            trigger: ".text4",
            start: "top bottom",
            end: "top -150",
            scrub: 0.3,
          },
        }
      );

      gsap.fromTo(
        ".reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          willChange: "transform opacity",
          scrollTrigger: {
            trigger: ".text4",
            start: "top center",
            end: "bottom center",
            stagger: 0.2,
          },
        }
      );
      gsap.fromTo(
        ".reveal1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          delay: 0.2,
          willChange: "transform opacity",
          scrollTrigger: {
            trigger: ".text4",
            start: "top center",
            end: "bottom center",
            stagger: 0.2,
          },
        }
      );
    });

    mm.add("(max-width: 1024px)", () => {
      moveRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { x: 0 },
          {
            x: -20,
            willChange: "transform",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "top -150",
              scrub: 0.3,
            },
          }
        );
      });

      gsap.fromTo(
        ".text3",
        { x: 0 },
        {
          x: 10,
          willChange: "transform",
          scrollTrigger: {
            trigger: ".text3",
            start: "top bottom",
            end: "top -150",
            scrub: 0.3,
          },
        }
      );
      gsap.fromTo(
        ".text4",
        { x: 0 },
        {
          x: 10,
          willChange: "transform",
          scrollTrigger: {
            trigger: ".text4",
            start: "top bottom",
            end: "top -150",
            scrub: 0.3,
          },
        }
      );
      gsap.fromTo(
        ".reveal",
        { y: 50, opacity: 0, clipPath: "inset(100% 0% 0% 0%)", stagger: 0.05 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          clipPath: "inset(0% 0% 0% 0%)",
          stagger: 0.05,
          willChange: "transform opacity",
          scrollTrigger: {
            trigger: ".text4",
            start: "top center",
            end: "bottom center",
            stagger: 0.2,
          },
        }
      );
      gsap.fromTo(
        ".reveal1",
        { y: 50, opacity: 0, clipPath: "inset(100% 0% 0% 0%)", stagger: 0.05 },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          stagger: 0.05,
          ease: "none",
          delay: 0.2,
          willChange: "transform opacity",
          scrollTrigger: {
            trigger: ".text4",
            start: "top center",
            end: "bottom center",
            stagger: 0.2,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full bg-[#DBD3C5] min-h-screen max-[599px]:w-full px-40 max-[1024px]:px-20 pt-40 max-[599px]:pt-0 max-[599px]:px-6 flex flex-col justify-center items-center leading-none overflow-hidden"
    >
      <div className="text w-full text-[8vw] max-[1024px]:text-[10.5vw] max-[599px]:text-[11.5vw]">
        <h2 className="text3 font-[neue6] text-start">CRAFTING</h2>
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
        <h2 className="text4 font-[sloop] text-end">Lasting Impression</h2>
      </div>

      <div className="w-full flex flex-col gap-10 items-center justify-center pt-40 max-[599px]:pt-10 font-[neue2]">
        <p className="reveal text-[2.25vw] tracking-wide max-[599px]:text-[5.25vw] max-[1024px]:text-[4.25vw] text-center">
          We are a Digital Creative agency who specializes in web design and
          development for clients who care about details. Building upon my
          experiences in digital design across various industry sectors and
          numerous projects, my goal is to create high-end web experiences that
          elevate your brand to exceptional heights.
        </p>
        <div className="reveal1 font-[neue1] owners w-full flex items-center justify-between text-[1.3vw]  max-[599px]:text-[3.3vw] max-[1024px]:text-[3.3vw] mb-20 max-[599px]:mb-0">
          <h4>Designer: Aditya</h4>
          <h4>Studio: VisuaLab</h4>
          <h4>Coder: Sameer</h4>
        </div>
      </div>
    </section>
  );
};

export default About1;
