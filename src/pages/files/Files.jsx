import React from 'react'
import GradientBackground from '../../components/GradientBackground'
import { FaFileImage } from "react-icons/fa";

const Files = () => {
  return (
    <div
      className="flex justify-center items-center flex-col overflow-hidden relative"
      id="header"
    >
      <GradientBackground/>
      <div className="w-full min-h-screen items-center justify-center flex flex-col text-white font-kanit">
            <p className="text-[48px] font-semibold">My Files</p>
            <p className="text-[20px] font-light pb-4">View all of your uploaded files here.</p>
            <div className=" w-[862px] h-[48px] bg-[#d9d9d91c] rounded-3xl backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.8px)_brightness(100%) z-20] flex items-center justify-between ">
            <p className='text-white text-[18px] font-normal opacity-[54%] pl-10'>Search file name</p>
            <button className='font-kanit text-white text-[20px] font-light bg-button  w-[148px] h-[48px] rounded-3xl'>Search</button>
            </div>
            <div className=" w-[862px] h-[415px] px-10 bg-[#d9d9d91c] mt-7 rounded-[18px] backdrop-blur-[22.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.8px)_brightness(100%) z-20] flex flex-col">
                <div className='w-[790px] items-center flex flex-col font-light text-[20px] pt-4'>
                <div  className='w-[790px] flex items-center justify-between pb-2'>
                <p className='flex items-center '>Name</p>
                  <div className='flex items-center justify-between w-[200px]'>
                    <p>Size</p>
                    <p>Date Added</p>
                  </div>  
                </div>
                <hr className='h-[1px] w-[799.01px] text-white opacity-[50%]'/>
                </div>
                <div className='w-[790px] items-center flex flex-col font-light text-[20px] py-4'>
                <div  className='w-[790px] flex items-center justify-between pb-2'>
                <p className='flex items-center '><FaFileImage className='w-[24px] h-[24px] pr-2'/>abc.png</p>
                  <div className='flex items-center justify-between w-[200px]'>
                    <p>2 Mb</p>
                    <p>20 March 2024</p>
                  </div>  
                </div>
                <hr className='h-[1px] w-[799.01px] text-white opacity-[50%]'/>
                </div>
                <div className='w-[790px] items-center flex flex-col font-light text-[20px] py-4'>
                <div  className='w-[790px] flex items-center justify-between pb-2'>
                <p className='flex items-center '><FaFileImage className='w-[24px] h-[24px] pr-2'/>xyz.pdf</p>
                  <div className='flex items-center justify-between w-[200px]'>
                    <p>3 Mb</p>
                    <p>25 March 2024</p>
                  </div>  
                </div>
                <hr className='h-[1px] w-[799.01px] text-white opacity-[50%]'/>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Files