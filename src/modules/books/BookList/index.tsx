import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import { BookContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();

  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    setSearchQuery(queryKeyword);
  }, [params]);

  return (
    <>
      <BookContainer>
        <section>
          <h2>국내도서</h2>
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
        </section>
      </BookContainer>
    </>
  );
};

export default BookList;
