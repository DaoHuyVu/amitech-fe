import React from 'react';
import styled from 'styled-components';

const NewsGalleryItem = ({image, category, title, time}) => (
      <NewsGalleryItemWrapper>
        <NewsGalleryItemImage src={image} alt={title}/>
        <NewsGalleryItemCategory>{category}</NewsGalleryItemCategory>
        <NewsGalleryItemTitle>{title}</NewsGalleryItemTitle>
        <NewsGalleryItemTime>{time}</NewsGalleryItemTime>
      </NewsGalleryItemWrapper>

);

const NewsGalleryItemWrapper = styled.div`
  // Style cho wrapper của NewsGalleryItem
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 50px;
  padding: 16px;
  border-radius: 5px;
  box-sizing: border-box;
  @media (max-width: 991px) {
    margin-right: 0;
  }
`;

const NewsGalleryItemImage = styled.img`
  // Style cho hình ảnh
  aspect-ratio: 1.79;
  object-fit: cover;
  border-radius: 0.3125em;
  width: 100%;
  height: 100%;
  max-height: 200px;
  max-width: 400px;
`;

const NewsGalleryItemCategory = styled.p`
  // Style cho category
  color: rgba(77, 77, 77, 0.7);
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  font-size: 12px;
`;

const NewsGalleryItemTitle = styled.h2`
  // Style cho title
  color: #4D4D4D;
  font-size: 1.25em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NewsGalleryItemTime = styled.time`
  // Style cho thời gian
  color: rgba(77, 77, 77, 0.70);
  font-size: 0.7em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default NewsGalleryItem;