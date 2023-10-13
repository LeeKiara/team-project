import { useState } from "react";
import { HomeContainer } from "./styles";
import { useBooksItem } from "@/modules/books/data";
import { Link } from "react-router-dom";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Home = () => {
  const [todayLetter, setTodayLetter] = useState("");
  const [best, setBest] = useState("");
  const [page, setPage] = useState(0);
  const { booksItem: books, isBookItemValidating } = useBooksItem(page);
  const [showButton, setShowButton] = useState(true);

  const handleMouseOver = () => {
    setShowButton(true);
  };
  const handleMouseOut = () => {
    setShowButton(false);
  };

  return (
    <HomeContainer>
      <div>
        <article>
          <figure onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {showButton ? (
              <button>
                <ArrowBack className="material-icons-outlined" />
              </button>
            ) : null}
            <img
              src="https://img.ypbooks.co.kr/upload/banner/mainb_230217_Independent.jpg"
              alt="배너"
            />
            {showButton ? (
              <button>
                <ArrowForward className="material-icons-outlined" />
              </button>
            ) : null}
          </figure>
        </article>
        <section>
          <article>
            <h3>오늘의 글귀</h3>
            <div>
              <img
                src="https://img.ypbooks.co.kr/upload/img/book/013/101257013.jpg"
                alt="해리포터"
              />
              <div>
                <h4>책 이름</h4>
                <h4>저자</h4>
                <h4>가격: 30,000원</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta perspiciatis, dolor pariatur nihil suscipit ut atque
                  modi provident excepturi tenetur. Vel labore officiis aliquid
                  corporis voluptatum laborum quibusdam magni dolores. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
                  enim doloribus facilis id nulla ea ipsam veniam vel dolores
                  laborum omnis fugiat placeat nemo magnam repudiandae quos,
                  sed, nesciunt mollitia?
                </p>
              </div>
            </div>
          </article>
          <article>
            <Link to="books/best">
              <h3>베스트셀러</h3>
            </Link>
            <ul>
              {books.length > 0 ? (
                <>{renderBook(books.slice(0, 8))}</>
              ) : (
                <p>책을 찾을 수 없습니다.</p>
              )}
            </ul>
          </article>
        </section>
      </div>
    </HomeContainer>
  );
};

const renderBook = (books) => {
  return books.map((item) => (
    <li key={item.itemId}>
      <Link to={`/page?keyword=${item.itemId}`}>
        <img src={item.cover} alt={item.title} />
      </Link>
      <h5>
        {item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title}
      </h5>
      <h6>
        {item.author.length > 15
          ? item.author.slice(0, 15) + "..."
          : item.author}
      </h6>
      <span>판매가: {item.priceSales}원</span>
    </li>
  ));
};

export default Home;
