import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'

const Navbar = () => {
    const user= false;
  return (
    <div className='w-full flex justify-between h-16 py-1 px-4 md:px-12 border-b-2 border-yellow-200 items-center'>
      <div className="text-2xl font-bold">
        MALAK
      </div>
      <div className='hidden md:flex gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/product'>Products</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/contact'>Contact</Link>
       
      </div>
      <div className='hidden md:flex gap-4'>
        {!user? <Link href='/login'>Login</Link> : <Link href='/orders'>Orders</Link>}
        <Link href='/cart'>
          <CartIcon />
        </Link>
        </div>
      
      <div className='md:hidden'>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
