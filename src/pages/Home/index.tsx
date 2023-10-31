import { useEffect, useState } from "react";
import { HomeContainer } from "./styles";
import { BookData, BookItem } from "@/modules/books/data";
import { Link } from "react-router-dom";
import { ArrowBack, ArrowForward, Transform } from "@mui/icons-material";
import axios from "axios";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { SidebarContainer } from "@/modules/books/BookSidebar/styles";
import SlideBanner from "@/components/SlideBanner";

interface MainBanner {
  id: number;
  img: string;
}
interface TodayBook {
  id: number;
  cover: string;
  title: string;
  author: string;
  priceSales: number;
  todayLetter: string;
  itmeId: number;
  createdDate: string;
}

const Home = () => {
  const settings: Settings = {
    slide: "img",
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

  const [todayLetter, setTodayLetter] = useState<TodayBook | null>(null);
  const [best, setBest] = useState<BookItem[]>([]);
  const [showButton, setShowButton] = useState(true);
  const [image, setImage] = useState("https://img.ypbooks.co.kr/upload/banner/mainb_230217_Independent.jpg");
  const [bannerBackground, setBannerBackground] = useState("");

  const [banner, setBanner] = useState([]);

  const handleMouseOver = () => {
    setShowButton(true);
  };
  const handleMouseOut = () => {
    setShowButton(false);
  };

  //다음 배너 화살표
  const nextBanner = () => {
    const currentIndex = banner.findIndex((item) => item.img === image);
    const nextIndex = (currentIndex + 1) % banner.length;
    setImage(banner[nextIndex].img);
  };
  //이전 배너 화살표
  const previousBanner = () => {
    const currentIndex = banner.findIndex((item) => item.img === image);
    const previousIndex = (currentIndex - 1 + banner.length) % banner.length;
    setImage(banner[previousIndex].img);
  };

  useEffect(() => {
    const currentIndex = banner.findIndex((item) => item.img === image);
    setBannerBackground(`banner-background${currentIndex}`);
  }, [image]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<TodayBook>(`http://localhost:8081/admin-service`);

        if (response.status === 200) {
          console.log("오늘의 책 가져오기 성공");
          console.log(response.data);
          setTodayLetter(response.data);
        }
      } catch (e: any) {
        console.log(e + "오늘의 책 가져오기 오류");
      }
    })();
  }, []);

  //베스트셀러 가져오기
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<BookData>(`http://localhost:8081/books/best?page=0&size=8`);
        if (response.status === 200) {
          setBest(response.data.content);
        }
      } catch (e: any) {
        console.log(e);
      }
    })();
    setBannerBackground("banner-background0");
    setBanner([
      { id: 1, img: "https://img.ypbooks.co.kr/upload/banner/mainb_230217_Independent.jpg" },
      { id: 2, img: "https://img.ypbooks.co.kr/upload/banner/mainb_231017_fallfoliage.jpg" },
      { id: 3, img: "https://img.ypbooks.co.kr/upload/banner/mainb_231024_kbest.jpg" },
      { id: 4, img: "https://img.ypbooks.co.kr/upload/banner/mainb_231001_publisher.jpg" },
      { id: 5, img: "https://img.ypbooks.co.kr/upload/banner/mainb_231001_bookmaster.jpg" },
    ]);
  }, []);

  return (
    <HomeContainer>
      <div>
        {/* <article className={bannerBackground}>
          <SlideBanner width="958px" height="400px" images={banner} />
        </article> */}
        <article className={bannerBackground}>
          <figure onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {showButton ? (
              <button onClick={previousBanner}>
                <ArrowBack className="material-icons-outlined" />
              </button>
            ) : null}
            <div className="banner-container">
              {banner.map((img) => (
                <img key={img.id} src={image} alt="메인 배너" />
              ))}
            </div>
            {showButton ? (
              <button onClick={nextBanner}>
                <ArrowForward className="material-icons-outlined" />
              </button>
            ) : null}
          </figure>
        </article>
        <section>
          {todayLetter && (
            <article>
              <h3>오늘의 책</h3>
              <div className="today-book">
                <img src={todayLetter.cover} alt={todayLetter.title} />
                <div>
                  <h4>{todayLetter.title}</h4>
                  <h4>{todayLetter.author}</h4>
                  <span>
                    <small>판매가: </small>
                    <h4>{todayLetter.priceSales.toLocaleString()}원</h4>
                  </span>
                  <p>{todayLetter.todayLetter}</p>
                </div>
              </div>
            </article>
          )}
          <article>
            <Link to="books/best">
              <h3>베스트셀러</h3>
            </Link>
            <ul>{best.length > 0 ? <>{renderBook(best.slice(0, 8))}</> : <p>책을 찾을 수 없습니다.</p>}</ul>
          </article>
        </section>
      </div>
    </HomeContainer>
  );
};

const renderBook = (books) => {
  return books.map((item) => (
    <li key={item.itemId}>
      <Link to={`/page?id=${item.id}`}>
        <img src={item.cover} alt={item.title} />
        <h5>{item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title}</h5>
        <h6>{item.author.length > 15 ? item.author.slice(0, 15) + "..." : item.author}</h6>
        <span>{item.publisher}</span>
        <span>판매가: {item.priceSales}원</span>
      </Link>
    </li>
  ));
};

export default Home;
