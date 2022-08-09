import React from 'react'
import Menu from '../components/ui/Menu'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {BiGlobe} from 'react-icons/bi'

export default function Footer() {
  const menus =[
    {
      title:'Getiri Keşfedin',
      items:[
        {
          title:'Hakkımızda'
        },
        {
          title:'Kariyer'
        },
        {
          title:'İletişim'
        },
        {
          title:'COVID-19 Duyrusu'
        },
        {
          title:'Sosyal Sorumluluk Projeleri'
        },
      ]
  },
  {
    title:'Yardıma mı ihtiyacınız var?',
    items:[
      {
        title:'Sıkca Sorulan Sorular'
      },
      {
        title:'Kişisel verilerin korunması'
      },
      {
        title:'Gizlilik POlitikası'
      },
      {
        title:'KUllanım Koşulları '
      },
      {
        title:'Çerez Politikası'
      },
    ]
},
{
  title:'İş Ortağımız Olun',
  items:[
    {
      title:'Bayimiz Olun'
    },
    {
      title:'Deponuzu Kiralayın'
    },
    {
      title:'GetirYemek Restoranı Olun'
    },
    {
      title:'GetirÇarşı İşletmesi Olun'
    },
    {
      title:'Zincir Restoranlar'
    },
  ]
},
 
]
  return (
    <div className='bg-white mt-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-4 pt-10'>
          <section>
          
            <nav className='grid gap-y-4'>
            <h6 className='text-lg text-primary-brand-color'>Getiri İndiirn!</h6>
              <a href='ww.google.com'>
                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' alt=''/>
              </a>
              <a href='ww.google.com'>
                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' alt=''/>
              </a>
              <a href='ww.google.com'>
                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' alt=''/>
              </a>
            </nav>
          </section>
          {menus.map((menu,index)=>(
              <Menu key={index} {...menu}/>
          ))}
        </div>
        <div className='flex justify-between items-center border-t border-gray-100 mt-6 py-6'>
          <div className='text-xs text-gray-700 flex gap-x-8'>
          &copy;2022 Getir 
          <a href='www.google.com' className='text-primary-brand-color hover:underline'>Bilgi Toplumu Hizmetleri</a>

          </div>
          <nav className='flex gap-x-3'>
            <a href='www.google.com' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10  flex items-center justify-center'>
              <FaFacebook size={21}/>
            </a>
            <a href='www.google.com' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'>
              <FaTwitter size={21}/>
            </a>
            <a href='www.google.com' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-0 flex items-center justify-center'>
              <FaInstagram size={21}/>
            </a>
            <a href='bwww.google.comla' className='h-8 flex items-center px-2 text-sm border border-gray-100 gap-x-2 rounded text-gray-500 transition-colors  hover:bg-primary-brand-color hover:border-transparent hover:text-primary-brand-color hover:bg-opacity-0 '>
            <BiGlobe size={21}/>
            Türkçe (TR)
            </a>
         
          </nav>
        </div>
      </div>
    </div>
  )
}
