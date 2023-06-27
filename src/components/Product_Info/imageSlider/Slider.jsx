import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import useProductState from "../../../hooks/state/useProductState";

import ImageLoader from "../../common/imageLoader/ImageLoader";

export default function Slider() {
  const [showLoader, setShowLoader] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { images } = useProductState();

  const onImageLoad = () => {
    setShowLoader(false);
  };

  return (
    <div className="container">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} onLoad={onImageLoad} />
            {showLoader && <ImageLoader />}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper hidden md:block"
      >
        {images.map((image,index) => (
          <SwiperSlide key={index}>
            <img src={image} onLoad={onImageLoad} />
            {showLoader && <ImageLoader />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
