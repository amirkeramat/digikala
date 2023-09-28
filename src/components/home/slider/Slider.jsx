import { Container, Title } from "./slider.style";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import ProductCart from "../../common/productCart/ProductCart";
const Slider = ({ data, title }) => {
  return (
    <Container>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper relative w-screen sm:w-auto pe-12 py-16"
      >
        <SwiperSlide className="w-[150px] h-[300px] ms-10">
          <div className="flex flex-col items-center justify-center h-full">
            <img className="w-[50%] h-[50%]" src="./Amazings.svg" alt="" />
            <img src="/box.webp" alt="" />
          </div>
        </SwiperSlide>
        {data.products.map((product) => (
          <SwiperSlide
            className=" flex justify-center w-[180px] h-[300px]"
            key={product.id}
          >
            <ProductCart
              key={product.id}
              id={product.id}
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
      <div className="absolute bottom-2 left-4 custom-swiper-button-next bg-white ring-2 ring-rose-400 rounded-full flex justify-center items-center w-[30px] h-[30px] z-50 cursor-pointer">
        <img className="w-[50%] h-[50%]" src="./next.svg" alt="" />
      </div>
      <div className="absolute bottom-2 left-24 custom-swiper-button-prev bg-white ring-2 ring-rose-400 rounded-full flex justify-center items-center w-[30px] h-[30px] z-50 cursor-pointer">
        <img className="w-[50%] h-[50%]" src="./prev.svg" alt="" />
      </div>
    </Container>
  );
};

export default Slider;
