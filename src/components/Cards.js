import React from 'react'
import { useState,useEffect } from 'react'
import cardsData from '../api/cards.json'

export default function Cards() {

  const [cards,setCards]=useState([]);
  useEffect(()=>{
      setCards(cardsData)
  },[])
  
  return (
    <div className=' grid grid-cols-3 gap-x-4 container mx-auto'>
      {cards.length && cards.map(card=>(
        <div className='bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center'>
        <img src={card.image} className="mb-6" alt=""/>
        <h6 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h6>
        <p className='mt-2 text-sm text-gray-700'>{card.description}</p>
        </div>
      ))}
  
    </div>
  )
}
