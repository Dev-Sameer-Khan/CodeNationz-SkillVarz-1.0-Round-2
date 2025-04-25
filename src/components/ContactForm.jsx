
import React, { useState } from "react";

const ContactForm = () => {
  const [accepted, setAccepted] = useState(false);

 
  const connection=["./src/assets/Images/instagram-dark.svg","./src/assets/Images/Vector1.png","./src/assets/Images/Vector2.png"]
  
  return (
    <div className=" min-h-screen bg-[#8F8F8F]  flex max-[599px]:flex-col items-center justify-start p-6 ">
     <div className="flex flex-col bg-black max-[599px]:w-full w-[50%] max-[599px]:py-6 max-[599px]:px-5 max-[1024px]:py-[223px] max-[1024px]:px-3  px-10 h-[93vh]  space-y-7 justify-start">
  {/* Heading */}
  <div className="text-[#FFFFFF] flex flex-col items-center max-[599px]:mt-0 mt-5 ">
    <h1 className="font-[font-2] text-8xl max-[599px]:text-5xl max-[1024px]:text-6xl uppercase ">Get In</h1>
    <h1 className="font-[font-1] text-8xl max-[599px]:text-5xl max-[1024px]:text-5xl leading-tight max-[599px]:ml-20 ml-32">Touch</h1>
  </div>

  {/* Form */}
  <form className="text-[#FFFFFF] space-y-6 w-full font-[font-2]">
    {/* Name & Email */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div className="relative">
        <input
          type="text"
          id="name"
          placeholder=" "
          className="peer w-full bg-transparent border border-gray-600 p-4 pt-5 pb-4 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
          required
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-1/2 max-[1024px]:text-sm  -translate-y-1/2 text-gray-400 text-base transition-all duration-300 ease-in-out
            peer-focus:-top-[1px]  peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-[#FFFFFF]
            px-3 bg-black"
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
          className="peer w-full bg-transparent border border-gray-600 p-4 pt-5 pb-4 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
          required
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-1/2 max-[1024px]:text-xs -translate-y-1/2 text-gray-400 text-base transition-all duration-300 ease-in-out
            peer-focus:-top-[1px] max-[599px]:text-sm peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-[#FFFFFF]
            px-3 bg-black"
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
        className="peer w-full bg-transparent border border-gray-600 p-4 pt-5 pb-2 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
        required
      ></textarea>
      <label
        htmlFor="message"
        className="absolute left-4 max-[1024px]:text-sm  top-2 text-gray-400 text-base transition-all duration-300 ease-in-out
          peer-focus:-top-[1px]  peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-[#FFFFFF]
          px-3 bg-black"
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
        className="appearance-none w-5 h-5 rounded-full border-2 border-[#FFFFFF] bg-black checked:bg-[#FFFFFF] checked:border-[#FFFFFF] cursor-pointer transition-all duration-200"
        required
      />
      <label htmlFor="privacy" className="text-sm text-[#FFFFFF]">
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
      className="py-5 rounded-full uppercase hover:text-black hover:bg-[#FFFFFF] cursor-pointer font-semibold transition border px-10 border-[#FFFFFF]"
    >
      Submit Message
    </button>
  </form>
</div>

        {/* Right: Image placeholder */}
        <div className='max-[599px]:w-full w-[50%] relative  h-[93vh] max-[599px]:h-[70%] overflow-hidden  '>
          <img className='object-cover max-[599px]:w-full max-[599px]:h-full h-[100%] object-center w-full' src="./src/assets/Images/bgImg8.png" alt="" />
            <div className="text-7xl text-black absolute flex bottom-10 left-10 gap-4">
            {connection.map((item, index) => (
  <div
    key={index}
    className="bg-gray-700 flex items-center justify-center p-3 rounded-full transition-transform duration-300"
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
    </div>
  );
};

export default ContactForm;
