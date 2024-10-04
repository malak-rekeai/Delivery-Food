import React from 'react';
import Image from 'next/image';
import CountDownTimer from './CountDown';

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row items-center justify-center md:bg-[url("/offerBg.png")] bg-cover bg-center h-[70vh]'>
      <div className='flex flex-col gap-4 text-center md:text-left md:w-1/2 p-8'>
        <h1 className='text-4xl md:text-5xl text-white'>Delicious Burger & French Fry</h1>
        <p className='text-white text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum saepe, velit cum aliquid.
        </p>
        {/* Countdown Timer */}
        <CountDownTimer />
        {/* Order Button */}
        <button 
          className='px-8 py-4 bg-yellow-500 text-black font-medium mt-4 hover:bg-yellow-600 transition duration-300'
          aria-label="Order Now"
        >
          Order Now
        </button>
      </div>

      <div className='md:w-1/2 flex items-center justify-center'>
        <Image
          src='/offerProduct.png'
          alt='Delicious Offer Product'
          className='object-contain'
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default Offer;
