import {Container,Title} from './slider.style'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import ProductCart from "../../common/productCart/ProductCart";
const Slider = ({ data, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
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
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1324: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper w-screen sm:w-auto  h-[400px] '>
        {data.products.map((product) => (
          <SwiperSlide className=' flex justify-center' key={product.id}>
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
    </Container>
  );
};

export default Slider;
