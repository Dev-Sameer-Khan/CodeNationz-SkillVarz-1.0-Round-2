import React from 'react'

const About = () => {
   
   
  
   
    const boxDet=[{name:"Client",work:"Wooden Works"},{name:"Industry",work:" Furniture"},{name:" Services",work:"Sales"},{name:" Year",work:"2025"},]
  return (
    <div className='max-[599px]:min-h-[70vh] max-[1024px]:min-h-[70vh]  min-h-[130vh] relative w-full bg-[url(https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477813/bgImg3_ruyokv.jpg)] bg-cover flex items-center  justify-center bg-center'>
        <div  className= "max-[599px]:w-[80%] flex max-[559px]:mb-30 items-center justify-center bg-[url(https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477814/bgImg2_dy1joz.png)] w-[67%] bg-cover bg-center  max-[599px]:h-[60vw] h-[37vw]">
        <h1 className='font-[sloop] text-white max-[599px]:text-4xl max-[1024px]:text-6xl text-7xl'>Furniture - Lifetime for all</h1></div>
        <div className='bg-black z-10 max-[599px]:px-10  max-[599px]:py-10  max-[1024px]:py-10 max-[1024px]:gap-x-17 max-[1024px]:w-[80%] px-15 py-20 absolute max-[599px]:flex-col flex  gap-x-50 max-[559px]:items-start  max-[1024px]:items-center  max-[1024px]:justify-center justify-center left-1/2 max-[599px]:-bottom-42 max-[599px]:gap-y-5 max-[599px]:w-[80%] max-[1024px]:-bottom-15 w-[80%]  -bottom-25 -translate-x-1/2 '>
            {boxDet.map((item ,index)=>(
                 <div key={index}>
                 <h1 className=' text-[#757575] font-[neue2]'>{item.name}</h1>
                 <h2 className=' text-white font-[neue2]'>{item.work}</h2>
              </div>
            ))}
            
        </div>
    </div>
  )
}
export default About