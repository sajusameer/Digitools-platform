

import { Menu, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({ carts, setActiveTab }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full bg-white border-b border-gray-200 sticky top-0 z-50'>

      <div className='px-6 md:px-12 py-4 flex items-center justify-between'>

      {/* logo */}
        <div
          onClick={() => setActiveTab("product")}
         className='items-center'
        >
          <img className="w-30" src="/logo.png" alt="" />
        </div>

       {/* menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          <li
            onClick={() => setActiveTab("product")}
            className="cursor-pointer hover:text-purple-600"
          >
            Products
          </li>

          <li className="cursor-pointer hover:text-purple-600">
            Features
          </li>

          <li className="cursor-pointer hover:text-purple-600">
            Pricing
          </li>

          <li className="cursor-pointer hover:text-purple-600">
            Testimonials
          </li>
           <li className="cursor-pointer hover:text-purple-600">
            FAQ
          </li>
        </ul>

      
        <div className="flex items-center gap-4">

        
          <div
            onClick={() => setActiveTab("cart")}
            className="relative cursor-pointer text-xl"
          >
        <ShoppingCart size={28}></ShoppingCart>
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
              {carts.length}
            </span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-1.5 text-gray-600 rounded-full hover:bg-purple-50">
              Login
            </button>

            <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-md">
              Get Started
            </button>
          </div>

         {/* mobile menu */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
        <Menu size={28} />
          </div>
        </div>
      </div>

    
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">

            <li
              onClick={() => {
                setActiveTab("product");
                setMenuOpen(false);
              }}
              className="cursor-pointer hover:text-purple-600"
            >
               Products
            </li>

            <li className="cursor-pointer hover:text-purple-600">
              Features
            </li>

            <li className="cursor-pointer hover:text-purple-600">
              Pricing
            </li>

             <li className="cursor-pointer hover:text-purple-600">
            Testimonials
          </li>
           <li className="cursor-pointer hover:text-purple-600">
            FAQ
          </li>
          </ul>

        
          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full px-4 py-2 text-gray-600  rounded-full hover:bg-purple-50">
              Login
            </button>

            <button className="w-full px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;




