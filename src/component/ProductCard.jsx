import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ product, carts, setCarts }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const isExist = carts.find(item => item.id === product.id);

    if (isExist) {
      toast.error("Item already in cart!");
      return;
    }

    setCarts([...carts, product]);
    setAdded(true);
    toast.success("Added to cart");
  };

  
  const getBadgeColor = (tag) => {
    if (tag === "Best Seller") return "bg-yellow-100 text-yellow-600";
    if (tag === "Popular") return "bg-purple-100 text-purple-600";
    if (tag === "New") return "bg-green-100 text-green-600";
  };

  return (
    <div className='bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-md transition flex flex-col h-full relative'>

      
      <span className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full ${getBadgeColor(product.tag)}`}>
        {product.tag}
      </span>

     
      <div className='w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center  mb-4'>
       <img 
        className='w-8 h-8 object-contain' 
         src={product.icon} 
        alt="" 
      />
     </div>

   
      <h2 className='text-xl font-semibold'>{product.name}</h2>

      <p className='text-gray-500 text-sm mt-2'>{product.description}</p>

     
      <div className='text-lg font-bold mt-3'>
        ${product.price}
        <span className='text-gray-400 text-sm'>/{product.period}</span>
      </div>

     
      <ul className='mt-4 space-y-2 text-sm text-gray-600 mb-2'>
             {product.features.map((f, i) => (
            <li key={i} className='flex items-center gap-2'>
            <Check size={18} className='text-green-500 mt-0.5' />
            <span>{f}</span>
            </li>
        ))}
        </ul>

      
      <button
        onClick={handleAddToCart}
        className='mt-auto py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
      >
        {added ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;