import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #fff;
  text-align: center;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 150px;
  justify-content: center;
  overflow: hidden;
`;

const LazyImage = styled.img`
  position: absolute;
  inset: 0;
  height: 150px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5);
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  position: relative;
`;

const SectionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 150px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-family: "VNFont", sans-serif;
  font-size: 32px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SectionDescription = styled.p`
  margin-top: 16px;
  font: 400 20px/120% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Banner = ({ imgSrc, title, description }) => {
  return (
      <BannerWrapper>
        <ImageWrapper>
          <LazyImage alt="" src={imgSrc}/>
          <SectionContainer>
            <SectionContent>
              <SectionTitle>{title}</SectionTitle>
              <SectionDescription>{description}</SectionDescription>
            </SectionContent>
          </SectionContainer>
        </ImageWrapper>
      </BannerWrapper>
  );
};

export default Banner;