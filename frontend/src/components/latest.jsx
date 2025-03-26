import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import Title from '../components/title'
import ProductItems from '../components/productItems'
const latest = () => {

    const { products } = useContext(shopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'PRODUCTS'}/>
        <p className='w-3/4 m-auto  text-xs sm:text-sm md:text-base text-zinc-800'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. .
        </p>
      </div>
{/* rendering products */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {latestProducts.map((item, index) => (
        <ProductItems key={index} id={item._id} image={item.image} name={item.name} rating={item.rating} reviews={item.reviews} price={item.price} />
      ))}
</div>

</div>
  )
}

export default latest
