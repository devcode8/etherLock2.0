import React from "react";
import GradientBackground from "../../components/GradientBackground";
import HeroSection from "../../components/HeroSection";


const Home = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center flex-col overflow-hidden relative"
      id="header"
    >
      <GradientBackground />
      <HeroSection />
    
    </div>
  );
};

export default Home;
