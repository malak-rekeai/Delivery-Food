"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon';

const data = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Menu', link: '/menu' },
  { id: 3, name: 'Contact', link: '/contact' },
  { id: 4, name: 'Working Hours', link: '/hours' }
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button 
        aria-label={open ? 'Close Menu' : 'Open Menu'} 
        onClick={() => setOpen(!open)} 
        className="focus:outline-none"
      >
        <Image 
          src={!open ? '/open.png' : '/close.png'} 
          alt='menu' 
          width={30} 
          height={30} 
        />
      </button>

      {/* Menu Items */}
      {open && (
        <div className='h-screen w-full absolute left-0 top-12 bg-yellow-100 flex flex-col justify-center items-center z-10 gap-4'>
          {data.map((item) => (
            <div 
              key={item.id} 
              className='p-4 text-2xl font-medium text-gray-700 hover:bg-yellow-200 hover:text-yellow-700 rounded-lg transition duration-300 ease-in-out'
            >
              <Link href={item.link}>
                {item.name}
              </Link>
            </div>
            
          ))}
      {!user? <Link href='/login' className='p-4 text-2xl font-medium text-gray-700 hover:bg-yellow-200 hover:text-yellow-700 rounded-lg transition duration-300 ease-in-out'>Login</Link> : <Link href='/orders' className='p-4 text-2xl font-medium text-gray-700 hover:bg-yellow-200 hover:text-yellow-700 rounded-lg transition duration-300 ease-in-out'>orders</Link>}
       <Link href='/cart'>
       <CartIcon />
       </Link>

        </div>
      )}
    </div>
  )
}

export default Menu
