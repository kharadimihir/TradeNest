import React from "react";
import homeHero from "../../assets/homeHero.png";
const HeroSection = () => {
  return (
    <div className="w-full p-5 h-full flex flex-col items-center justify-center mx-auto">
      <div className="w-[80%] h-[80%] ">
        <img src={homeHero} alt="Hero Image" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2.5 mt-24">
        <h1 className="text-4xl font-semibold">Invest in everything</h1>
        <p className="text-gray-700">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>
        <button className="bg-blue-500 text-white px-12 py-3 rounded-xl mt-5 cursor-pointer text-xl">
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
