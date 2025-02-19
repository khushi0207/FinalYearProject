import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'

const latest = () => {

    const { products } =useContext(shopContext);
    console.log(products);
    
  return (
    <div>
    
    </div>
  )
}

export default latest
