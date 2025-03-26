import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import Title from '../components/title'
const orders = () => {

  const {products,currency}  = useContext(shopContext)
  
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={" ORDERS"}/>
      </div>
{/*-----------------------users orders ------------------------------- */}
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className='py-4 border-t border-b text-zinc-700 flex flex-col
             md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm4'>
                  <img src={item.image[0]} alt='' className='w-16 sm:w-20'/>
                  <div>
                    <p className='sm:text-base font-sans'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-zinc-700'>
                      <p  className='text-lg'>{currency}{item.price}</p>
                      <p>{item.quantity}</p>
                      <p>Size:{item.size}</p>
                    </div>
                    <p className='mt-2'>Date: <span className='text-zinc-600'>26th MARCH 2025</span></p>
                  </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-300'></p>
                    <p className='text-sm md:text-base'>Ready to Ship</p>
                </div>
                {/*-----------------------TRACE ORDER BUTTON------------------------- */}
                <button className='border px-4 py2 text-sm font-medium rounded-sm'>Trace Order</button>
              </div>
             </div>
          ))
        }
      </div>
    </div>
  )
}

export default orders
