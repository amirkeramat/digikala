import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

import { Container } from "./banners.style";

const Banners = ({ data }) => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper w-screen sm:w-full md:h-[300px]'>
        {data.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img className="" src={banner.image} alt={banner.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Banners;
