import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import { BookContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { useBooksItem } from "../data";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const BookList = () => {
  const [page, setPage] = useState(0);
  const { booksItem: books, isBookItemValidating } = useBooksItem(page);
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  const [storeHeartStates, setStoreHeartStates] = useState({});

  const handleBookSave = (itemId: number) => {
    setStoreHeartStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

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
                    <li
                      onClick={() => {
                        handleBookSave(item.itemId);
                      }}
                    >
                      {storeHeartStates[item.itemId] ? (
                        <Favorite className="material-icons-outlined heart" />
                      ) : (
                        <FavoriteBorder className="material-icons-outlined" />
                      )}
                      <span>찜하기</span>
                    </li>
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
      </BookContainer>
    </>
  );
};

export default BookList;
