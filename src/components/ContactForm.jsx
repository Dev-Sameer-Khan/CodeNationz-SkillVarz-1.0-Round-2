
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const ContactForm = ({showContact}) => {
  const [accepted, setAccepted] = useState(false);

 
  const connection=["https://res.cloudinary.com/dbgzq41x2/image/upload/v1745577172/instagram_logo_pxfvgi.svg","https://res.cloudinary.com/dbgzq41x2/image/upload/v1745577173/linkedin_logo_jssdkc.svg","https://res.cloudinary.com/dbgzq41x2/image/upload/v1745577174/whatsapp_logo_kgkowp.svg"]

  useEffect(()=>{
    gsap.fromTo(".fade",{
      opacity:0,
      y:100,
    
    },{
      opacity:1,
      y:0,
      duration:0.5,
    })
  },[])
  
  return (
    <div className="fade contact min-h-screen w-full bg-[#8F8F8F] flex max-[599px]:flex-col items-center justify-start p-6 absolute top-0 left-0 z-50 overflow-hidden">
     <div className="flex flex-col bg-[#1B1A1A] max-[599px]:w-full w-[50%] max-[599px]:py-6 max-[599px]:px-5 max-[1024px]:py-[223px] max-[1024px]:px-3  px-10 h-[93vh]  space-y-7 justify-start">
  {/* Heading */}
  <div className="text-[#FFFFFF] flex flex-col items-center justify-center max-[599px]:mt-0 mt-10 ">
    <h1 className="font-[neue5] text-9xl max-[599px]:text-5xl max-[1024px]:text-6xl uppercase ">Get In</h1>
    <h1 className="font-[sloop] text-9xl max-[599px]:text-5xl max-[1024px]:text-5xl leading-none max-[599px]:ml-20 translate-x-30">Touch</h1>
  </div>

  {/* Form */}
  <form className="text-[#FFFFFF] space-y-6 w-full font-[neue4]">
    {/* Name & Email */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div className="relative ">
        <input
          type="text"
          id="name"
          placeholder=" "
          className="peer w-full bg-transparent border border-white p-4 pt-5 pb-4 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
          required
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-1/2 max-[1024px]:text-sm  -translate-y-1/2 text-gray-400 text-base transition-all duration-300 ease-in-out
            peer-focus:-top-[1px]  peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-[#FFFFFF]
            px-3"
        >
          Your Name
        </label>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="email"
          placeholder=" "
          className="peer w-full bg-transparent border border-white p-4 pt-5 pb-4 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
          required
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-1/2 max-[1024px]:text-xs -translate-y-1/2 text-gray-400 text-base transition-all duration-300 ease-in-out
            peer-focus:-top-[1px] max-[599px]:text-sm peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-[#FFFFFF]
            px-3"
        >
          Your email address
        </label>
      </div>
    </div>

    {/* Message */}
    <div className="relative">
      <textarea
        id="message"
        placeholder=" "
        rows="4"
        className="peer w-full bg-transparent border border-white p-4 pt-5 pb-2 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
        required
      ></textarea>
      <label
        htmlFor="message"
        className="absolute left-4 max-[1024px]:text-sm  top-2 text-gray-400 text-base transition-all duration-300 ease-in-out
          peer-focus:-top-[1px]  peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-[#FFFFFF]
          px-3"
      >
       What can i help you with?
      </label>
    </div>

    {/* Privacy Policy */}
    <div className="flex items-center space-x-2">
      <input 
        type="checkbox"
        id="privacy"
        checked={accepted}
        onChange={() => setAccepted(!accepted)}
        className="appearance-none w-5 h-5 rounded-full border-2 border-[#FFFFFF] checked:bg-[#FFFFFF] checked:border-[#FFFFFF] cursor-pointer transition-all duration-200"
        required
      />
      <label htmlFor="privacy" className="text-2xl text-[#FFFFFF]">
        I’ve accepted the{" "}
        <a
  href="#"
  className="relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FFFFFF] after:transition-all after:duration-500 hover:after:w-full"
>
  privacy policy
</a>


      </label>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      disabled={!accepted}
      className="py-4 rounded-full uppercase hover:text-black hover:bg-[#FFFFFF] cursor-pointer font-semibold transition border px-10 border-[#FFFFFF]"
    >
      Submit Message
    </button>
  </form>
</div>

        {/* Right: Image placeholder */}
        <div className='max-[599px]:w-full w-[50%] relative  h-[93vh] max-[599px]:h-[70%] overflow-hidden  '>
          <img className='object-cover max-[599px]:w-full max-[599px]:h-full h-[100%] object-center w-full' src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745577025/Contact_hnlvf0.png" alt="" />
            <div className="text-7xl text-black absolute flex bottom-5 left-5 gap-4">
            {connection.map((item, index) => (
  <div
    key={index}
    className="bg-[#1B1A1A] flex items-center justify-center p-3 rounded-full transition-transform duration-300 cursor-pointer"
  >
    <img
      src={item}
      alt=""
      className="w-5 transition-transform duration-300 
        "
    />
  </div>
))}



                      
            </div>
        </div>
<div className="absolute top-10 right-10">
 <a href="/">
 <span className="bg-black flex items-center justify-center  rounded-full transition-transform duration-300 cursor-pointer">
 <img className="scale-50" src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745579770/Group_21222_kupyew.svg" alt="" />
 </span>
 </a> 
</div>
    </div>
  );
};

export default ContactForm;
