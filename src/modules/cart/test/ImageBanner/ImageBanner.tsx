// ImageBanner.tsx

import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: 440px;
  height: 360px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
`;

const ImageList = styled.div`
  display: flex;
  transition: transform 0.5s;
`;

const ImageContainer = styled.div`
  flex: 0 0 440px;
  width: 440px;
  height: 360px;
  text-align: center;
  overflow: hidden; /* 이미지 오버플로우 숨기기 */

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Button = styled.button`
  cursor: pointer;
  margin-top: 20px;
`;

interface ImageBannerProps {
  images: string[];
}

const ImageBanner: React.FC<ImageBannerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <Container>
      <ImageList style={{ transform: `translateX(-${currentIndex * 440}px)` }}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <img src={image} alt={`Image ${index}`} />
          </ImageContainer>
        ))}
      </ImageList>
      <Button onClick={prevImage}>이전</Button>
      <Button onClick={nextImage}>다음</Button>
    </Container>
  );
};

export default ImageBanner;
