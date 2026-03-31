import React from 'react';

const Rating = () => {
    return (
       <div className="w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 text-white py-10">

  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 items-center text-center gap-6 md:gap-0">

    {/* 🔹 1 */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
      <p className="text-sm mt-1">Active Users</p>
    </div>

    {/* 🔸 Divider (hidden mobile) */}
    <div className="hidden md:flex justify-center">
      <div className="w-[1px] h-12 bg-white/40"></div>
    </div>

    {/* 🔹 2 */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
      <p className="text-sm mt-1">Premium Tools</p>
    </div>

    {/* 🔸 Divider */}
    <div className="hidden md:flex justify-center">
      <div className="w-[1px] h-12 bg-white/40"></div>
    </div>

    {/* 🔹 3 */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
      <p className="text-sm mt-1">Rating</p>
    </div>

  </div>
</div>
    );
};

export default Rating;