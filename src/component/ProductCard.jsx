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

  // 🎨 badge color
  const getBadgeColor = (tag) => {
    if (tag === "Best Seller") return "bg-yellow-100 text-yellow-600";
    if (tag === "Popular") return "bg-purple-100 text-purple-600";
    if (tag === "New") return "bg-green-100 text-green-600";
  };

  return (
    <div className='bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full relative'>

      {/* 🔖 Badge */}
      <span className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full ${getBadgeColor(product.tag)}`}>
        {product.tag}
      </span>

      {/* 🔹 Icon */}
      <img className='w-12 h-12 mb-4' src={product.icon} alt="" />

      {/* 🔹 Title */}
      <h2 className='text-xl font-semibold'>{product.name}</h2>

      {/* 🔹 Description */}
      <p className='text-gray-500 text-sm mt-2'>{product.description}</p>

      {/* 🔹 Price */}
      <div className='text-lg font-bold mt-3'>
        ${product.price}
        <span className='text-gray-400 text-sm'>/{product.period}</span>
      </div>

      {/* 🔹 Features */}
      <ul className='mt-4 space-y-2 text-sm text-gray-600'>
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      {/* 🔘 Button */}
      <button
        onClick={handleAddToCart}
        className='mt-auto py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
      >
        {added ? "Added ✓" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;