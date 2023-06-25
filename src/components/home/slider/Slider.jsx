import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import ProductCart from "../../productCart/ProductCart";
const Slider = ({data , title}) => {
  return (
    <div className='container mt-10 bg-red-500'>
      <h1 className='text-white'>{title}</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper w-screen md:w-full h-[350px] flex justify-center items-center'>
        {data.products.map((product) => (
          <SwiperSlide className='w-full flex justify-center' key={product.id}>
            <ProductCart
              key={product.id}
              image={product.image}
              title={product.title_fa}
              current_price={product.price.current_price}
              discount_percent={product.price.discount_percent}
              prev_price={product.price.prev_price}
              is_incredible={product.price.is_incredible}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
