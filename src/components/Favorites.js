import React from 'react'
import { useState,useEffect } from 'react'
import Products from '../api/products.json'
import Product from './ui/Product';

export default function Favorites() {

  const [products,setProducts]=useState([]);
  useEffect(()=>{
      setProducts(Products);
  },[])

  return (
    <div className='container mx-auto'>
     <h3 className="text-sm font-semibold mb-6 ml-2 mt-5">Favoriler</h3>
      <div className='grid grid-cols-8 gap-0.1 bg-white rounded-lg overflow-hidden'>
            {products.length && products.map((product,index)=><Product key={index} product={product}/>)}
      </div>
    </div>
  )
}
