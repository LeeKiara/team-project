import { SearchContainer } from "./styles";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { BookData, BookItem, useBooksItem } from "../data";
import { Favorite, FavoriteBorder, ThumbDown, ThumbDownOffAlt, ThumbUp, ThumbUpOffAlt } from "@mui/icons-material";
import Button from "@/components/Button";
import axios from "axios";

const BookSearch = () => {
  const MAX_SEARCH = 5; // 고정된 검색 리스트 갯수
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(0);

  //검색어
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();

  //검색 페이지
  const [searchList, setSearchList] = useState<BookItem[]>([]);

  //검색 총 페이지
  const [totalPages, setTotalPages] = useState(0);

  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);

  //선호작품/추천/비추천 상태값
  const [storeHeartStates, setStoreHeartStates] = useState({});
  const [storeThumbStates, setStoreThumbState] = useState({});
  const [storeThumbDownStates, setStoreThumbDownState] = useState({});
  // const [page, setPage] = useState(0);
  // const { booksItem: books, isBookItemValidating } = useBooksItem(page);

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

  const handleBookSave = (itemId: number) => {
    setStoreHeartStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };
  const handleThumbUp = (itemId: number) => {
    setStoreThumbState((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };
  const handleThumbDown = (itemId: number) => {
    setStoreThumbDownState((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

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

  //검색어 쿼리
  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    console.log(queryKeyword + "검색어");
    setSearchQuery(queryKeyword);
    const queryOption = params.get("option") || "";
    console.log(queryOption + "검색어옵션");
    (async () => {
      try {
        const response = await axios.get<BookData>(
          `http://localhost:8081/books/paging/search?&size=${MAX_SEARCH}&page=${currentPage}&option=${queryOption}&keyword=${queryKeyword}`,
        );
        if (response.status === 200) {
          setTotalPages(response.data.totalPages);
          setSearchList(response.data.content);
        }
      } catch (e: any) {
        console.log(e);
      }
    })();
  }, [params, currentPage]);

  return (
    <>
      <SearchContainer>
        {!searchList ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            <span>
              "{searchQuery}"<h4>검색 결과</h4>
              <p>총 {totalPages} 페이지</p>
            </span>
            <table>
              <thead>
                <tr>
                  <th>책표지</th>
                  <th>책제목</th>
                  <th>저자</th>
                  <th>출판사</th>
                  {/* <th>책소개</th> */}
                  <th>알라딘 링크</th>
                  <th>리뷰</th>
                  <th>정가</th>
                  <th>판매가</th>
                  <th>재고</th>
                  <th>선택</th>
                </tr>
              </thead>
              <tbody>
                {searchList.length > 0 ? (
                  searchList.map((item) => (
                    <tr key={`${item.id}`}>
                      <td>
                        <Link to={`/page?id=${item.id}`}>
                          <img src={`${item.cover}`} alt={`${item.title}`} />
                        </Link>
                      </td>
                      <td>
                        <Link to={`/page?id=${item.id}`}>" {`${item.title}`} "</Link>
                      </td>
                      <td>{`${item.author}`}</td>
                      <td>{`${item.publisher}`}</td>
                      {/* <td>{`${item.description}`}</td> */}
                      <td>
                        <Link to={`${item.link}`}>{`${item.link}`}</Link>
                      </td>
                      <td> {`${item.commentCount}`} </td>
                      <td>
                        <del>{`${item.priceStandard}`}</del>
                      </td>
                      <td>{`${item.priceSales}`}</td>
                      <td>10</td>
                      <td>
                        <div>
                          <dl
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
                          </dl>
                          <dl
                            onClick={() => {
                              handleThumbUp(item.itemId);
                            }}>
                            <button className="btn">
                              {storeThumbStates[item.itemId] ? (
                                <ThumbUp className="material-icons-outlined thumb" />
                              ) : (
                                <ThumbUpOffAlt className="material-icons-outlined" />
                              )}
                              추천
                            </button>
                          </dl>
                          <dl
                            onClick={() => {
                              handleThumbDown(item.itemId);
                            }}>
                            <button className="btn">
                              {storeThumbDownStates[item.itemId] ? (
                                <ThumbDown className="material-icons-outlined thumb" />
                              ) : (
                                <ThumbDownOffAlt className="material-icons-outlined" />
                              )}
                              싫어요
                            </button>
                          </dl>
                          <Button
                            gubun="KOR"
                            itemId={item.itemId}
                            title={item.title}
                            cover={item.cover}
                            priceStandard={item.priceStandard.toString()}
                            priceSales={item.priceSales.toString()}
                            quantity="1"
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={10}>
                      <p>책을 찾을 수 없습니다.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {totalPages > 2 && (
              <nav>
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
            )}
          </section>
        )}
      </SearchContainer>
    </>
  );
};

export default BookSearch;
