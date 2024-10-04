"use client"; // Add this at the top of your component

import React, { useState } from "react";

// Sample cart data (You can replace this with your state management logic)
const initialCartItems = [
  { id: 1, title: "Product 1", price: 20, quantity: 1 },
  { id: 2, title: "Product 2", price: 30, quantity: 1 },
  { id: 3, title: "Product 3", price: 15, quantity: 1 },
];

const Page = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-yellow-600 mb-8">Shopping Cart</h1>
      
      {/* Cart Items */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-yellow-600">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4 border-b border-yellow-200 pb-4">
                <div>
                  <h2 className="text-lg font-semibold text-yellow-600">{item.title}</h2>
                  <p className="text-yellow-500">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 py-1 bg-yellow-300 text-yellow-600 rounded hover:bg-yellow-400 transition"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2 py-1 bg-yellow-300 text-yellow-600 rounded hover:bg-yellow-400 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total Amount */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-yellow-600">
          Total: ${totalAmount}
        </h2>
      </div>

      {/* Checkout Button */}
      <button className="mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Page;
