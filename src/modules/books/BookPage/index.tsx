import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageContainer } from "./styles";

const BookPage = () => {
  const [detail, setDetail] = useState("");
  const [params] = useSearchParams();

  const handleSandCart = () => {};

  useEffect(() => {
    const query = params.get("detail") || "";
    setDetail(query);
  }, [params]);

  return (
    <>
      <PageContainer>
        <section>
          <h6>상세페이지</h6>
          <article>
            <figure>
              <img src="사진이미지" alt="사진이미지" />
            </figure>
            <aside>
              <h2>책제목</h2>
              <div>
                <dl>
                  <dt>출판사: </dt>
                  <p>성안당</p>
                </dl>
                <dl>
                  <dt>발행일: </dt>
                  <p>2023-12-30</p>
                </dl>
                <div>
                  <dt>지은이: </dt>
                  <p>홍길동</p>
                </div>
              </div>
              <div id="amount">
                수량:
                <input type="text" />
                <div>
                  <img
                    src="	https://image.aladin.co.kr/img/shop/2018/icon_Aup.png"
                    alt="위 화살표"
                  />
                  <img
                    src="https://image.aladin.co.kr/img/shop/2018/icon_Adown.png"
                    alt="아래화살표"
                  />
                </div>
              </div>
            </aside>
          </article>
        </section>
      </PageContainer>
    </>
  );
};

export default BookPage;
