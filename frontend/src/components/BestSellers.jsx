import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/shopContext'
import Title from './title'
const BestSeller = () => {

   // const {products} = useContext(ShopContext)
   const [bestSeller,setBestSelller] = useState([])

   
  return (
      <div className='my-10'>
        <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-zinc-800'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. inventore ducimus magnam eos atque quisquam. Aliquam.
        </p>
        </div>
      </div>
  )
}

export default BestSeller
