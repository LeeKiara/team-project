import { useEffect, useState } from "react";
import { HomeContainer } from "./styles";
import { BookData, BookItem } from "@/modules/books/data";
import { Link } from "react-router-dom";
import { ArrowBack, ArrowForward, Transform } from "@mui/icons-material";
import axios from "axios";

interface MainBanner {
  id: number;
  img: string;
}

const Home = () => {
  const [todayLetter, setTodayLetter] = useState("");
  const [best, setBest] = useState<BookItem[]>([]);
  const [page, setPage] = useState(0);
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
    ]);
  }, []);

  return (
    <HomeContainer>
      <div>
        <article className={bannerBackground}>
          <figure onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {showButton ? (
              <button onClick={previousBanner}>
                <ArrowBack className="material-icons-outlined" />
              </button>
            ) : null}
            <div className="banner-container">
              {banner.map((img) => (
                <img key={img.id} src={image} alt="배너" />
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
          <article>
            <h3>오늘의 글귀</h3>
            <div>
              <img src="https://img.ypbooks.co.kr/upload/img/book/013/101257013.jpg" alt="해리포터" />
              <div>
                <h4>책 이름</h4>
                <h4>저자</h4>
                <h4>가격: 30,000원</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta perspiciatis, dolor pariatur nihil
                  suscipit ut atque modi provident excepturi tenetur. Vel labore officiis aliquid corporis voluptatum
                  laborum quibusdam magni dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
                  enim doloribus facilis id nulla ea ipsam veniam vel dolores laborum omnis fugiat placeat nemo magnam
                  repudiandae quos, sed, nesciunt mollitia?
                </p>
              </div>
            </div>
          </article>
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
