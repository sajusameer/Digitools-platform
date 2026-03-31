import React from 'react';
import BannerImg from "../assets/banner.png"

const Banner = () => {
    return (
       <div className="bg-white py-12 md:py-20">

  <div className="max-w-7xl mx-auto px-4 md:px-12">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* 🔹 Left Content */}
      <div className="text-center md:text-left">
        <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
          🚀 Smart Digital Tools Platform
        </span>

        <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
          Supercharge Your <br />
          <span className="text-purple-600">
            Digital Workflow
          </span>
        </h1>

        <p className="mt-4 text-gray-600">
          Boost productivity with our premium digital tools. 
          Everything you need to create, design, and grow — all in one place.
        </p>

        {/* 🔘 Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
          <button className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none w-full md:w-auto">
            Explore Products
          </button>

          <button className="btn btn-outline border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white w-full md:w-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* 🔹 Right Image */}
      <div className="flex justify-center order-first md:order-last">
        <img
          src={BannerImg}
          alt="banner"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>

    </div>

  </div>
</div>
    );
};

export default Banner;