import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div<{ imageUrl: string }>`
  position: relative;
  overflow: hidden;
  display: flex;

  width: 300px; /* Box dimensions */
  height: 400px;

  border-radius: 4px; /* Styling */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.56s ease-in-out; /* Animation */
  /* background-color: rgba(0,0,0,.2); /* for debugging */
  &:hover {
    cursor: pointer;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  }
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${({ imageUrl }) =>
    imageUrl &&
    css`
      background-image: url(${imageUrl});
    `}

  }
`;
const CardTitle = styled.span`
  /* Just for styling */
  align-self: flex-end;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 2rem;
  line-height: 1;
  font-weight: 600;
`;
interface CategoryCardProps {
  imageUrl: string;
  text: string;
}
const CategoryCard = ({ imageUrl, text }: CategoryCardProps) => {
  return (
    <Card imageUrl={imageUrl}>
      <CardTitle className="card__title">{text}</CardTitle>
    </Card>
  );
};

export default CategoryCard;
