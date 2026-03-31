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
            {/* 🧾 Items */}
            <div className='space-y-4'>
              {
                carts.map(item => (
                  <div key={item.id} className='flex justify-between items-center border p-4 rounded-xl'>

                    <div className='flex items-center gap-3'>
                      <img src={item.icon} className='w-12' />
                      <h3 className='font-semibold'>{item.name}</h3>
                    </div>

                    <div className='font-bold'>
                      ${item.price}
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className='btn btn-error btn-sm'
                    >
                      Remove
                    </button>

                  </div>
                ))
              }
            </div>

            {/* 💰 Total */}
            <div className='flex justify-between mt-6 bg-black text-white p-4 rounded-xl text-xl font-bold'>
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>

            {/* 💳 Checkout */}
            <button
              onClick={handleCheckout}
              className='w-full mt-5 py-3 rounded-xl bg-purple-600 text-white text-lg'
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