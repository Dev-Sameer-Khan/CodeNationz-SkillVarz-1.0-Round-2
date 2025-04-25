import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'

const Hero = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
gsap.to(".scale",{
  scale:1.2,
  duration:1,
  ease:"none",
  scrollTrigger:{
    trigger:".scale",
    start:"center center",
    end:"bottom center",
    scrub: 0.3,
  }
})
  },[])

  return (
    <div className=' max-[599px]:min-h-[60vh] min-h-screen flex bg-[#DBD3C5]'>
        <div className='  max-[1024px]:w-full w-[50%] flex justify-end flex-col items-center max-[599px]:px-10 pb-14'>
            <h1 className='font-[neue5] max-[599px]:text-5xl max-[1024px]:text-7xl text-9xl'>Natural</h1>
            <h1 className='font-[sloop] max-[1024px]:text-6xl text-9xl md:ml-42'>Space</h1>
        </div>
        <div className=' h-screen max-[599px]:hidden max-[1024px]:w-[100%] w-1/2 overflow-hidden'>
          <img className='scale h-full w-full object-cover' src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431511/work3_n0fagd.png" alt="" />
           </div>
    </div>
  )
}

export default Hero