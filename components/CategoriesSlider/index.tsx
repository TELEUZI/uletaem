/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CategoryCard from '../CategoryCard';

const CategoriesSwiper = () => {
  return (
    <div className="rapper">
      <div className="arrow arrow-left" />
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        }}
        loop
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <CategoryCard imageUrl="../../images/alone.jpg" text="В одиночку" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            imageUrl="../../images/solo-trip.jfif"
            text="В одиночку"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            imageUrl="../../images/solo-trip.jfif"
            text="В одиночку"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            imageUrl="../../images/solo-trip.jfif"
            text="В одиночку"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            imageUrl="../../images/solo-trip.jfif"
            text="В одиночку"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            imageUrl="../../images/solo-trip.jfif"
            text="В одиночку"
          />
        </SwiperSlide>
      </Swiper>
      <div className="arrow arrow-right" />
    </div>
  );
};
export default CategoriesSwiper;
