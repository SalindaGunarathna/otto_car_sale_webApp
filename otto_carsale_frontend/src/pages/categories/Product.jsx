import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import xx from "../../assets/images/caregories/cab.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.css";

const Product = ({ title }) => {
  return (
    <section
      className="w-full mt-6 p-5 px-5 border rounded-xl drop-shadow-category-shadow"
    >
      <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">{title}</h1>
  <div className='j justify-center items-center flex px-5 object-center'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={xx} className='h-56' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={xx} className='h-56' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={xx} className='h-56' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={xx} className='h-56' alt='ss' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={xx} className='h-56' alt='ss' />
        </SwiperSlide>
      </Swiper>
  </div>
    </section>
  );
};

export default Product;
