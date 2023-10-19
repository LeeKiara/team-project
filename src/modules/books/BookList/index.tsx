import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import { BookListContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { BookData, BookItem, useBooksItem } from "../data";
import { Favorite, FavoriteBorder, PartyMode, ShoppingCart } from "@mui/icons-material";
import axios from "axios";

const BookList = ({ fetchUrl }) => {
  const MAX_LIST = 5; // 고정된 리스트 갯수
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(0);
  //카테고리 상태값
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  //구분상태값
  const [category, setCategory] = useState("");
  //선호작품
  const [storeHeartStates, setStoreHeartStates] = useState({});
  const [bookList, setBookList] = useState<BookItem[]>([]);

  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);

  //총페이지
  const [totalPages, setTotalPages] = useState(0);

  const handleBookSave = (itemId: number) => {
    setStoreHeartStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  //페이징
  const handleSetPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //페이징 화살표 마이너스
  const handlePageMinus = () => {
    setCurrentPage(currentPage - 1);
  };
  //페이징 화살표 플러스
  const handlePagePlus = () => {
    setCurrentPage(currentPage + 1);
  };

  // useEffect(() => {
  //   const url = new URL(fetchUrl);
  //   const params = new URLSearchParams(url.search);
  //   setCategory(params.get('option'));
  // }, [fetchUrl]);

  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    setSearchQuery(queryKeyword);
  }, [params]);

  //화살표 상태에 따라 변화
  useEffect(() => {
    if (currentPage > 0) {
      setShowArrowLeft(true);
    } else if (currentPage === 0) {
      setShowArrowLeft(false);
    }
    if (currentPage >= totalPages - 1) {
      setShowArrowRight(false);
    } else {
      setShowArrowRight(true);
    }
  }, [currentPage, totalPages]);

  //북리스트서버 연동
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<BookData>(`${fetchUrl}&size=${MAX_LIST}&page=${currentPage}`);
        if (response.status === 200) {
          setTotalPages(response.data.totalPages);
          setBookList(response.data.content);
          setCategory(fetchUrl.split("=")[1]);
        }
      } catch (e: any) {
        console.log(e);
      }
    })();
  }, [currentPage, fetchUrl]);

  return (
    <>
      <BookListContainer>
        {!bookList ? (
          // 로딩 상태를 처리하는 부분
          <p>로딩 중...</p>
        ) : (
          <section>
            {bookList.length > 0 ? (
              bookList.map((item) => (
                <article key={`${item.id}`}>
                  <div>
                    <figure>
                      <Link to={`/page?id=${item.id}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <p>[{category}]</p>
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
                      }}>
                      <button className="btn">
                        {storeHeartStates[item.itemId] ? (
                          <Favorite className="material-icons-outlined heart" />
                        ) : (
                          <FavoriteBorder className="material-icons-outlined" />
                        )}
                        선호작품
                      </button>
                    </li>
                    <div>
                      <button className="btn last">
                        <ShoppingCart className="material-icons-outlined" />
                        장바구니
                      </button>
                    </div>
                  </ul>
                </article>
              ))
            ) : (
              // 데이터가 없거나 오류 상태를 처리하는 부분
              <p>책을 찾을 수 없습니다.</p>
            )}
            <nav style={{ display: "flex", justifyContent: "center" }}>
              <ol>
                {showArrowLeft && (
                  <li className="numberbox">
                    <button onClick={handlePageMinus}>{`<`}</button>
                  </li>
                )}
                {/* {Array.from({ length: Math.min(MAX_LIST, totalPage - currentPage) }, (_, i) => i + currentPage).map((pageNumber) => (
                  <li key={pageNumber} className="numberbox" onClick={() => handleSetPage(pageNumber)}>
                    {pageNumber + 1}
                  </li>
                ))} */}
                <li
                  className="numberbox"
                  onClick={() => {
                    handleSetPage(0);
                  }}>
                  1
                </li>
                <li
                  className="numberbox"
                  onClick={() => {
                    handleSetPage(1);
                  }}>
                  2
                </li>
                <li
                  className="numberbox"
                  onClick={() => {
                    handleSetPage(2);
                  }}>
                  3
                </li>
                <li
                  className="numberbox"
                  onClick={() => {
                    handleSetPage(3);
                  }}>
                  4
                </li>
                <li
                  className="numberbox"
                  onClick={() => {
                    handleSetPage(4);
                  }}>
                  5
                </li>
                {showArrowRight && (
                  <li className="numberbox">
                    <button onClick={handlePagePlus}>{`>`}</button>
                  </li>
                )}
              </ol>
            </nav>
          </section>
        )}
      </BookListContainer>
    </>
  );
};

export default BookList;
