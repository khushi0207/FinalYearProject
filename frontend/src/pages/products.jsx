import React, { useContext, useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import {shopContext} from '../context/shopContext'
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';
const Products = () => {
  const{ productId } = useParams();
  const {products,currency,addToCart} = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () =>{
    products.map((item) =>{
      if(item._id === productId){
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
        {/*<p>⭐{productData.rating}| ({productData.reviews})</p> */}
        <p className='mt-1 text-2xl font-medium'>{currency}{productData.price}</p>
        <p className='mt-5 text-zinc-800 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
          <p>Select size</p>
          <div className='flex gap-2'>
            {productData.sizes.map((item,index)=>(
             <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-green-300 rounded-md ${item === size ? 'border-orange-500': ''}`} key={index}>{item}</button>
            ))}
          </div>
        </div>
        <button onClick={()=>addToCart(productData._id,size)} className='bg-zinc-700 rounded-sm text-white px-8 py-3 text-sm active:bg-zinc-600'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5'/>
        <div className='text-sm text-zinc-600 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p> Easy 7 Days Return Policy.</p>
        </div>
    </div>
    </div>
    {/*-------------------descriprtion and review section------------------ */}
    <div className='mt-20'>
      <div className='flex'>
        <b className=' border border-zinc-400 px-5 py-3 text-sm'>Description</b>
        {/*<p className=' border border-zinc-400 px-5 py-3 text-sm'>Review ({productData.reviews})</p>*/}
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>{productData.description}</p>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p> Easy 7 Days Return Policy.</p>
      </div>
    </div>
    {/*------------------display relaed products----------- */}
    <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ):<div className='opacity-0'>
  </div>
}

export default Products
