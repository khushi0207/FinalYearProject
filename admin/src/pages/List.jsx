import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendURL, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const List = ({token}) => {

  const [list,setList] = useState([])

  const handleList = async () =>{
    try {
      
const response = await axios.get(backendURL+'/api/product/list')
if(response.data.success){
  setList(response.data.products)
}else{
  toast.error(response.data.message)
}

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
}

const removeProduct = async(id)=>{
  try {
    const response = await axios.post(backendURL+'/api/product/remove',{id},{headers:{token}})
if(response.data.success){
  toast.success(response.data.message)
  await handleList();
}else{
  toast.error(response.data.message)
}

  } catch (error) {
    console.log(error.message);
    toast.error(error.message)
  }
}

  useEffect(()=>{
    handleList()
  },[])
  return (
    <>
    <p className='mb-2'>Product List</p>
      <div>
        <div className='flex flex-col gap-2'>

        </div>
        {/*---------------list title ------------*/}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-zinc-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {/*----------------- list of products--------------- */}
        {
          list.map((item,index)=>(
            <div className='grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index} >
              <img className='w-12' src={item.image[0]} alt=''/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=> removeProduct(item._id)} className="flex items-center justify-center cursor-pointer text-lg"><img src={assets.cross} className="w-8" /></p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
