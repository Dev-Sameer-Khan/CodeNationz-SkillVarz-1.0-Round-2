import React from "react";

const WorkHere = () => {
  return (
    <div className="min-h-[150vw] max-[599px]:px-8 max-[599px]:py-10  flex-col flex max-[599px]:gap-y-10 gap-y-25 items-center justify-center  bg-cover bg-bottom bg-[url(https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477814/bgImg4_glfixq.png)]">
        <div className="flex items-center max-[1024px]:w-[90%]  max-[599px]:w-full w-[60%] max-[599px]:flex-col justify-around max-[599px]:mt-40 ">
            <h1 className="text-white max-[1024px]:text-5xl max-[599px]:text-5xl text-6xl font-[neue5] max-[599px]:mb-5">Shweta Singh</h1>
            <img className="w-72" src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477814/img2_kbdqew.png" alt="" />
        </div>
      <p className=" max-[599px]:w-full max-[1024px]:w-[90%] w-[60%] max-[1024px]:ml-2 text-white font-[neue5] max-[599px]:text-lg text-2xl px-3">
        The founder and owner of Furniture - Lifetime, a premium brand under the
        Wooden Works Company, renowned for its timeless craftsmanship and
        durable wooden furniture. With a passion for blending tradition with
        modern design, Sweta has built a brand that focuses on quality,
        sustainability, and elegance. Her keen eye for detail and commitment to
        customer satisfaction have made Furniture - Lifetime a trusted name in
        homes and offices alike. Driven by the belief that furniture should be
        both functional and everlasting, she continues to lead the company with
        innovation and purpose
      </p>
    </div>
  );
};

export default WorkHere;
