import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <div className='flex justify-center items-center gap-1'>
                {/* <span className=''>cart (0)</span> */}

        <Image src='/cart.png' alt='cart' width={30} height={30} />
    </div>
  )
}

export default CartIcon