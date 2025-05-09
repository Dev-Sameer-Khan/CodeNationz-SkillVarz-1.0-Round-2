import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const About2 = () => {
  const imgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: 0 },
      {
        y: 200,
        willChange: "transform",
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about2", // Jis section pe scroll hone par animation start ho
          start: "center 50%",
          end: "300% bottom",
          scrub: true, // Scroll ke according animation play hoti hai (smoothly)
          pin: true,
          pinSpacing: true, // or false if needed
        },
        defaults: { ease: "none" },
      })
      .fromTo(
        ".text1",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, willChange: "transform opacity" },
        "a"
      )
      .fromTo(
        ".line1",
        {
          scaleY: "0",
        },
        {
          scaleY: "1",
          transformOrigin: "top",
          willChange: "transform",
        },
        "a"
      )
      .to(".text1", { opacity: 0, y: -100 })
      .fromTo(
        ".text2",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, willChange: "transform opacity" },
        "b"
      )
      .fromTo(
        ".line2",
        {
          scaleY: "0",
        },
        {
          scaleY: "1",
          transformOrigin: "top",
          willChange: "transform",
        },
        "b"
      )
      .to(".text2", { opacity: 0, y: -100, willChange: "transform opacity" });
    return () => {
      tl.kill(); // Clean up on unmount
    };
  }, []);
  return (
    <section className="about2 w-full min-h-screen text-white flex items-center justify-center bg-cover relative">
      <div className="flex flex-col gap-4 absolute top-1/2 -translate-y-1/2 left-40 max-[599px]:left-2 z-[99]">
        <span className="line1 h-14 w-[1.5px] bg-white"></span>
        <span className="line2 h-14 w-[1.5px] bg-white"></span>
      </div>
      <div className="bg w-full h-full z-10 absolute overflow-hidden">
        <img
          ref={imgRef}
          className="w-full h-full object-cover"
          style={{ transform: "scale(1.6)" }}
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431510/about.1_jl4uhv.jpg"
          alt=""
        />
      </div>
      <div className="text1 text-[7.7vw] max-[599px]:text-[13vw] max-[1024px]:text-[13vw] leading-tight font-[neue1] pt-20 z-20">
        <h4>2+ YEARS OF </h4>
        <h4 className="text-end">AGENCY</h4>
        <h4 className="font-[sloop] text-end text-[10vw] max-[599px]:text-[15vw] max-[1024px]:text-[15vw] leading-[1]">
          Experience
        </h4>
      </div>
      <div className="text2 text-[7.7vw] max-[599px]:text-[13vw] max-[1024px]:text-[13vw] leading-tight font-[neue5] pt-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0">
        <h4>
          OVER 20 <br />
          COMPLEATED{" "}
        </h4>
        <h4 className="font-[sloop] text-end text-[10vw] max-[599px]:text-[15vw] max-[1024px]:text-[15vw] leading-[1]">
          Projects
        </h4>
      </div>
    </section>
  );
};

export default About2;
