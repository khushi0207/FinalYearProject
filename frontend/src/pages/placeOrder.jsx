import React, { useContext, useState } from 'react'
import Title from '../components/title'
import CartTotal from "../components/cartTotal"
import { assets } from '../assets/assets'
import { shopContext } from '../context/shopContext'
import { data } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const placeOrder = () => {
  const [method,setMethod]  = useState('cod')
  const {navigate,backendURL, token,cartItem, setCartItem, getCartAmount, delivery_cost,products} = useContext(shopContext)

  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    contact:''
  }) 

  const handleOnChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data=>({...data,[name]:value}))

  }

  const handleOnSubmit = async(e) => {
    e.preventDefault()
    try {
      const orderItems = []
      for(const items in cartItem){
        for(const sizes in cartItem[items]){
          if(cartItem[items][sizes] > 0 ){
              const itemInfo = structuredClone(products.find(product => product._id === items))
              if(itemInfo){
                itemInfo.size = sizes
                itemInfo.quantity = cartItem[items][sizes]
                orderItems.push(itemInfo)
              }
          }
        }
      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount: getCartAmount() + delivery_cost
      }
    
      
      switch(method) {
        // api call for cod orders
        case 'cod':
          const response = await axios.post(backendURL+'/api/order/place',orderData,{headers:{token}})
          if(response.data.success){
            setCartItem({})
            navigate('/orders')
          }else{
            toast.error(response.data.message)
          }
          break;
        
        case 'stripe':
          const responseStripe = await axios.post(backendURL+'/api/order/stripe',orderData,{headers:{token}})
          if(responseStripe.data.success){
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          }else{
            toast.error(responseStripe.data.message)
            console.log(responseStripe.data.message);
            
          }


          break

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <form  onSubmit={handleOnSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={" INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
            <input required onChange={handleOnChange} name='firstName' value={formData.firstName} className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First name:'/>
            <input required onChange={handleOnChange} name='lastName' value={formData.lastName} className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name:'/>
        </div>
        <input required onChange={handleOnChange} name='email' value={formData.email} className='border border-zinc-200 rounded py-1.5 px-3.5 w-full'pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" type='email' placeholder='email Address:'/>
        <input required onChange={handleOnChange} name='street' value={formData.street} className='border border-zinc-200 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street:'/>
        <div className='flex gap-3'>
            <input required onChange={handleOnChange} name='city' value={formData.city} className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City:'/>
            <input required onChange={handleOnChange} name='state' value={formData.state} className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State:'/>
        </div>
        <div className='flex gap-3'>
            <input required onChange={handleOnChange} name='zipcode' value={formData.zipcode} maxLength="6" minLength="6" className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='ZipCode:'/>
            <input required onChange={handleOnChange} name='country' value={formData.country} className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country:'/>
        </div>
        <input required onChange={handleOnChange} name='contact' value={formData.contact} maxLength="10" minLength="10" className='border border-zinc-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Contact no:'/>
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
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-2 border p-1 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-emerald-300':''}`} ></p>
              <p className='text-blue-700 text-md font-bold'> Stripe</p>
              </div>
            {/*<div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-emerald-300':''}`}></p>
              <img src={assets.razorpay} alt='stripe' className='h-8 w-18 mx-4'/>
            </div>*/}
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-emerald-300':''} `}></p>
              <p className='text-gray-600 text-sm font-medium'>CASH ON DELIVERY</p>
            </div>
            {/*<div onClick={()=>setMethod('upi')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'upi' ? 'bg-emerald-300':''} `}></p>
              <p  className='text-gray-600 text-sm font-medium'>UPI</p>
            </div>*/}
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit'  className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default placeOrder
