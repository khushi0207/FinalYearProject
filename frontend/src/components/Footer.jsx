import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> 
    
    <div>
        <img src={assets.logo} className='mb-5 w-32 border border-x-4 rounded-full border-b-fuchsia-600 border-t-blue-800 border-l-fuchsia-900 border-r-purple-500' alt='footer'/>
        <p className='w-full md:w-2/3 text-zinc-800'>
            Welcome to Kharizma, where we find the latest and best products suitable for your skin and pocket friendly 😊
        </p>
    </div>
    <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-zinc-800'>
            <li className='mb-2'>HOME</li>
            <li className='mb-2'>ABOUT US</li>
            <li className='mb-2'>DELIVERY</li>
            <li className='mb-2'>PRIVACY POLICY</li>
        </ul>
    </div>
    <div>
        <p className='text-base font-serif text-zinc-800 mb-5'>Let's grow together! Connect with us. 🤝</p>
        <ul className='flex flex-row gap-2'>
            <li><a href='https://www.instagram.com/' target='_blank'><img  className='w-15' src={assets.instagram}/></a></li>
            <li><a href='https://www.facebook.com/' target='_blank' rel='noopener'><img className='w-15' src={assets.facebook}/></a></li>
            <li><a href='https://www.twitter.com/' target='_blank' rel='noopener'><img className='w-15' src={assets.twitter}/></a></li>
            <li><a href='https://www.youtube.com/' target='_blank' rel='noopener'><img className='w-15' src={assets.youtube}/></a></li>
            <li><a href='https://www.pinterest.com/' target='_blank' rel='noopener'><img className='w-15' src={assets.pinterest}/></a></li>

        </ul>
    </div>
    </div>
    <div className="w-full flex flex-col items-center justify-center text-center">
        <hr className="w-full border-t-2 " />
        <p className="py-5 text-base ">&copy; 2025 KARIZMA E-RETAIL LIMITED All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
