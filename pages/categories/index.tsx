import React from 'react';
import CategoryCard from '../../components/CategoryCard';
import Container from '../../components/Layout/container';

const Contacts = () => {
  return (
    <Container>
      <div className="categories-swiper">
        <CategoryCard imageUrl="../../images/friends.jpeg" text="С друзьями" />

        <CategoryCard imageUrl="../../images/sea.jpg" text="Море" />

        <CategoryCard imageUrl="../../images/gor.jpg" text="Горы" />

        <CategoryCard imageUrl="../../images/forest.jpg" text="Лес" />
        <CategoryCard imageUrl="../../images/pust.jpg" text="Пустыни" />
        <CategoryCard imageUrl="../../images/friends.jpeg" text="С друзьями" />

        <CategoryCard imageUrl="../../images/sea.jpg" text="Море" />

        <CategoryCard imageUrl="../../images/gor.jpg" text="Горы" />

        <CategoryCard imageUrl="../../images/forest.jpg" text="Лес" />
        <CategoryCard imageUrl="../../images/pust.jpg" text="Пустыни" />
      </div>
    </Container>
  );
};

export default Contacts;
