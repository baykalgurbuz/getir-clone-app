import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banners from "../api/banners.json";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={20} />
    </button>
  );
}
function PrevBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={20} />
    </button>
  );
}
export default function Campaings() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arroes: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold mb-6 ml-2">Kampanyalar</h3>
      <Slider {...settings} className="-mx-2">
        {banners.length &&
          banners.map((banner, index) => (
            <div key={index}>
              <picture className="block px-2">
                <img src={banner.image} className="rounded-lg" alt="" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
