import React, { useContext, useState } from 'react'
import {shopContext} from '../context/shopContext'
const collections = () => {
  const {products} = useContext(shopContext);
  const [showFilter,setShowFilter]= useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
       {/* filter option */}
       <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        {/*ategory filter */}
        <div className={`border border-zinc-700 pl-5 py-3 mt-6 ${showFilter? '' :'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-zinc-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Makeup'}/>Makeup
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Skincare'}/>Skincare
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Body_Bath Care'}/>Body& Bath Care
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Hair'}/>Hair
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Fragrance'}/>Fragrance
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Beardcare'}/>Beard Care
            </p>
          </div>
        </div>
        {/*sub category */}
        
        <div className={`border border-zinc-700 pl-5 py-3 mt-6 ${showFilter? '' :'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-zinc-700 px-1 mx-2'>
            <select className='px-1'>
              <option >All</option>
            <option value={"review"}>Customer Review</option>
            <option value={"review"}>Customer Review</option>
            <option value={"review"}>Customer Review</option>
            <option value={"review"}>Customer Review</option>

            </select>
          </div>
        </div>

       </div>
      
    </div>
  )
}

export default collections
