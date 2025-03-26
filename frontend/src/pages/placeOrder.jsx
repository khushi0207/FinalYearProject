import React, { useContext, useState } from 'react'
import Title from '../components/title'
import CartTotal from "../components/cartTotal"
import { assets } from '../assets/assets'
import { shopContext } from '../context/shopContext'

const placeOrder = () => {
  const [method,setMethod]  = useState('cod')
  const {navigate} = useContext(shopContext)



  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={" INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
            <input className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Firstname:'/>
            <input className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name:'/>
        </div>
        <input className='border border-zinc-200 rounded py-1.5 px-3.5 w-full' type='email' placeholder='email Address:'/>
        <input className='border border-zinc-200 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street:'/>
        <div className='flex gap-3'>
            <input className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City:'/>
            <input className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State:'/>
        </div>
        <div className='flex gap-3'>
            <input className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='ZipCode:'/>
            <input className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country:'/>
        </div>
        <input className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Contact no:'/>
      </div>
      {/* ------------RIGHT SIDE----------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"}/>
          {/*---------------PAYMENT METHOD -------------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-emerald-300':''}`} ></p>
              <img src={assets.stripe} alt='stripe' className='h-8 w-18  mx-4'/>
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-emerald-300':''}`}></p>
              <img src={assets.razorpay} alt='stripe' className='h-8 w-18 mx-4'/>
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-emerald-300':''} `}></p>
              <p className='text-gray-600 text-sm font-medium'>CASH ON DELIVERY</p>
            </div>
            <div onClick={()=>setMethod('upi')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'upi' ? 'bg-emerald-300':''} `}></p>
              <p  className='text-gray-600 text-sm font-medium'>UPI</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default placeOrder
