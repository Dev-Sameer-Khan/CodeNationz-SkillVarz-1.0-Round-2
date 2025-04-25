import React, { useState } from 'react'
import Navbar from './Navbar';

const Shop = () => {
  const [changeColor,steChangeColor]=useState(false)
  console.log(changeColor);
  
  return (
    <div className='min-h-screen flex bg-black max-[599px]:flex-col text-white'>
      <Navbar/>
        <div className=' max-[599px]:w-[100%] w-[50%] flex flex-col justify-end max-[599px]:items-center max-[599px]:my-20 max-[599px]:p-4  max-[1024px]:p-7 p-14 gap-y-4'>
          <h1 className='font-[sloop] max-[1024px]:text-5xl text-8xl'>Premium</h1>
          <h1 className='font-[neue5] max-[1024px]:text-5xl text-8xl max-[599px]:text-center '>PREMADE <br />
          SERVICE</h1>
          <p className='font-[neue2] text-[1.3vw] text-gray-400 max-[599px]:w-[90%] max-[599px]:text-base w-[80%] max-[599px]:text-center'>Launch your Website within days - cheap and with no headaches</p>
          <div className="flex flex-wrap max-[599px]:justify-center font-[neue2] gap-4 lg:gap-x-10 group">
  {/* Shop Sites Button */}
  <div className="flex justify-center">
    <button className="bg-[#D9D9D9] hover:bg-black hover:border hover:border-white hover:text-white px-9 py-2.5 rounded-full flex items-center  gap-4 max-[599px]:px-14 text-black ">
      <img
        className="w-6 max-[599px]:w-7 text-black group-hover:invert"
        src="./src/assets/Images/cartola_Logo.png"
        alt="Cartola Logo"
      />
      <span className="text-base">Shop Sites</span>
    </button>
  </div>

  {/* Explore Feature Button */}
  <div className="flex justify-center">
    <button className="bg-black text-white px-9 py-2.5 rounded-full flex items-center gap-4 border border-white group-hover:bg-white group-hover:text-black">
      <img
        className="w-6 max-[599px]:w-7 group-hover:invert"
        src="./src/assets/Images/Iron_Logo.png"
        alt="Iron Logo"
      />
      <span className="text-base">Explore Feature</span>
    </button>
  </div>
</div>

        </div>
        <div className='max-[599px]:w-full w-[50%]  h-screen max-[599px]:h-[70%] overflow-hidden '>
          <img className='object-cover max-[599px]:w-full max-[599px]:h-full h-[100%] object-center w-full' src="./src/assets/Shop.png" alt="" />
        </div>
    </div>
  )
}

export default Shop