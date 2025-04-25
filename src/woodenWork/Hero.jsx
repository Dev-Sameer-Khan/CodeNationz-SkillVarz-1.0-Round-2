import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'

const Hero = () => {

  gsap.registerPlugin(ScrollTrigger);

//   useEffect(()=>{
// gsap.to(".scale",{
//   scale:1.2,
//   duration:1,
//   ease:"none",
//   scrollTrigger:{
//     trigger:".scale",
//     start:"center center",
//     end:"bottom center",
//     scrub: 0.3,
//     markers:true
//   }
// })
//   },[])

  return (
    <div className=' max-[599px]:min-h-[60vh] min-h-screen flex  bg-[#d9d9d9]'>
        <div className='  max-[1024px]:w-full w-[50%] flex justify-end flex-col items-center max-[599px]:px-10 pb-14'>
            <h1 className='font-[neue5] max-[599px]:text-5xl max-[1024px]:text-7xl text-9xl'>Wooden</h1>
            <h1 className='font-[sloop] max-[1024px]:text-6xl text-9xl md:ml-42'>Works</h1>
        </div>
        <div className='scale max-[599px]:hidden block  max-[1024px]:w-[100%] w-[50%] bg-[url("https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431512/work2_mwosrs.png")] bg-cover bg-center'> </div>
    </div>
  )
}

export default Hero