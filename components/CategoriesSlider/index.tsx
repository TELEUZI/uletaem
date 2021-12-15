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
        // loop
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
      >
        <SwiperSlide>
          <CategoryCard imageUrl="../../images/alone.jpg" text="В одиночку" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            imageUrl="../../images/friends.jpeg"
            text="С друзьями"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard imageUrl="../../images/sea.jpg" text="Море" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard imageUrl="../../images/gor.jpg" text="Горы" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard imageUrl="../../images/forest.jpg" text="Лес" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard imageUrl="../../images/pust.jpg" text="Пустыни" />
        </SwiperSlide>
      </Swiper>
      <div className="arrow arrow-right" />
    </div>
  );
};
export default CategoriesSwiper;
