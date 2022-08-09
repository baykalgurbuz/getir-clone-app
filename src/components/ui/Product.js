import React from 'react'
import {FiPlus} from 'react-icons/fi';

export default function Product({product}) {
  return (
    <div className='bg-white flex gap-y-1 relative items-center flex-col text-center p-3'>
    <button className='absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md hover:bg-brand-color transition-colors hover:text-white hover:border-brand-color'><FiPlus size={16}/></button>
    <img src={product.image} alt={product.title}/>
    <div className='text-sm font-semibold text-brand-color'>{product.price}</div>
    <div className='text-sm font-semibold text-gray-900'>{product.title}</div>
    <div className='text-gray-500'>{product.alt}</div>
        
    </div>
  )
}
