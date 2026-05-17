  import React from "react";
  import { FaArrowRight, FaStar } from "react-icons/fa";
  import Navbar from "../Navabr/Navabr.jsx";
  import Feature from "../Features/Feature"; // ✅ ایمپورت Feature

  const Hero = () => {
    return (
      <>
        <Navbar />
        <div className="w-[80%] max-w-4xl mx-auto mt-20 md:mt-28 text-center">
          <h1 className="text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text">
            Find Your Perfect <br /> <br />
            Websites for your Business
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 md:text-xl">
            The most efficient marketplace for selling Websites and order your
            Websites, we are ready to build your websites.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <button className="flex items-center gap-2 px-8 py-[14px] font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
              Browse Marketplace <FaArrowRight />
            </button>
            <button className="px-8 py-3 font-semibold text-blue-600 transition duration-300 bg-transparent border-2 border-blue-600 rounded-lg hover:bg-blue-50">
              List Your Website
            </button>
          </div>
        </div>
        
        <Feature /> 
      </>
    );
  };

  export default Hero;