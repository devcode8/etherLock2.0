import React from 'react'
import GradientBackground from "../../components/GradientBackground";
import logo from '../../assets/ether.png'
import { PiUserFocus } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";


const SignUp  = () => {
  return (
    <div
      className="flex justify-center items-center flex-col overflow-hidden relative"
      id="header"
    >
      <GradientBackground/>
      <div className="w-full min-h-screen items-center justify-center flex-col flex text-white font-kanit">
          <div className=" w-[400px] h-[450px] bg-[#d9d9d91c] rounded-[18px] backdrop-blur-[22.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.8px)_brightness(100%) z-20] flex flex-col items-center ">
            <img src={logo} alt="ether" className="w-[51.2px] h-[44.8px] mt-5" />
            <p className="text-[40px] font-semibold">Welcome</p>
            <p className="text-[20px] font-light">Sign up to create your account</p>
            <div className="w-[326px] h-[65px] border border-white rounded-[15px] bg-icon mt-6">
            <PiUserFocus className="w-[60px] h-[60px] pl-4"/>
            </div>
            <div className="w-[326px] h-[65px] border border-white rounded-[15px] bg-icon mt-6">
            <MdOutlineMailOutline className="w-[60px] h-[60px] pl-4"/>
            </div>
            <div className="w-[326px] h-[65px] rounded-[15px] bg-login text-[24px] font-light flex items-center justify-center mt-6">
            Sign Up
            </div>
          </div>
          <p className="text-[20px] font-light my-4">Already have an account? <span className="text-signUp">Login</span></p>
        </div>
    </div>
  )
}

export default SignUp