import React from 'react'

const Contact = () => {
  return (
    <div className='  min-h-screen bg-black text-[#DBD3C5] py-3'>
        <div className='px-5 flex justify-between'>
            <h1 className='text-xl font-[neue2]'>Design By Aditya</h1>
            <h1 className='text-xl font-[neue2]'>India</h1>
        </div>
      <div className=' min-h-[50vh] gap-y-10 flex flex-col items-center justify-end'>
      <div className='flex gap-x-5 items-center'>
            <div className='w-14 h-14 rounded-full bg-white flex items-center justify-center'>
            <img src="./src/assets/Images/Mail.png" alt="" />
            </div>
            <h1  className='max-[599px]:text-2xl text-4xl font-[neue5]'>adi1423tya@gmail.com</h1>
        </div>
        <div className='flex gap-x-5 items-center max-[599px]:mr-15 mr-22'>
        <div className='w-14 h-14 rounded-full bg-white flex items-center justify-center'>
            <img src="./src/assets/Images/Group.png" alt="" />
            </div>
            <h1 className='text-4xl max-[599px]:text-2xl  font-[neue5]'>+91-9695882854</h1>
        </div>
      </div>

    </div>
  )
}

export default Contact