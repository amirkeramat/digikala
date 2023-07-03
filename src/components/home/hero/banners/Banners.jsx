import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { useState } from "react";
import { Container } from "./banners.style";
import ImageLoader from '../../../common/imageLoader/ImageLoader'
const Banners = ({ data }) => {
  const [showLoader,setShowLoader] = useState(true)
  const onImageLoad = ()=>{
    setShowLoader(false)
  }
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
        className='mySwiper w-screen sm:w-full h=[200px] md:h-[300px]'>
        {data.map((banner) => (
          <SwiperSlide className="relative" key={banner.id}>
            <img className="h-[200px] md:h-full w-full" src={banner.image} alt={banner.title} onLoad={onImageLoad} />
            {showLoader && <ImageLoader/>}
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Banners;
