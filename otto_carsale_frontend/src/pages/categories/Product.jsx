import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../../assets/images/brands/1.png";
import ten from "../../assets/images/brands/10.png";
import two from "../../assets/images/brands/2.png";
import three from "../../assets/images/brands/3.png";
import four from "../../assets/images/brands/4.png";
import five from "../../assets/images/brands/5.png";
import six from "../../assets/images/brands/6.png";
import seven from "../../assets/images/brands/7.png";
import eight from "../../assets/images/brands/8.png";
import nine from "../../assets/images/brands/9.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.css";

const Product = ({ title }) => {
  return (
    <div style={{
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 5px"
    }} className="w-72 md:w-96 mt-6 p-5 px-5 border rounded-xl">
      <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">{title}</h1>
      <div className="justify-center items-center flex px-5 object-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className=" shadow-none">
            <img src={one} className="h-40 px-16 shadow-none" alt="ss" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={two} className="h-40 px-16" alt="ss" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={three} className='h-40 ' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} className='h-40 ' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} className='h-40 ' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} className='h-40 ' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} className='h-40 px-16' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eight} className='h-40 px-16' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nine} className='h-40 px-16' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ten} className='h-40 shadow-none' alt='ss' />
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
