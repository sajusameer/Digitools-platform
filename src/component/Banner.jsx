import React from 'react';
import BannerImg from "../assets/banner.png"
import { CircleDot, Play } from 'lucide-react';

const Banner = () => {
    return (
       <div className='bg-white py-12 md:py-20'>

  <div className='max-w-7xl mx-auto px-4 md:px-12'>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

   
      <div className='text-center md:text-left '>
      <div className='inline-flex items-center gap-2 text-sm bg-blue-100
       text-purple-600 px-3 py-2 rounded-full'>
      <CircleDot size={16} />
      <span>New: AI-Powered Tools Available</span>
     </div>

        <h1 className='text-3xl md:text-5xl font-bold mt-4 leading-tight'>
          Supercharge Your <br />
         
            Digital Workflow
          
        </h1>

        <p className='mt-4 text-gray-600'>
        Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today <br />
        Explore Products
        </p>

      
        <div className='flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start'>
          <button className='btn bg-gradient-to-r from-indigo-500 to-purple-500
           text-white border-none w-full md:w-auto rounded-full'>
            Explore Products
          </button>

          <button className='btn btn-outline
           border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white
           md:w-auto rounded-full'>
             <div className='inline-flex items-center gap-2 
        px-1 py-1'>
      <Play size={16} />
      <span>Watch Demo</span>
     </div>
          </button>
        </div>
      </div>

    
      <div className='flex justify-center order-first md:order-last object-contain
       drop-shadow-lg rounded-xl animate-pulse'>
        <img
          src={BannerImg}
          alt="banner"
          className='w-full max-w-xs md:max-w-md'
        />
      </div >

    </div>

  </div>
</div>
    );
};

export default Banner;