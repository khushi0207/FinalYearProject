import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
const SearchBar = () => {
    const {search , setSearch, showSearch, setShowSearch } = useContext(shopContext);
    const [visible,setVisible] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname.includes('/collections')){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ?(
    <div className='border-t border-b bg-gray-100 text-center '>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-2 mx-2 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search' />
        <img className='size-8' src={assets.search} alt='search' />
      </div>
      <img className='inline w-7 cursor-pointer' onClick={()=>setShowSearch(false)} src={assets.cross} alt='cross'/>
    </div>
  ): null
}

export default SearchBar
