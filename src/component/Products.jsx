import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);

  return (
    <div className="py-16 max-w-7xl mx-auto px-4">

     
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium digital products design <br /> edto boost your productivity and creativity.
        </p>
      </div>

    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              carts={carts}
              setCarts={setCarts}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Products;