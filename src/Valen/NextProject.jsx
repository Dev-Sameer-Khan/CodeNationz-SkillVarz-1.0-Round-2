import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const NextProject = () => {
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
          trigger: ".page",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <div className="page max-[559px]:min-h-[70vh] relative min-h-screen  flex-col bg-[url(https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431511/work3_n0fagd.png)] flex items-center justify-center bg-cover bg-center">
      <div className="text-white flex  flex-col max-[599px]:items-center items-end gap-y-4">
        <a href="/nature">
          <h4 className="font-[neue4] max-[559px]:text-5xl text-6xl fade">
            Next Project
          </h4>
          <h1 className="font-[neue5] max-[559px]:text-7xl text-9xl fade">
            Natural
          </h1>
          <h1 className="font-[sloop] max-[559px]:text-6xl text-8xl fade">
            Space
          </h1>
        </a>
      </div>
      <div className="text-[#DBD3C5] flex absolute bottom-0 justify-between w-full px-7 pb-5 ">
        <a
          className="text-2xl max-[599px]:text-base  font-[neue4] fade"
          href=""
        >
          All Projects
        </a>
        <a className="text-2xl max-[599px]:text-base font-[neue4] fade" href="">
          Home
        </a>
      </div>
    </div>
  );
};

export default NextProject;
