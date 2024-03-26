import React from "react";
import { img } from "../assets/index";
import "../Styles/header.css";

const HeroSection = () => {
  return (
    <>
      <div className="w-[300px] h-[130px] flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white">
          <span className="ether">Ether</span>
          <span className="lock">Lock</span>
        </h1>
        <p className="text-slate-500 text-center" id="para">
          Where Security Meets Blockchain:
          <br /> Elevating Your Digital Asset Protection with Our Advanced
          eVault Technology.
        </p>
      </div>
      <img src={img} className="Headerimage w-[670px]" alt="img" />
    </>
  );
};

export default HeroSection;
