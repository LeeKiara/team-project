import { useEffect, useState } from "react";
import { HomeContainer } from "./styles";
import { AlamData, BookData, BookItem, isLocalhost } from "@/modules/books/data";
import { Link } from "react-router-dom";
import axios from "axios";
import { Settings } from "react-slick";
import SlideBanner from "@/components/SlideBanner";
import { getCookie } from "@/utils/cookie";

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
  itemId: number;
  createdDate: string;
}

const Home = () => {
  const token = getCookie("token");
  const [todayLetter, setTodayLetter] = useState<TodayBook | null>(null);
  const [best, setBest] = useState<BookItem[]>([]);
  const serverAddress = isLocalhost();

  const [banner, setBanner] = useState([]);

  // //다음 배너 화살표
  // const nextBanner = () => {
  //   const currentIndex = banner.findIndex((item) => item.img === image);
  //   const nextIndex = (currentIndex + 1) % banner.length;
  //   setImage(banner[nextIndex].img);
  // };
  // //이전 배너 화살표
  // const previousBanner = () => {
  //   const currentIndex = banner.findIndex((item) => item.img === image);
  //   const previousIndex = (currentIndex - 1 + banner.length) % banner.length;
  //   setImage(banner[previousIndex].img);
  // };

  useEffect(() => {
    //오늘의 책
    const todayBooks = async () => {
      try {
        const response = await axios.get<TodayBook>(`${serverAddress}/admin-service`);

        if (response.status === 200) {
          console.log("오늘의 책 가져오기 성공");
          setTodayLetter(response.data);
        }
      } catch (e: any) {
        if (e.message.includes("404")) {
          console.log(e + "오늘의 책 가져오기 오류");
        }
      }
    };
    //베스트셀러 가져오기
    const bestBooks = async () => {
      try {
        const response = await axios.get<BookItem[]>(`${serverAddress}/redis/best`);
        if (response.status === 200) {
          setBest(response.data);
        }
      } catch (e: any) {
        console.log(e);
      }
    };
    //알림설정 디스플레이 조회
    const booksBells = async () => {
      if (token) {
        try {
          const response = await axios.get<AlamData[]>(`${serverAddress}/books/alam`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.status === 200) {
            console.log("알림 설정값 조회 성공");
            response.data.forEach((data) => {
              if (data.alam) {
                const title = data.bookTitle.substring(0, 8);
                alert(`${title}도서가 입고되었습니다.`);
              }
            });
          }
        } catch (e: any) {
          if (e.message.includes("404")) {
            console.log("알림설정 데이터가 없습니다.");
          }
        }
      }
    };

    todayBooks();
    bestBooks();
    booksBells();
  }, []);

  useEffect(() => {
    setBanner([
      {
        id: 1,
        img: "https://img.ypbooks.co.kr/upload/banner/mainb_231024_kbest.jpg",
        link: "https://www.ypbooks.co.kr/event_view.yp?HTMLPage=https://pub.ypbooks.co.kr/ypbooks/event/maintema/mainthema.jsp?evt_no=613",
      },
      {
        id: 2,
        img: "https://img.ypbooks.co.kr/upload/banner/mainb_231001_publisher.jpg",
        link: "https://www.ypbooks.co.kr/kor_index.yp",
      },
      {
        id: 3,
        img: "https://img.ypbooks.co.kr/upload/banner/mainb_231001_bookmaster.jpg",
        link: "https://www.ypbooks.co.kr/kor_index.yp",
      },
      {
        id: 4,
        img: "https://img.ypbooks.co.kr/upload/banner/mainb_230217_Independent.jpg",
        link: "https://www.ypbooks.co.kr/event_view.yp?HTMLPage=https://pub.ypbooks.co.kr/ypbooks/event/maintema/mainthema.jsp?evt_no=973",
      },
      {
        id: 5,
        img: "https://img.ypbooks.co.kr/upload/banner/mainb_231017_fallfoliage.jpg",
        link: "https://www.ypbooks.co.kr/event_view.yp?HTMLPage=https://pub.ypbooks.co.kr/ypbooks/event/maintema/mainthema.jsp?evt_no=1154",
      },
    ]);
    // setBanner([
    //   "https://img.ypbooks.co.kr/upload/banner/mainb_231024_kbest.jpg",
    //   "https://img.ypbooks.co.kr/upload/banner/mainb_231001_publisher.jpg",
    //   "https://img.ypbooks.co.kr/upload/banner/mainb_231001_bookmaster.jpg",
    //   "https://img.ypbooks.co.kr/upload/banner/mainb_230217_Independent.jpg",
    //   "https://img.ypbooks.co.kr/upload/banner/mainb_231017_fallfoliage.jpg",
    // ]);
  }, []);

  return (
    <HomeContainer>
      <div>
        <SlideBanner images={banner} />
        {/* <article className={bannerBackground}>
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
        </article> */}
        <section>
          {todayLetter && (
            <article>
              <h3>오늘의 책</h3>
              <div className="today-book">
                <Link to={`/page?itemId=${todayLetter.itemId}`}>
                  <img src={todayLetter.cover} alt={todayLetter.title} />
                </Link>
                <div>
                  <Link to={`/page?itemId=${todayLetter.itemId}`}>
                    <h4>{todayLetter.title}</h4>
                  </Link>
                  <h4>{todayLetter.author}</h4>
                  <span>
                    <small>판매가: </small>
                    <h4>{todayLetter.priceSales.toLocaleString()}원</h4>
                  </span>
                  <small>[ MD 추천 멘트 ]</small>
                  <p>{todayLetter.todayLetter}</p>
                </div>
              </div>
            </article>
          )}
          <article className="best-list">
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
        <span>판매가: {`${item.priceSales.toLocaleString()}`}원</span>
      </Link>
    </li>
  ));
};

export default Home;
