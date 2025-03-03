import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import {Link} from 'react-router-dom'

const productItems = ({id,image,name,price}) => {
    const {currency} = useContext(shopContext)

  return (
        <Link className='text-gray-800 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="image"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                }}/>
                </div>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>

  )
}

export default productItems
