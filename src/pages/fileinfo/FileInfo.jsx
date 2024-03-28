import React from 'react'
import GradientBackground from '../../components/GradientBackground'
import link from '../../assets/white.png'
import { SlArrowRight } from "react-icons/sl";
import { LuShare2 } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { LuFolderDown } from "react-icons/lu";

const FileInfo = () => {
  return (
    <div
    className="flex justify-center items-center flex-col overflow-hidden relative"
    id="header"
  >
    <GradientBackground/>
    <div className="w-full min-h-screen items-center justify-center flex-col flex text-white font-kanit">
        <p className='flex w-full items-start text-[20px] pl-[330px] font-light pb-6'>My Files <SlArrowRight className='w-[20px] h-[20px] text-blue-700 ' /><span>abc.png</span></p>
        <div className=" w-[900px] h-[150px] border border-white bg-[#d9d9d91c] rounded-[18px] backdrop-blur-[22.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.8px)_brightness(100%) z-20] flex flex-col pl-10 pt-5">
          <p className='text-[20px] font-semibold'>abc.png</p>
          <div className='flex gap-2 pt-4'>
          <img src={link} alt="link" className='w-[19px] h-[19px]' />
          <a href="#" className='text-blue-700 text-[12px] font-normal'>https://ipfs.io/ipfs-sjkbscszchbcaejn824ynsdf</a>
          </div>
        </div>
        <div className='flex flex-col w-[900px] h-[300px] border border-blue-700 mt-7 rounded-[18px]'>
            <div className='flex justify-between items-center px-10 py-2'>
                <p className='text-[20px] font-semibold'>File Information</p>
                <div className='flex justify-around gap-3'>
                   <LuShare2 className='w-[24px] h-[24px]'/> 
                   <MdDeleteOutline className='w-[24px] h-[24px]'/>
                   <LuFolderDown className='w-[24px] h-[24px]'/>
                </div>
            </div>
            <div className='h-[1px] w-[900px] border border-blue-700'></div>
           <div className='flex'>
           <ul className='text-[14px] font-light text-white opacity-[64%] leading-8 px-10 py-4'>
            <li>Name:</li>
            <li>Owner:</li>
            <li>Created:</li>
            <li>Size:</li>
            <li>Hash:</li>
            <li>Object URL:</li>
            <li>File Status:  </li>
           </ul>
           <ul className='text-[12px] font-light text-white leading-8 py-4'>
            <li>abc.png</li>
            <li>Dev</li>
            <li>10 Mar 2024 11:00PM IST</li>
            <li>2 Mb</li>
            <li>ajshbjcbshkdbcfsb</li>
            <li>https://ipfs.io/ipfs-sjkbscszchbcaejn824ynsdf</li>
            <li>Public</li>
           </ul>
           </div>
        </div>
      </div>
  </div>
  )
}

export default FileInfo