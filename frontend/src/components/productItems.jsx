import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import {Link} from 'react-router-dom'

const productItems = ({id,image,name,price,rating,reviews}) => {
    const {currency} = useContext(shopContext)

  return (
        <Link className='text-gray-800 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out border-violet-800 border-2 rounded-md w-80' src={image[0]} alt="image"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                }}/>
                </div>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <div className='bg-violet-300 rounded-md'>
                <p className='text-sm text-center font-medium '>⭐ {rating} | {reviews}</p>
                </div>
                
                <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>

  )
}

export default productItems
3