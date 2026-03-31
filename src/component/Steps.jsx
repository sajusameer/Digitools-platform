import React from 'react';
import UserImg from "../assets/user.png"
import PackageImg from "../assets/package.png"
import RocketImg from "../assets/rocket.png"



const Steps = () => {
    return (
       <section className="py-16 bg-gray-100 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className='mb-12'>
            <h2 className="text-2xl md:text-4xl font-bold">
          Get Started in 3 Steps
        </h2>
        <p className='text-sm text-gray-500 mt-2'>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
        <div className="bg-white p-4 rounded-2xl shadow-lg ">
            {/* count */}
           <div className="relative">
  
          <span className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            01
          </span>
        </div>
            
            {/* image circle*/}
            <div className="mt-10 w-16 h-16 mx-auto mb-4">
              
              <div className="w-full h-full rounded-full bg-purple-100 flex
               items-center justify-center">
                <img 
                  src={UserImg}
                  alt="account"
                  className="w-10"
                />
              </div>

              
            </div>

            <h3 className="font-bold text-lg">Create Account</h3>
            <p className="text-sm text-gray-500 mt-2 mb-10">
              Sign up for free in seconds. No credit card <br></br> required to get started.
            </p>
        </div>

          {/* Step 2 */}
          <div className="bg-white p-4 rounded-2xl shadow-lg ">
            {/* count */}
           <div className="relative">
  
         <span className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            02
          </span>
        </div>
            
            {/* image circle*/}
            <div className="mt-10 w-16 h-16 mx-auto mb-4">
              
              <div className="w-full h-full rounded-full bg-purple-100 flex
               items-center justify-center">
                <img 
                  src={PackageImg} 
                  alt="account"
                  className="w-10"
                />
              </div>

              
            </div>

            <h3 className="font-bold text-lg">Choose Products</h3>
            <p className="text-sm text-gray-500 mt-2 mb-10">
              Browse our catalog and select the tools <br />that fit your needs.
            </p>
        </div>

          {/* Step 3 */}
         <div className="bg-white p-4 rounded-2xl shadow-lg ">
            {/* count */}
           <div className="relative">
  
          <span className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            03
          </span>
        </div>
            
            {/* image circle*/}
            <div className="mt-10 w-16 h-16 mx-auto mb-4">
              
              <div className="w-full h-full rounded-full bg-purple-100 flex
               items-center justify-center">
                <img 
                  src={RocketImg} 
                  alt="account"
                  className="w-10"
                />
              </div>

              
            </div>

            <h3 className="font-bold text-lg">Start Creating</h3>
            <p className="text-sm text-gray-500 mt-2 mb-10">
              Download and start using your premium <br /> tools immediately.
            </p>
        </div>

        </div>
      </div>
    </section>
    );
};

export default Steps;