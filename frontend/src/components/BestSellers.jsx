import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import ProductItem from '../components/productItems'
import Title from './title'
//import { products } from '../assets/assets'
const BestSeller = () => {

  const { products } = useContext(shopContext);
  const [bestSeller,setBestSelller] = useState([])

   useEffect(() => {
    const bestProduct = products.filter((item)=>(item.bestseller))
    setBestSelller(bestProduct)
   },[])
   
  return (
      <div className='my-10'>
        <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-zinc-800'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. inventore ducimus magnam eos atque quisquam. Aliquam.
        </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
          {
            bestSeller.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
          }
        </div>
      </div>
  )
}

export default BestSeller
