import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-row sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-zinc-800'>
      <div>
        <img className='w-12 m-auto mb-5 '  src={assets.shipping2} alt='shipping'/>
        <p className='font-semibold'>Free Shipping</p>
        <p className='text-zinc-800'>On order Above ₹299</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange} alt='exchange'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-zinc-800'>We offer hassle free exchange policy.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality} alt='quality'/>
        <p className='font-semibold'>7 Days return Policy.</p>
        <p className='text-zinc-800'>We provide 7 Days free return policy.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support} alt='support'/>
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-zinc-800'>We provide 24/7 Customer support.</p>
      </div>
      
    </div>
  )
}

export default OurPolicy
