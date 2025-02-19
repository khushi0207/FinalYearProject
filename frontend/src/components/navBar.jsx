import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink,Link } from 'react-router-dom'
const navBar = () => {
const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium bg-rose-300 m-3.5 px-6 rounded-xl' >
      <Link to = '/'>
      <img src={assets.logo} className='w-36' alt="Karishma"  />
      </Link>
     
      <ul className='hidden sm:flex gap-5 text-base text-grey-700 font-serif'>
        <NavLink to= '/' className='flex flex-col items-center gap-1 '>
            <p>HOME</p>
            <hr className='w-2/4 border-none  h-[1.5px] bg-blue-800 hidden'/>
        </NavLink>
        
        <NavLink to= '/collection' className='flex flex-col items-center gap-1 '>
            <p>COLLECTIONS</p>
            <hr className='w-2/4 border-none  h-[1.5px] bg-blue-800 hidden'/>
        </NavLink>

        <NavLink to= '/about' className='flex flex-col items-center gap-1 '>
            <p>ABOUT US</p>
            <hr className='w-2/4 border-none  h-[1.5px] bg-blue-800 hidden'/>
        </NavLink>

        <NavLink to= '/contact' className='flex flex-col items-center gap-1 '>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none  h-[1.5px] bg-blue-800 hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-6 '>
        <img src={assets.search} alt='' className='cursor-pointer'/>
        <div className='group relatives'>
            <img className='w-12 cursor-pointer' src={assets.profile} alt=''/>
            <div className='group-hover:block hidden absolute dropdown-menu right-40 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-rose-300 text-gray-500 rounded '>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Log Out</p>
                </div>

            </div>
        </div>
        <Link to='/cart' className='relative'>
        <img className='w-10 min-w-5' src={assets.cart} alt='cart'/>
        <p className='absolute right-[-5px] bottom-[-5px] w-5 text-center leading-5 bg-black text-white aspect-sqare rounded-full text-[12px]'>0</p>
        </Link>
        <img onClick= {()=>setVisible(true)} src={assets.menu} className='w-10 cursor-pointer sm:hidden' alt='' />   
    </div>
    {/* sidebar menu for small screen */}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-yellow-100 transition-all ${visible ? 'w-full':'w-0'}`}>
      <div className='flex flex-col text-gray-600'>
        <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={()=>setVisible(false)}>
          <img className='h-4 rotate-100' src={assets.dropdown} alt=""/>
          <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} to='/aboutus'>ABOUT US</NavLink>
        <NavLink onClick={()=>setVisible(false)} to='/collections'>COLLECTIONS</NavLink>
        <NavLink onClick={()=>setVisible(false)} to='/orders'>ORDERS</NavLink>
        <NavLink onClick={()=>setVisible(false)} to='/contact'>CONTACT</NavLink>
      </div>
    </div>
    </div>
  )
}

export default navBar
