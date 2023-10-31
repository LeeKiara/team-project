import { useEffect, useRef, useState } from "react";
import { Settings } from "react-slick";
import Slider from "react-slick";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { BannerContainer } from "./styles";

interface BannerSize {
  width: string;
  height: string;
  images: string[]; // 이미지 URL 배열 추가
}

const SlideBanner = ({ width, height, images }: BannerSize) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    useTransform: false,
  };

  const [image, setImage] = useState(images[0]); // 첫 번째 이미지로 시작
  const sliderRef = useRef<Slider | null>(null);
  const [showButton, setShowButton] = useState(true);

  const handleMouseOver = () => {
    setShowButton(true);
  };
  const handleMouseOut = () => {
    setShowButton(false);
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <BannerContainer>
      <Slider widthSize={width} heightSize={height} ref={sliderRef} {...settings}>
        <figure onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {showButton ? (
            <button onClick={prevSlide}>
              <ArrowBack className="material-icons-outlined" />
            </button>
          ) : null}
          <div className="banner-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="메인 배너"
                onClick={() => setImage(img)} // 이미지 클릭 시 이미지 변경
              />
            ))}
          </div>
          {showButton ? (
            <button onClick={nextSlide}>
              <ArrowForward className="material-icons-outlined" />
            </button>
          ) : null}
        </figure>
      </Slider>
    </BannerContainer>
  );
};

export default SlideBanner;
