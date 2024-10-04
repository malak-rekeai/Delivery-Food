import React from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/data';

const Featured = () => {
  return (
    <div className='w-screen overflow-x-auto py-8'>
      {/* Container for products */}
      <div className='w-max flex space-x-6 px-4'>
        {/* Iterate through featured products */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className='max-w-[300px] md:max-w-[400px] h-[60vh] flex flex-col items-center justify-around bg-white shadow-md hover:bg-yellow-50 p-4'
          >
            {/* Product Image */}
            <div className='relative w-full h-1/2 mb-4 hover:rotate-2' >
              <Image src={product.img} alt={product.title} fill className='object-contain rounded-md' />
            </div>
            
            {/* Product Details */}
            <div className='text-center flex-1 flex flex-col items-center gap-4'>
              <h1 className='text-2xl font-semibold mb-2 text-yellow-600'>{product.title}</h1>
              <p className='text-gray-500 mb-4'>{product.desc}</p>
              <p className='text-lg font-bold text-yellow-500 mb-4'>${product.price}</p>
              <button className='py-2 px-4 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition'>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
