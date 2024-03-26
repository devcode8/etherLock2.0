import React from "react";

const GradientBackground = () => {
  return (
    <>
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[85px] bg-[#006CE94D] translate-x-[-170%] translate-y-[-50%]"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[85px] bg-[#8694E566] translate-x-[-120%] translate-y-[-100%]"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[85px] bg-[#006CE94D] translate-x-[120%] translate-y-[100%]"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[85px] bg-[#8694E566] translate-x-[170%] translate-y-[50%]"></div>
    </>
  );
};

export default GradientBackground;
