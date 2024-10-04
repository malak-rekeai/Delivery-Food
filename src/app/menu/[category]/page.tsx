import { pizzas } from '@/data';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex flex-wrap text-yellow-600 '>
      {pizzas.map((pizza) => (
        <Link 
          key={pizza.id}  
          className='group w-full h-[43vh] lg:w-1/3 sm:w-1/2 border-b-2 border-r-2 border-yellow-400 even:bg-yellow-50' 
          href={`/product/${pizza.id}`}  
        >
          {pizza.img && (
            <div className='h-[75%] flex items-center justify-center'>
              <Image 
                src={pizza.img} 
                alt={pizza.title} 
                width={290}  
                height={290} 
                className='object-contain'  
              />
            </div>
          )}

          <div className='flex flex-row items-center justify-between h-[30%] px-6'>
            <h1 className='text-2xl font-bold'>{pizza.title}</h1>
            
              <p className='group-hover:hidden text-lg'>${pizza.price}</p>
              
              <button className='group-hover:inline-block hidden px-4 py-2 bg-transparent text-yellow-600 border border-yellow-500 rounded hover:border-yellow-600 transition'>
                Add to Cart
              </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
