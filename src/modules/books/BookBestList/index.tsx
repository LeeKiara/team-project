import { useEffect, useState } from "react";
import { BookBestContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";

const BookBestList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();

  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    setSearchQuery(queryKeyword);
  }, [params]);

  return (
    <>
      <BookBestContainer>
        <section>
          <div></div>
          <h2>베스트 셀러</h2>
          <p>{searchQuery}</p>
          <article>
            <div>
              <figure>
                <Link to="/page">
                  <img
                    src="https://www.cyber.co.kr/book/uploads/cache/2022-godo-goods/thumb-155247724937l0_300x0.jpg"
                    alt="책이미지"
                  />
                </Link>
              </figure>
              <div>
                <h3>
                  <Link to="/page">책 제목</Link>
                </h3>
                <dl>
                  <dt>지은이:</dt>
                  <p>홍길동</p>
                  <dt>출판사:</dt>
                  <p>성안당</p>
                </dl>
                <h4>책 소개</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum animi cum nisi illo vitae tenetur ut? Veniam,
                  repudiandae culpa libero ea, commodi natus totam, ducimus
                  voluptas earum debitis dicta vel.
                </p>
              </div>
            </div>
            <ul>
              <del>
                <li>정가</li>
              </del>
              <li>판매가</li>
              <li>장바구니 담기</li>
            </ul>
          </article>
          <article>
            <div>
              <figure>
                <Link to="/page">
                  <img
                    src="https://www.cyber.co.kr/book/uploads/cache/2022-godo-goods/thumb-155247724937l0_300x0.jpg"
                    alt="책이미지"
                  />
                </Link>
              </figure>
              <div>
                <h3>책 제목</h3>
                <p>책 저자</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum animi cum nisi illo vitae tenetur ut? Veniam,
                  repudiandae culpa libero ea, commodi natus totam, ducimus
                  voluptas earum debitis dicta vel.
                </p>
              </div>
            </div>
            <ul>
              <li>정가</li>
              <li>판매가</li>
              <li>장바구니 담기</li>
            </ul>
          </article>
          <nav style={{ display: "flex", justifyContent: "center" }}>
            <ol style={{ display: "flex" }}>
              <li className="numberbox">
                <Link to="/">1</Link>
              </li>
              <li className="numberbox">
                <Link to="/">2</Link>
              </li>
              <li className="numberbox">
                <Link to="/">3</Link>
              </li>
              <li className="numberbox">
                <Link to="/">4</Link>
              </li>
              <li className="numberbox">
                <Link to="/">5</Link>
              </li>
              <li className="numberbox">{`>`}</li>
            </ol>
          </nav>
        </section>
      </BookBestContainer>
    </>
  );
};

export default BookBestList;
