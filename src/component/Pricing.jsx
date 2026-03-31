import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
    <section className='py-16 bg-gray-50 px-4'>
      <div className='max-w-7xl mx-auto '>

     <div className='mb-12 text-center'>
           <h2 className="text-2xl md:text-4xl font-bold ">
          Simple, Transparent Pricing
        </h2>
        <p className='text-gray-500 mt-2'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
     </div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
        {/* card-1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
            <h3 className="font-semibold text-lg">Starter</h3>
            <p className='text-gray-500'>Perfect for getting started</p>
            <p className="text-3xl font-bold mt-4">$0 
                <span className='text-xl font-normal'>/Month</span></p>
            

            <ul className="text-sm text-gray-500 mt-4 space-y-2">
              <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>Access to 10 free tools</span>
             </li>
              <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>Basic templates</span>
             </li>
              <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>Community support</span>
             </li>
             <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>1 project per month</span>
             </li>
             
            </ul>

            <button className="mt-6 mt-auto w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              Get Started Free
            </button>
          </div>

         {/* card-2 */}
          <div className="relative bg-gradient-to-b from-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg scale-100 md:scale-105 h-full flex flex-col">
            
          
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
              Most Popular
            </span>

            <h3 className="font-bold text-xl">Pro</h3>
            <p>Best for professionals</p>
             <p className="text-3xl font-bold mt-4">$29 
                <span className='text-xl font-normal'>/Month</span></p>

            <ul className="text-sm mt-4 space-y-2 mb-1">
                <li className="flex items-center gap-2">
                   <Check size={16} className='mt-1' />
                   <span>Access to all premium tools</span>
                </li>

                 <li className="flex items-center gap-2">
                   <Check size={16} className='mt-1' />
                   <span>Unlimited templates</span>
                </li>
                 <li className="flex items-center gap-2">
                   <Check size={16} className='mt-1' />
                   <span>Priority support</span>
                </li>
                 <li className="flex items-center gap-2">
                   <Check size={16} className='mt-1' />
                   <span>Unlimited projects</span>
                </li>
                 <li className="flex items-center gap-2">
                   <Check size={16} className='mt-1' />
                   <span>Cloud sync</span>
                </li>
                 <li className="flex items-center gap-2">
                   <Check size={16} className='mt-1' />
                   <span>Advanced analytics</span>
                </li>
            </ul>

            <button className="mt-6 mt-auto w-full py-2 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transition">
             Start Pro Trial
            </button>
          </div>

          {/* cart-3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg  h-full flex flex-col">
            <h3 className="font-semibold text-lg">Enterprise</h3>
            <p className='text-gray-500'>For teams and businesses</p>
            <p className="text-3xl font-bold mt-4">$99 
                <span className='text-xl font-normal'>/Month</span></p>

            <ul className="text-sm text-gray-500 mt-4 space-y-2">
             <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>Everything in Pro</span>
             </li>
             <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>Access to 10 free tools</span>
             </li>
              <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>Basic templates</span>
             </li>
              <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>Community support</span>
             </li>
             <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>1 project per month</span>
             </li>
             <li className="flex items-center gap-2">
               <Check size={16} className="text-green-500 mt-1" />
               <span>Custom branding</span>
             </li>
            </ul>

            <button className="mt-auto mt-6 w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Pricing;