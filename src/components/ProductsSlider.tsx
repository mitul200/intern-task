import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { useState } from "react";

// Import your images
import image1 from "../assets/image.png";
import image2 from "../assets/image1.png";
import image3 from "../assets/image2.png";

import leftSlider from "../assets/leftSlider.png";
import rightSlider from "../assets/rightslider.png";

const images = [image1, image2, image3, image1, image2];

const ProductsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-8 px-4 " id="about">
      <div className="w-full max-w-[1640px] mx-auto flex justify-center items-center relative">
        <div className=" absolute top-0 z-10  left-32 transform -translate-x-1/2">
          <img
            src={leftSlider}
            className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[306px]"
            alt=""
          />
        </div>
        <div className=" absolute top-0 z-10  -right-36 transform -translate-x-1/2">
          <img
            src={rightSlider}
            className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[306px]"
            alt=""
          />
        </div>
        <Swiper
          spaceBetween={16}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={Math.floor(images.length / 2)} // globally ON
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              centeredSlides: true, // ✅ ensure centered on small devices
            },
            640: {
              slidesPerView: 1.5,
              centeredSlides: true, // ✅ still centered
            },
            768: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transition-all duration-500 overflow-hidden mx-auto
          ${
            index === activeIndex
              ? "w-[85vw] scale-105 sm:w-[340px] md:w-[400px] lg:w-[457px] h-[240px] sm:h-[270px] md:h-[300px] lg:h-[330px]"
              : "w-[75vw] scale-95 sm:w-[320px] md:w-[370px] lg:w-[457px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[306px]"
          }`}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSlider;
