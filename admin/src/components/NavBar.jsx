import React from 'react'
import { assets } from '../assets/assets'
const NavBar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img src={assets.logo} alt='kharizma' className='mb-5 w-45 border border-x-4 rounded-full border-b-fuchsia-600 border-t-blue-800 border-l-fuchsia-900 border-r-purple-500'/>
      <button onClick={()=>setToken('')} className='bg-zinc-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Log Out</button>
    </div>
  )
}

export default NavBar
