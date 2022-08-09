import React from 'react'
import { useState ,useEffect} from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category'

export default function Categories() {

  const [categories,setCategories]=useState([]);
  
  useEffect(() => {
      setTimeout(()=>setCategories(categoryData),1000);//apideki datayı set ediyoruz
  }, [])
  
  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto'>
        <h3 className='text-sm font-semibold  '>Kategoriler</h3>
        <div className='grid grid-cols-10'>
        {!categories.length && 'Dayanın Az Kaldı Geliyor ...'}
          {categories && categories.map((category,index)=><Category key={index} category={category}/>)}
        </div>
      </div>
    </div>
  )
}
