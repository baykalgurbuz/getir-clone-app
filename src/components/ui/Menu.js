import React from 'react'

export default function Menu({title,items}) {
  return (
    <div>
        <nav className='grid gap-y-4'>
            <h6 className='text-lg text-primary-brand-color'>{title}</h6>
            <nav>
                <ul className='grid gap-y-2'>
                    {items.map((item,key)=>(
                        <li key={key}>
                            <a href='www.google.com' className='text-sm hover:text-brand-color'>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </nav>
    </div>
  )
}
