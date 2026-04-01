import React from 'react';

const Workflow = () => {
    return (
       <section className='w-full py-16 px-4
        bg-gradient-to-r from-indigo-500 to-purple-500 text-white'>
        <div className="max-w-7xl mx-auto text-center">
        
        <div className='mb-10'>
            <h2 className="text-2xl md:text-4xl font-bold">
          Ready to Transform Your Workflow?
        </h2>
        <p className='text-sm mt-2 text-gray-200'>Join thousands of professionals who are already using Digitools to work smarter. <br />
         Start your free trial today.</p>

        </div>
       {/* button */}
       <div className='flex flex-col md:flex-row gap-4 mt-6 justify-center'>
          <button className='btn bg-white shadow
           text-indigo-500 border-none w-full hover:bg-indigo-500 hover:text-white
            md:w-auto rounded-full'>
            Explore Products
          </button>

          <button className='btn btn-outline
           border-white text-white  hover:bg-white hover:text-purple-500
           md:w-auto rounded-full'>View Pricing</button>
        </div>
        <p className='text-sm mt-2 text-gray-200'>14-day free trial • No credit card required • Cancel anytime</p>


        </div>



       </section>
    );
};

export default Workflow;