import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-screen px-10 max-[599px]:px-6 pb-10 max-[599px]:pb-4 pt-20 max-[1024px]:pt-[50%] max-[599px]:pt-[70%] flex items-center justify-between flex-col'>
      <div className="text flex flex-col items-center justify-center text-[10vw] leading-none">
        <h1 className='font-[neue5] self-start'>LET’S START</h1>
        <h1 className='font-[sloop] self-end max-[1024px]:-translate-x-20 max-[599px]:-translate-x-14'>Something Great</h1>
        <div className='wrapper flex items-center justify-center gap-10 -translate-y-16 max-[599px]:-translate-y-6'>
          <span className='w-[20rem] max-[1024px]:w-[15rem] max-[599px]:w-[7rem] h-[20rem] max-[1024px]:h-[15rem] max-[599px]:h-[7rem] rounded-full border-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer border-black text-[2vw] max-[1024px]:text-[3vw] font-[neue2] flex items-center justify-center'>
            <h1>Contact Form</h1>
          </span>
          <h1 className='font-[neue5]'>TOGETHER</h1>
        </div>
      </div>
      <div className='copyright flex items-center justify-end w-full gap-8 max-[599px]:gap-4 text-[1.5vw] max-[599px]:text-[3.5vw] max-[1024px]:text-[3vw] font-[neue2]'>
        <p>VisuaLab</p>
        <span className='w-[0.5px] h-4 bg-black'></span>
        <p>2025</p>
        <span className='w-[3rem] max-[1024px]:w-[4rem] max-[599px]:w-[2rem] h-[3rem] max-[1024px]:h-[4rem] max-[599px]:h-[2rem] rounded-full bg-black'></span>
      </div>
    </footer>
  )
}

export default Footer