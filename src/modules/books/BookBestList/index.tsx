import { useEffect, useState } from "react";
import { BookBestContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { useBooksItem } from "../data";

const BookBestList = () => {
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
      <BookBestContainer>
        <p>{searchQuery}</p>
        {isBookItemValidating ? (
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
                      <h3>
                        <Link
                          to={`/page?keyword=${item.itemId}`}
                        >{`${item.title}`}</Link>
                      </h3>
                      <dl>
                        <dt>지은이:</dt>
                        <p>{`${item.author}`}</p>
                        <dt>출판사:</dt>
                        <p>{`${item.publisher}`}</p>
                      </dl>
                      <h4>책 소개</h4>
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
              <p>책을 찾을 수 없습니다.</p>
            )}
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
        )}
      </BookBestContainer>
    </>
  );
};

export default BookBestList;
