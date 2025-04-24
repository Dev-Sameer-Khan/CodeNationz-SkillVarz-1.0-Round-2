import React from "react";

const About2 = () => {
  return (
    <div className=" min-h-screen max-[1024px]:min-h-[80vh] flex items-center relative bg-[#DBD3C5] justify-center px-7">
      <div class="flex max-[599px]:flex-col max-[599px]:gap-y-6 gap-x-5 max-[559px]:mb-40 justify-center ">
        <div class="flex items-start max-[599px]:mt-50 mr-28">
          <p class="mb-4 font-bold text-xl font-[neue5]">About</p>
        </div>

        <div class="  max-[599px]:w-full max-[1024px]:w-[60%] w-1/3 flex ">
          <p class="  text-xl font-[neue2] text-gray-700">
            For the self-initiated project for the fictional tattoo artist Nicki
            Wonderkin, I created a bold and immersive website that reflects her
            edgy yet elegant artistry and creative vision. The goal was to
            establish a strong digital presence that not only showcases Nicki's
            work but also encapsulates her unique personality and style. The
            design emphasizes a striking visual identity, blending dark,
            dramatic tones with vibrant highlights that echo the energy and
            precision of her tattoo designs.
          </p>
        </div>

        <div class=" max-[599px]:w-full max-[1024px]:w-[60%] w-1/3">
          <p class=" text-xl font-[neue2] text-gray-700">
            The site was used to explore several UX-related elements such as the
            gallery including an elegant filter system as well as a smooth and
            high-end lightbox implementation to showcase the works. Furthermore
            a large emphasis was placed on blending the storytelling aspect of a
            portfolio with the seamless accessibility and smooth funneling of a
            conversion-centered business.
          </p>
        </div>
      </div>
      <div className="border-[0.2px] cursor-pointer absolute -bottom-33  border-black rounded-full">
        <div className="w-48 h-48 m-10   bg-black rounded-full flex items-center justify-center">
          <h1 className="text-2xl  text-white font-[neue1]">Work Here</h1>
        </div>
      </div>
    </div>
  );
};

export default About2;
