import React from "react";

export default function MobileApp() {
  return (
    <div className="container mx-auto flex items-center justify-between bg-primary-brand-color bg-mobile-app mt-7 rounded-lg text-white">
      <div className="flex flex-col gap-y-3 p-10">
        <h3 className="text-2xl font-bold tracking-tight  ">Getiri İndirin</h3>
        <p className="font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim</p>
        <nav className="mt-5 flex gap-x-2">
          <a href="www.getir.com" className="transition-all hover:scale-105 transform">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
          </a>
          <a href="www.getir.com" className="transition-all hover:scale-105 transform">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt=""  />
          </a> 
          <a href="www.getir.com" className="transition-all hover:scale-105 transform">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
          </a>
        </nav>
      </div>
      <picture className="pt-6">
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt=""/>
      </picture>
    </div>
  );
}
