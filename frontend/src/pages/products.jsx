import React, { useContext, useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import {shopContext} from '../context/shopContext'
import { assets } from '../assets/assets';
const Products = () => {
  const{ productId } = useParams();
  const {products,currency} = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')

  const fetchProductData = async () =>{
    products.map((item) =>{
      if(item._id === Number(productId)){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
  },[productId])
  
  return productData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
    {/*product UI/UX */}
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
    {/* -----------------product images----------------- */}
    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
      <div  className='flex sm:flex-col overflow-x-hidden sm:overflow-y-hidden justify-between sm:justify-normal sm:w-[18.7%] w-full'>
        {
          productData.image.map((item, index) =>(
            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[25%] sm:w-full lg:w-70 sm:mb-3 flex-shrink-0 hover:scale-110 transition ease-in-out cursor-pointer'/>
          ))
          
        }
      </div>
      <div className='w-full sm:w-[80%]'>
        <img className='w-full h-auto' src={image} alt="product"/>
      </div>
    </div>
    {/* -----------------product details------------------ */}
    <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <p>⭐{productData.rating}| ({productData.reviews})</p>
        <p className='mt-1 text-2xl font-medium'>{currency}{productData.price}</p>
        <p>{productData.description}</p>
    </div>
    </div>
    </div>
  ):<div className='opacity-0'>
  </div>
}

export default Products
