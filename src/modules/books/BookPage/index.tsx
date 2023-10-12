import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { PageContainer } from "./styles";
import { BookData, BookItem, useBooksItem } from "../data";
import axios from "axios";
import {
  Favorite,
  FavoriteBorder,
  ThumbDown,
  ThumbDownOffAlt,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";

const BookPage = () => {
  const [detail, setDetail] = useState<BookItem | null>(null);
  const [searchParams] = useSearchParams();
  const [number, setNumber] = useState(0);
  const [storeHeartStates, setStoreHeartStates] = useState({});
  const [storeThumbStates, setStoreThumbState] = useState({});
  const [storeThumbDownStates, setStoreThumbDownState] = useState({});

  const keyword = searchParams.get("keyword");

  const handlePlus = () => {
    setNumber(number + 1);
  };

  const handleMinus = () => {
    setNumber(number - 1);
  };

  const handleBookSave = (itemId: number) => {
    setStoreHeartStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };
  const handleThumbUp = (itemId: number) => {
    setStoreThumbState((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };
  const handleThumbDown = (itemId: number) => {
    setStoreThumbDownState((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  console.log("tt");
  const handleSandCart = () => {};

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<BookData>(
          `http://localhost:9090/books`
        );
        if (response.status === 200) {
          const bookItem: BookItem | undefined = response.data[0].item.find(
            (book) => book.itemId === Number(keyword)
          );
          setDetail(bookItem);
        }
      } catch (e: any) {
        console.log(e);
      }
    })();
  }, [keyword]);

  return (
    <>
      <PageContainer>
        <section>
          <h6>상세페이지</h6>
          {detail ? (
            <article>
              <figure>
                <img src={`${detail.cover}`} alt={`${detail.title}`} />
              </figure>
              <aside>
                <h2>{`${detail.title}`}</h2>
                <hr />
                <div>
                  <dl>
                    <dt>출판사: </dt>
                    <p>{`${detail.publisher}`}</p>
                  </dl>
                  <dl>
                    <dt>발행일: </dt>
                    <p>{`${detail.pubDate}`}</p>
                  </dl>
                  <dl>
                    <dt>지은이: </dt>
                    <p>{`${detail.author}`}</p>
                  </dl>
                </div>
                <div id="amount">
                  수량:
                  <input
                    type="number"
                    placeholder="0"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value, 10))}
                  />
                  <div>
                    <img
                      onClick={handlePlus}
                      src="https://image.aladin.co.kr/img/shop/2018/icon_Aup.png"
                      alt="위 화살표"
                    />
                    <img
                      onClick={handleMinus}
                      src="https://image.aladin.co.kr/img/shop/2018/icon_Adown.png"
                      alt="아래화살표"
                    />
                  </div>
                </div>
              </aside>
              <nav>
                <ul>
                  <li
                    onClick={() => {
                      handleBookSave(detail.itemId);
                    }}
                  >
                    <span>선호작품</span>
                    {storeHeartStates[detail.itemId] ? (
                      <Favorite className="material-icons-outlined heart" />
                    ) : (
                      <FavoriteBorder className="material-icons-outlined" />
                    )}
                  </li>
                  <li
                    onClick={() => {
                      handleThumbUp(detail.itemId);
                    }}
                  >
                    <span>추천</span>
                    {storeThumbStates[detail.itemId] ? (
                      <ThumbUp className="material-icons-outlined thumb" />
                    ) : (
                      <ThumbUpOffAlt className="material-icons-outlined" />
                    )}
                  </li>
                  <li
                    onClick={() => {
                      handleThumbDown(detail.itemId);
                    }}
                  >
                    <span>싫어요</span>
                    {storeThumbDownStates[detail.itemId] ? (
                      <ThumbDown className="material-icons-outlined thumb" />
                    ) : (
                      <ThumbDownOffAlt className="material-icons-outlined" />
                    )}
                  </li>
                  <li>
                    <button>장바구니 담기</button>
                  </li>
                </ul>
              </nav>
            </article>
          ) : (
            <p>책을 찾을 수 없습니다.</p>
          )}
          <footer>
            <form>
              <label>
                <input type="text" placeholder="댓글을 입력해주세요." />
              </label>
              <button>등록</button>
            </form>
          </footer>
        </section>
      </PageContainer>
    </>
  );
};

export default BookPage;
