import React from 'react';
import { toast } from 'react-toastify';
import EmptyImg from "../assets/image.png";

const Cart = ({ carts, setCarts }) => {

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Checkout successful");
  };

  const handleRemove = (id) => {
    const updated = carts.filter(item => item.id !== id);
    setCarts(updated);
    toast.error("Item removed");
  };

  return (
    <div className='max-w-6xl mx-auto p-6'>

      <h2 className='text-3xl font-bold mb-5'>Your Cart</h2>

      {
        carts.length === 0 ? (
          <div className='text-center'>
            <p className='text-xl'>Cart is empty</p>
            <img src={EmptyImg} className="mx-auto mt-4 w-60" />
          </div>
        ) : (
          <>
            
            <div className='space-y-4'>
              {
                carts.map(item => (
                  <div key={item.id} className='flex justify-between items-center bg-gray-100 p-4 rounded-xl'>

                    <div className='flex items-center gap-4'>
                      <img src={item.icon} className='w-8' />
                     <div>
                         <h3 className='font-semibold'>{item.name}</h3>
                    <div className='font-bold'>
                      ${item.price}
                    </div>
                     </div>
                    </div>

                  

                    <button
                      onClick={() => handleRemove(item.id)}
                      className='btn btn-ghost text-red-700'
                    >
                      Remove
                    </button>

                  </div>
                ))
              }
            </div>

           {/* total */}
            <div className='flex justify-between mt-6 bg-gray-100 p-4 rounded-xl text-xl '>
              <span className='font-semibold'>Total</span>
              <span className='font-bold'>${totalPrice}</span>
            </div>

            {/* checkout */}
            <button
              onClick={handleCheckout}
              className='w-full mt-5 py-3 rounded-xl
               bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg'
            >
              Proceed to Checkout
            </button>
          </>
        )
      }

    </div>
  );
};

export default Cart;