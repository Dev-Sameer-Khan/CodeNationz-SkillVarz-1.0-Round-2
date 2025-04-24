import React from 'react'

const NextProject = () => {
  return (
    <div  className='max-[559px]:min-h-[70vh] relative min-h-screen  flex-col bg-[url(https://res.cloudinary.com/dbgzq41x2/image/upload/v1745431511/work1_lceomu.png)] flex items-center justify-center bg-cover bg-center'>
        <div className='text-white flex  flex-col max-[599px]:items-center items-end gap-y-4'>
            <h4 className='font-[neue4] max-[559px]:text-5xl text-6xl'>Next Project</h4>
            <h1 className='font-[neue5] max-[559px]:text-7xl text-9xl'>Valantina</h1>
            <h1 className='font-[sloop] max-[559px]:text-6xl text-8xl'>Wonderkin</h1>
        </div>
        <div className='text-[#DBD3C5] flex absolute bottom-0 justify-between w-full px-7 pb-5 '>
            <a className='text-2xl max-[599px]:text-base  font-[neue4]' href="">All Projects</a>
            <a className='text-2xl max-[599px]:text-base font-[neue4]' href="">Home</a>
        </div>
    </div>
  )
}

export default NextProject