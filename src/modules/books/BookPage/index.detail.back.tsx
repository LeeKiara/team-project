import { MutableRefObject, useRef, useState } from "react";
import BookComment from "../BookComment";
import { PageContainer } from "./styles";
import {
  Favorite,
  FavoriteBorder,
  ThumbDown,
  ThumbDownOffAlt,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import Button from "@/components/Button";
import { Link } from "react-router-dom";

const BookPage = () => {
  const [number, setNumber] = useState(0);
  const [storeHeartStates, setStoreHeartStates] = useState({});
  const [storeThumbStates, setStoreThumbState] = useState({});
  const [storeThumbDownStates, setStoreThumbDownState] = useState({});
  // const [comment, setComment] = useState<BookComment| null>(null);

  const commentText = useRef() as MutableRefObject<HTMLTextAreaElement>;

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

  // const handleSaveComment = () => {
  //   setComment({ comment: `${commentText}` });
  // };

  return (
    <>
      <PageContainer>
        <section>
          {/* <article> */}
          {/* <figure>
              <img src={`${detailBook.cover}`} alt={title} />
            </figure>
            <aside>
              <h2>{title}</h2>
              <hr />
              <div>
                <dl>
                  <dt>출판사: </dt>
                  <p>{publisher}</p>
                </dl>
                <dl>
                  <dt>발행일: </dt>
                  <p>{pubDate}</p>
                </dl>
                <dl>
                  <dt>지은이: </dt>
                  <p>{author}</p>
                </dl>
                <dl>
                  <dt>isbn: </dt>
                  <p>{isbn}</p>
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
                    handleBookSave(itemId);
                  }}
                >
                  <button className="btn">
                    {storeHeartStates[itemId] ? (
                      <Favorite className="material-icons-outlined heart" />
                    ) : (
                      <FavoriteBorder className="material-icons-outlined" />
                    )}
                    선호작품
                  </button>
                </li>
                <li
                  onClick={() => {
                    handleThumbUp(itemId);
                  }}
                >
                  <button className="btn">
                    {storeThumbStates[itemId] ? (
                      <ThumbUp className="material-icons-outlined thumb" />
                    ) : (
                      <ThumbUpOffAlt className="material-icons-outlined" />
                    )}
                    추천
                  </button>
                </li>
                <li
                  onClick={() => {
                    handleThumbDown(itemId);
                  }}
                >
                  <button className="btn">
                    {storeThumbDownStates[itemId] ? (
                      <ThumbDown className="material-icons-outlined thumb" />
                    ) : (
                      <ThumbDownOffAlt className="material-icons-outlined" />
                    )}
                    싫어요
                  </button>
                </li>
                <Button
                  gubun="KOR"
                  itemId={itemId}
                  title={title}
                  cover={cover}
                  priceStandard={priceStandard.toString()}
                  priceSales={priceSales.toString()}
                  quantity={commentText.current.value}
                />
              </ul>
            </nav>
          </article>
          <footer>
            <h2>도서정보</h2>
            <hr />
            <figure style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ margin: "auto" }}
                src="https://contents.kyobobook.co.kr/sih/fit-in/814x0/dtl/illustrate/151/i9791159242151.jpg"
                alt="이벤트사진"
              />
            </figure>
            <section>
              <hr />
              <div>
                <h3>책소개</h3>
                <p>{description}</p>
              </div>
              <hr />
              <div>
                <h3>시리즈</h3>
                <Link to={seriesInfo.seriesLink}>
                  <p>{seriesInfo.seriesName}</p>
                </Link>
              </div>
              <hr />
            </section> */}
          {/* <form>
              <h4>
                독자서평쓰기
                <sub>로그인을 하시면 댓글을 작성할 수 있습니다.</sub>
              </h4>
              <label>
                <textarea
                  placeholder="댓글을 입력해주세요"
                  cols={100}
                  rows={10}
                  ref={commentText}
                ></textarea>
                <button onClick={handleSaveComment}>등록</button>
              </label>
              <BookComment />
            </form>
          </footer> */}
        </section>
      </PageContainer>
    </>
  );
};

export default BookPage;
