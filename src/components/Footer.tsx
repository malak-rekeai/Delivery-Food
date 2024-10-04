import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center py-4 px-6'>
      <p className='text-lg font-semibold'>MALAK</p>
      <p className='text-sm'>All Rights Reserved © {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
