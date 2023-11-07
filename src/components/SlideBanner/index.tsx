import { useEffect, useRef, useState } from "react";
import { Settings } from "react-slick";
import Slider from "react-slick";
import { ArrowBack, ArrowForward, DomainVerification } from "@mui/icons-material";
import { BannerContainer } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 환경설정
// npm install --save @types/react-slick
// npm install slick-carousel
// npm install style-loader css-loader --save-dev

const SlideBanner = ({ images }) => {
  const settings: Settings = {
    dots: true, // 캐러셀의 점을 보여줄 것 인지
    infinite: true, // 마지막장 다음에 첫장이 나오게 할 지
    speed: 0, // 넘어가는 속도
    arrows: false,
    // arrows: true,
    autoplay: true, // 자동으로 재생할지
    autoplaySpeed: 5000, //전체적으로 넘어가는 속도
    slidesToShow: 1, // 한 화면에 몇개의 사진을 동시에 보여줄지
    slidesToScroll: 1,
    pauseOnHover: true,
    useTransform: false,
    vertical: false,
  };

  const sliderRef = useRef<Slider | null>(null);
  const [showButton, setShowButton] = useState(true);
  const [bannerBackground, setBannerBackground] = useState("banner-background0");

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

  const handleChange = (currentSlide, nextSlide) => {
    const currentIndex = nextSlide % images.length; // 현재 슬라이드 번호를 이미지 배열 길이에 맞게 조정
    setBannerBackground(`banner-background${currentIndex}`);
  };

  return (
    <BannerContainer>
      <article className={bannerBackground} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {showButton ? (
          <button onClick={prevSlide}>
            <ArrowBack className="material-icons-outlined" />
          </button>
        ) : null}
        <div className="banner-center">
          <Slider ref={sliderRef} {...settings} beforeChange={handleChange}>
            {images.map((img) => (
              <div key={img.id}>
                <img key={img.id} src={img.img} alt="메인베너" />
              </div>
            ))}
          </Slider>
        </div>
        {showButton ? (
          <button onClick={nextSlide}>
            <ArrowForward className="material-icons-outlined" />
          </button>
        ) : null}
      </article>
    </BannerContainer>
  );
};

export default SlideBanner;
