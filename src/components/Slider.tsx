"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const data =[
    {id:1, title:'Always Fresh , Always Crispy & Always Hot', image:'/slide1.png'},
    {id:2, title:'We Deliver Your Order Wherever You Are ', image:'/slide2.png'},
    {id:3, title:'The Best Pizza To Share With Your Family', image:'/slide3.jpg'},
]
const Slider = () => {
  const [current, setCurrent] = useState(1);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev) => (prev + 1) % data.length)
    }, 2000)
    return () => clearInterval(interval)
  },[current])

  return (
    <div className='relative w-full h-[calc(100vh-6rem)] flex flex-col md:flex-row'>
      {/* Text Section */}
      <div className='h-1/2 md:h-full md:w-1/2 flex flex-col justify-center text-yellow-500  items-center px-10 space-y-4 bg-yellow-50'>
        <h1 className='text-5xl md:text-7xl font-bold mb-8'>{data[current].title}</h1>
    
        <button className=' py-4 px-8 bg-yellow-500 text-white font-medium  hover:bg-yellow-600 transition '>
          Order Now
        </button>
      </div>

      {/* Image Section */}
      <div className='relative h-1/2 md:h-full md:w-1/2'>
        <Image
          src={data[current].image}
          alt='Slider Image'
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Slider;
