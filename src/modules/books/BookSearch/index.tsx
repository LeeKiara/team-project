import Home from "@/pages/Home";
import { SearchContainer } from "./styles";

const BookSearch = () => {
  return (
    <>
      <SearchContainer>
        <section>
          <h4>검색 결과</h4>
          <ul>
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
              <del>
                <li>정가</li>
              </del>
              <li>판매가</li>
            </div>
            <div>
              <li>장바구니 담기</li>
              <li>바로 구매</li>
            </div>
          </ul>
        </section>
      </SearchContainer>
    </>
  );
};

export default BookSearch;
