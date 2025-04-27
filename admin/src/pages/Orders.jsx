import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { backendURL, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({token}) => {

  const [orders, setOrders] = useState([])
  const handleAllOrders =async () => {
    if(!token){
      return null;
    }
    try {
      const response  = await axios.post(backendURL+'/api/order/list',{},{headers:{token}})
      if(response.data.success){
        setOrders(response.data.orders.reverse())
      }else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  const handleStatus = async(e,orderId) => {
    console.log("status:",e.target.value);
    const status = e.target.value
    
    try {
      const response = await axios.post(backendURL+'/api/order/status',{orderId,status:status},{headers:{token}})
      console.log("Response received:", response.status, response.data);
      if(response.data.success){
        await handleAllOrders()
      }
      
    }catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message)
    }
    
  }

  useEffect(()=>{
    handleAllOrders()
  },[token])

  return (
    <div>
      <h3>  ORDER PAGE</h3>
      <div>
        {
          orders.map((order,index)=>(
              <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
                  <img src={assets.shipping2} alt='' className='w-12' />
                  <div>
                    <div>
                    {order.items.map((item,index)=>{
                        if(index === order.items.length -1){
                          return <p className='py-0.5' key={index}>{item.name} X {item.quantity} <span>{item.size}</span></p>
                        }
                        else{
                          return <p className='py-0.5' key={index}>{item.name} X {item.quantity} <span>{item.size}</span>, </p>
                        }
                      })}
                  </div>
                  <p className='mt-3 mb-2 font-medium' >{order.address.firstName + " " + order.address.lastName}</p>
                  <div>
                    <p>{order.address.street +","}</p>
                    <p>{order.address.city +"," + order.address.state + ","+order.address.country+ "," + order.address.zipcode}</p>
                  </div>
                  <p>{order.address.phone}</p>
              </div>
              <div>
              <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
              <p className='mt-3'>Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? 'Done':'Pending'}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>
                <select value={order.status} onChange={(e)=>handleStatus(e,order._id)} className='p-2 font-semibold'>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
                </select>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
