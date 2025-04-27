import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className='flex items-center gap-3 border border-zinc-300 border-r-0 px-3 py-2 rounded-l' to="/add">
            <img className='w-8 h-8' src={assets.addItem} alt="add" />
            <p className='hidden md:block'>Add Item</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-zinc-300 border-r-0 px-3 py-2 rounded-l' to="/list">
            <img className='w-8 h-8' src={assets.listItem} alt="add" />
            <p className='hidden md:block'>List Item</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-zinc-300 border-r-0 px-3 py-2 rounded-l' to="/orders">
            <img className='w-8 h-8' src={assets.orderedItem} alt="add" />
            <p className='hidden md:block'>Order Item</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
