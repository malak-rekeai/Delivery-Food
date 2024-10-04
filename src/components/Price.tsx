"use client";
import React, { useState, useEffect } from "react";

interface Props {
  price: number;
  id: number;
  options: { id: number; title: string }[];
}

const Price = ({ price, options }: Props) => {
  const [selectedSize, setSelectedSize] = useState<string>("Small");
  const [basePrice, setBasePrice] = useState<number>(price); // Base price based on size
  const [currentPrice, setCurrentPrice] = useState<number>(price); // Total price calculation
  const [count, setCount] = useState<number>(1);

  // Update the price when the size changes
  useEffect(() => {
    setCurrentPrice(basePrice * count);
  }, [basePrice, count]);

  const sizeHandler = (optionTitle: string) => {
    setSelectedSize(optionTitle);
    setCount(1); 
    if (optionTitle === "Small") {
      setBasePrice(price);
    } else if (optionTitle === "Medium") {
      setBasePrice(price + 5);
    } else if (optionTitle === "Large") {
      setBasePrice(price + 10);
    }
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex flex-col p-6 w-full md:w-[400px]">
      {/* Display Current Price */}
      <h1 className="text-3xl font-bold text-yellow-600 mb-6">${currentPrice.toFixed(2)}</h1>

      {/* Options Section */}
      <div className="flex gap-4 mb-6">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => sizeHandler(option.title)}
            className={`px-4 py-2 border ${
              selectedSize === option.title
                ? "bg-yellow-600 text-white border-yellow-600"
                : "border-yellow-600 text-yellow-600"
            } rounded hover:bg-yellow-600 hover:text-white transition`}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* Quantity Section */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-lg">Quantity</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={decrement}
          disabled={count === 1} // Disable decrement if count is 1
        >
          {"<"}
        </button>
        <span className="px-4 py-2 bg-gray-100 rounded">{count}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={increment}
        >
          {">"}
        </button>
      </div>

      {/* Add to Cart Button */}
      <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default Price;
