import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import { BookContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { useBooksItem } from "../data";

const BookList = () => {
  const [page, setPage] = useState(0);
  const { booksItem: books, isBookItemValidating } = useBooksItem(page);
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();

  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    setSearchQuery(queryKeyword);
  }, [params]);

  return (
    <>
      <BookContainer>
        {isBookItemValidating ? (
          // 로딩 상태를 처리하는 부분
          <p>로딩 중...</p>
        ) : (
          <section>
            {books.length > 0 ? (
              books.map((item) => (
                <article key={`${item.itemId}`}>
                  <div>
                    <figure>
                      <Link to={`/page?keyword=${item.itemId}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <p>[국내도서]</p>
                      <h3>{`${item.title}`}</h3>
                      <hr />
                      <p>{`${item.author}`}</p>
                      <p>{`${item.description}`}</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                      정가:
                      <del>
                        <p>{`${item.priceStandard}`}원</p>
                      </del>
                    </li>
                    <li>판매가: {`${item.priceSales}`}</li>
                    <li>
                      <button>장바구니 담기</button>
                    </li>
                  </ul>
                </article>
              ))
            ) : (
              // 데이터가 없거나 오류 상태를 처리하는 부분
              <p>책을 찾을 수 없습니다.</p>
            )}
          </section>
        )}
      </BookContainer>
    </>
  );
};

export default BookList;
