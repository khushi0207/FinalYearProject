import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import Title from '../components/title'
import axios from 'axios'

const orders = () => {

  const {backendURL,token,currency}  = useContext(shopContext)
  const [ordersData, setOrdersData] = useState([])


  const handleOrderData = async () => {
    try {
      const response = await axios.post(backendURL+'/api/order/userorders',{},{headers:{token}})

      if(!token){
        console.log("token is not available")
        return null
      }
      if(response.data.success){
        let allordersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
              item['status'] = order.status
              item['payment'] = order.payment
              item['paymentMethod'] = order.paymentMethod
              item['date'] = order.date
              allordersItem.push(item)
          })
        })
        setOrdersData(allordersItem.reverse());
      }else{
        console.log(response.data.error)
      }
      
    } catch (error) {
      console.log(error); 
    }
  }

  useEffect(() => {
    handleOrderData();
  }, [token]);
  
  
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={" ORDERS"}/>
      </div>
{/*-----------------------users orders ------------------------------- */}
      <div>
        {
          ordersData.map((item,index)=>(
            <div key={index} className='py-4 border-t border-b text-zinc-700 flex flex-col
             md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm4'>
                  <img src={item.image[0]} alt='' className='w-16 sm:w-20'/>
                  <div>
                    <p className='sm:text-base font-sans'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-zinc-700'>
                      <p  className='text-lg'>{currency}{item.price}</p>
                      <p>Qty : {item.quantity}</p>
                      <p>Size : {item.size}</p>
                    </div>
                    <p className='mt-2'>Date : <span className='text-zinc-600'>{new Date(item.date).toDateString()}</span></p>
                    <p className='mt-2'>Payment Method : <span className='text-zinc-600'>{item.paymentMethod}</span></p>

                  </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-300'></p>
                    <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                {/*-----------------------TRACE ORDER BUTTON------------------------- */}
                <button onClick={handleOrderData} className='border px-4 py2 text-sm font-medium rounded-sm'>Trace Order</button>
              </div>
             </div>
          ))
        }
      </div>
    </div>
  )
}

export default orders
