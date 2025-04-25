import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".move",
      {
        y: 0,
      },
      {
        y: 300,
        ease: "none",
        willChange: "transform",
        scrollTrigger: {
          trigger: ".move",
          start: "top center",
          end: "bottom center",
          scrub: 0.3,
        },
      }
    );
  }, []);

  const boxDet = [
    { name: "Client", work: "Natural Space" },
    { name: "Industry", work: "NGC" },
    { name: " Services", work: "Safe Space" },
    { name: " Year", work: "2025" },
  ];
  return (
    <div className="max-[599px]:h-[100vh] max-[1024px]:min-h-[70vh] h-[130vh] relative flex items-center  justify-center bg-center">
      <div className="w-full h-full overflow-hidden z-10">
        <img
          className=" move w-full h-full object-cover scale-150"
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745601400/Rectangle_10_hkjgl5.png"
          alt=""
        />
      </div>
      <div className="max-[599px]:w-[90%] flex max-[559px]:mb-30 z-20 items-center justify-center absolute bg-[url(https://res.cloudinary.com/dbgzq41x2/image/upload/v1745601233/Rectangle_20_1_zlhwmw.png)] w-[67%] bg-cover bg-center  max-[599px]:h-[60vw] h-[37vw]">
        <h1 className="font-[sloop] text-white max-[599px]:text-4xl max-[1024px]:text-6xl text-8xl">
          Feeling of nature
        </h1>
      </div>
      <div className="bg-black z-30 max-[599px]:px-10  max-[599px]:py-10  max-[1024px]:py-10 max-[1024px]:gap-x-17 max-[1024px]:w-[80%] px-15 py-20 absolute max-[599px]:flex-col flex  gap-x-50 max-[559px]:items-start  max-[1024px]:items-center  max-[1024px]:justify-center justify-center left-1/2 max-[599px]:-bottom-42 max-[599px]:gap-y-5 max-[599px]:w-[80%] max-[1024px]:-bottom-15 w-[80%]  -bottom-25 -translate-x-1/2 ">
        {boxDet.map((item, index) => (
          <div key={index}>
            <h1 className=" text-[#757575] font-[neue2] text-[1.5vw] max-[599px]:text-[3.5vw]">
              {item.name}
            </h1>
            <h2 className=" text-white font-[neue2] text-[1.6vw] max-[599px]:text-[3.6vw]">
              {item.work}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
