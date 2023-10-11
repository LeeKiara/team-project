import { SearchContainer } from "./styles";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();

  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    setSearchQuery(queryKeyword);
  }, [params]);

  return (
    <>
      <SearchContainer>
        <section>
          <span>
            {searchQuery}
            <h4>검색 결과</h4>
            <p></p>
          </span>
          <article>
            <div>
              <figure>
                <img src="책이미지" alt="책이미지" />
              </figure>
              <div id="section">
                <div>
                  <h3>책 제목</h3>
                  <span>
                    <dl>
                      <dt>지은이:</dt>
                      <h5>홍길동</h5>
                    </dl>
                    <dl>
                      <dt>출판사: </dt>
                      <h5>성안당</h5>
                    </dl>
                  </span>
                  <h5>책소개</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum animi cum nisi illo vitae tenetur ut? Veniam,
                    repudiandae culpa libero ea, commodi natus totam, ducimus
                    voluptas earum debitis dicta vel.
                  </p>
                </div>
                <dl>
                  <dt>정가:</dt>
                  <del>
                    <p>10000</p>
                  </del>
                  <dt>판매가: </dt>
                  <p>5000</p>
                </dl>
              </div>
            </div>
            <div>
              <dl>장바구니 담기</dl>
              <dl>바로 구매</dl>
            </div>
          </article>
          <hr />
          <article>
            <div>
              <figure>
                <img src="책이미지" alt="책이미지" />
              </figure>
              <div id="section">
                <div>
                  <h3>책 제목</h3>
                  <span>
                    <dl>
                      <dt>지은이:</dt>
                      <h5>홍길동</h5>
                    </dl>
                    <dl>
                      <dt>출판사: </dt>
                      <h5>성안당</h5>
                    </dl>
                  </span>
                  <h5>책소개</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum animi cum nisi illo vitae tenetur ut? Veniam,
                    repudiandae culpa libero ea, commodi natus totam, ducimus
                    voluptas earum debitis dicta vel.
                  </p>
                </div>
                <dl>
                  <dt>정가:</dt>
                  <del>
                    <p>10000</p>
                  </del>
                  <dt>판매가: </dt>
                  <p>5000</p>
                </dl>
              </div>
            </div>
            <div>
              <dl>장바구니 담기</dl>
              <dl>바로 구매</dl>
            </div>
          </article>
        </section>
      </SearchContainer>
    </>
  );
};

export default BookSearch;
