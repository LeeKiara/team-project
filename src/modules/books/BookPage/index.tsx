import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { PageContainer } from "./styles";
import { BookData, BookItem } from "../data";
import axios from "axios";
import {
  Favorite,
  FavoriteBorder,
  ThumbDown,
  ThumbDownOffAlt,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import BookComment from "../BookComment";
import Button from "@/components/Button";

interface BookComment {
  comment: string;
}

const BookPage = () => {
  const [detail, setDetail] = useState<BookItem | null>(null);
  const [searchParams] = useSearchParams();
  const [number, setNumber] = useState(0);
  const [storeHeartStates, setStoreHeartStates] = useState({});
  const [storeThumbStates, setStoreThumbState] = useState({});
  const [storeThumbDownStates, setStoreThumbDownState] = useState({});
  const [comment, setComment] = useState<BookComment | null>(null);

  const commentText = useRef() as MutableRefObject<HTMLTextAreaElement>;

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

  const handleSaveComment = () => {
    setComment({ comment: `${commentText}` });
  };

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
                  <dl>
                    <dt>isbn: </dt>
                    <p>{`${detail.isbn}`}</p>
                  </dl>
                  <dl>
                    <dt>정가: </dt>
                    <p>
                      <del>{`${detail.priceStandard}`} 원</del>
                    </p>
                  </dl>
                  <dl>
                    <dt>판매가: </dt>
                    <p>{`${detail.priceSales}`} 원</p>
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
                    <button className="btn">
                      {storeHeartStates[detail.itemId] ? (
                        <Favorite className="material-icons-outlined heart" />
                      ) : (
                        <FavoriteBorder className="material-icons-outlined" />
                      )}
                      선호작품
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      handleThumbUp(detail.itemId);
                    }}
                  >
                    <button className="btn">
                      {storeThumbStates[detail.itemId] ? (
                        <ThumbUp className="material-icons-outlined thumb" />
                      ) : (
                        <ThumbUpOffAlt className="material-icons-outlined" />
                      )}
                      추천
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      handleThumbDown(detail.itemId);
                    }}
                  >
                    <button className="btn">
                      {storeThumbDownStates[detail.itemId] ? (
                        <ThumbDown className="material-icons-outlined thumb" />
                      ) : (
                        <ThumbDownOffAlt className="material-icons-outlined" />
                      )}
                      싫어요
                    </button>
                  </li>
                  <Button
                    gubun="KOR"
                    itemId={detail.itemId}
                    title={detail.title}
                    cover={detail.cover}
                    priceStandard={detail.priceStandard.toString()}
                    priceSales={detail.priceSales.toString()}
                    quantity={commentText.current.value}
                  />
                </ul>
              </nav>
            </article>
          ) : (
            <p>책을 찾을 수 없습니다.</p>
          )}
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
            {detail ? (
              <section>
                {detail.description ? (
                  <>
                    <hr />
                    <div>
                      <h3>책소개</h3>
                      <p>{detail.description}</p>
                    </div>
                  </>
                ) : null}
                {detail.seriesInfo ? (
                  <>
                    <hr />
                    <div>
                      <h3>시리즈</h3>
                      <Link to={detail.seriesInfo.seriesLink}>
                        <p>{detail.seriesInfo.seriesName}</p>
                      </Link>
                    </div>
                    <hr />
                  </>
                ) : null}
              </section>
            ) : (
              <p>책 소개 글이 없습니다.</p>
            )}
            <form>
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
          </footer>
        </section>
      </PageContainer>
    </>
  );
};

export default BookPage;
