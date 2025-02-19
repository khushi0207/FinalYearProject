import React from 'react'
import { assets } from '../assets/assets'

const Home_section = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-lime-50 rounded-2xl bg-yellow-200'>
      {/*left section */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
      <div className='text-gray-800'>
        <div className='flex items-center gap-2'>
        <p className='w-8 md:11 h-[2px] bg-violet-900'></p>
        <p className='font-medium text-sm md:text-base'>BESTSELLERS</p>
        </div>
        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>LATEST ARRIVALS</h1>
        <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-violet-900'></p>
      </div>
        </div>
      </div>
      {/*right section */}
      <img className='w-fit sm:w-1/2 rounded-xl ' src={assets.dk_db1} alt=''/>
    </div>
  )
}

export default Home_section
