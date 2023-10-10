import { useEffect, useState } from "react";
import { BookBestContainer } from "./styles";
import { useSearchParams } from "react-router-dom";

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
          <h2>베스트 셀러</h2>
          <p>{searchQuery}</p>
          <article>
            <div>
              <figure>
                <img src="책이미지" alt="책이미지" />
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
                <img src="책이미지" alt="책이미지" />
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
                <img src="책이미지" alt="책이미지" />
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
      </BookBestContainer>
    </>
  );
};

export default BookBestList;
