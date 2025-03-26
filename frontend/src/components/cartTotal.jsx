import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import Title from "../components/title"
const cartTotal = () => {

    const {currency,delivery_cost,getCartAmount} = useContext(shopContext);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"YOUR"} text2={"TOTAL"}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency} {delivery_cost}</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_cost}</b>
        </div>
      </div>
    </div>
  )
}

export default cartTotal
