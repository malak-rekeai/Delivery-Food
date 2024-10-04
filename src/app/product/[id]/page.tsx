import { singleProduct } from '@/data';
import React from 'react';
import Image from 'next/image';
import Price from '@/components/Price';

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen p-8'>
      
      {/* Image Container */}
      <div className='relative w-full h-[50vh] md:w-1/2 md:my-auto'>
        <Image 
          src={singleProduct.img} 
          fill 
          alt={singleProduct.title} 
          className='object-contain' 
        />
      </div>
      
      <div className='flex flex-col justify-center gap-4 p-6 md:w-1/2'>
        <h1 className='text-4xl font-bold'>{singleProduct.title}</h1>
        <p className='text-lg text-gray-600'>{singleProduct.desc}</p>
         <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
     
      </div>
    </div>
  );
}

export default Page;
