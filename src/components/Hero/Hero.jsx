import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

const Hero = () => {

  return (
    <>
      <div className="w-[80%] max-w-4xl mx-auto mt-20 md:mt-28 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-transparent">
          Find Your Perfect <br /> <br />
          Websites for your Business
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          The most efficient marketplace for selling Websites and order your
          Websites, we are ready to build your websites.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2">
            Browse Marketplace <FaArrowRight />
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300">
            List Your Website
          </button>
        </div>
      </div>

    </>
  );
};

export default Hero;