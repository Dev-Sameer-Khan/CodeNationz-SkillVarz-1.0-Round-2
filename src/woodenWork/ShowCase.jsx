import React from 'react'

const ShowCase = () => {
  return (
    <div className='min-h-[85vw] relative bg-[#DBD3C5]'>
        <div className='w-[65%] absolute max-[599px]:right-5 max-[599px]:top-9 max-[1024px]:right-10 max-[1024px]:top-18 top-40 right-20 h-[35vw] bg-[url(https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477829/times-screen-01_ufupxc.jpg)] bg-cover'></div>
        <div  className= "absolute left-20 max-[599px]:left-5 max-[599px]:bottom-9 max-[1024px]:left-10 max-[1024px]:bottom-18 bottom-40  h-[35vw] flex items-center justify-center bg-[url(https://res.cloudinary.com/dbgzq41x2/image/upload/v1745477814/bgImg2_dy1joz.png)] w-[65%] bg-cover bg-center bg-amber-400 ">
        <h1 className='font-[sloop] text-white max-[599px]:text-2xl max-[1024px]:text-6xl text-7xl'>Furniture - Lifetime for all</h1></div>
    </div>
  )
}

export default ShowCase