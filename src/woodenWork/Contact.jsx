import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Contact = () => {
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
          trigger: ".screnn",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <div className=" screnn min-h-screen bg-black text-white py-3">
      <div className="px-5 flex justify-between">
        <h1 className="text-xl font-[neue2] fade">Design By Aditya</h1>
        <h1 className="text-xl font-[neue2] fade">India</h1>
      </div>
      <div className=" min-h-[50vh] gap-y-10 flex flex-col items-center justify-end">
        <div className="flex gap-x-5 items-center">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center fade">
            <img
              src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477829/Mail_s7xkze.png"
              alt=""
            />
          </div>
          <h1 className="max-[599px]:text-2xl text-4xl font-[neue5] fade">
            adi1423tya@gmail.com
          </h1>
        </div>
        <div className="flex gap-x-5 items-center max-[599px]:mr-15 mr-22">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center fade">
            <img
              src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477813/Group_nijc0n.png"
              alt=""
            />
          </div>
          <h1 className="text-4xl max-[599px]:text-2xl  font-[neue5] fade">
            +91-9695882854
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
