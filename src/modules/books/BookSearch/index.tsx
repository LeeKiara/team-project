import { SearchContainer } from "./styles";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { BookData, BookItem, useBooksItem } from "../data";
import { Favorite, FavoriteBorder, ThumbDown, ThumbDownOffAlt, ThumbUp, ThumbUpOffAlt } from "@mui/icons-material";
import Button from "@/components/Button";
import axios from "axios";
import StoreHeartButton from "@/components/StoreHeartButton";
import { getCookie } from "@/utils/cookie";
import { ProfileData } from "@/modules/cart/userdata";
import PagingButton from "@/components/PagingButton";

const BookSearch = () => {
  const token = getCookie("token");
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

  //페이징 숫자 처리
  const [arrowNumberList, setArrowNumberList] = useState([]);
  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);

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

  //선호작품 추가 수정
  // const handleBookSave = async (itemId: number) => {
  //   if (!token) {
  //     alert("로그인 후 이용해주세요.");
  //     return;
  //   } else {
  //     setStoreHeartStates((prevStates) => ({
  //       ...prevStates,
  //       [itemId]: !prevStates[itemId],
  //     }));
  //     const likes = !storeHeartStates[itemId];
  //     console.log(likes);
  //     const newStoreHearts = {
  //       like: likes,
  //     };
  //     try {
  //       const response = await axios.put(`http://localhost:8081/books/${itemId}/like`, newStoreHearts, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.status === 200) {
  //         console.log("선호작품 등록/수정 성공..!");
  //       }
  //     } catch (e: any) {
  //       console.log(e + "선호작품 오류");
  //     }
  //   }
  // };

  //화살표 상태에 따라 변화 및 페이징 숫자 처리
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

    // 페이지당 아이템 수 (예: 5)
    const itemsPerPage = 5;
    const startIndex = Math.floor(currentPage / itemsPerPage) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalPages);

    const lst = [];
    for (let i = startIndex; i < endIndex; i++) {
      lst.push(i);
    }
    console.log(lst);
    setArrowNumberList(lst);
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
          `http://localhost:8081/aladin/search?&size=${MAX_SEARCH}&page=${currentPage}&option=${queryOption}&keyword=${queryKeyword}`,
        );

        if (response.status === 200) {
          console.log(response.data);
          console.log(response.data.content);
          setSearchList(response.data.content);
          setTotalPages(response.data.totalPages);
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
                  <th>책소개</th>
                  <th>알라딘 링크</th>
                  <th>정가</th>
                  <th>판매가</th>
                  <th>관련 시리즈</th>
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
                      <td>{`${item.description}`}</td>
                      <td>
                        <Link to={`${item.link}`}>{`${item.link}`}</Link>
                      </td>
                      <td>
                        <del>{`${item.priceStandard}`} 원</del>
                      </td>
                      <td>{`${item.priceSales.toLocaleString()}`} 원</td>
                      <td>
                        {item.seriesInfo && (
                          <Link to={item.seriesInfo.seriesLink}>{`${item.seriesInfo.seriesName}`}</Link>
                        )}
                        {/* <dl
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
                          </dl> */}
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
            {totalPages > 1 && (
              <PagingButton
                showArrowLeft={showArrowLeft}
                showArrowRight={showArrowRight}
                arrowNumberList={arrowNumberList}
                handlePageMinus={handlePageMinus}
                handlePagePlus={handlePagePlus}
                handleSetPage={handleSetPage}
              />
            )}
          </section>
        )}
      </SearchContainer>
    </>
  );
};

export default BookSearch;
