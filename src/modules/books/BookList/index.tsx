import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import { BookListContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { BookData, BookItem, LikesItem } from "../data";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import axios from "axios";
import Button from "@/components/Button";
import { getCookie } from "@/utils/cookie";
import { ProfileData } from "@/modules/cart/userdata";

const BookList = ({ fetchUrl }) => {
  const token = getCookie("token");
  const MAX_LIST = 5; // 고정된 리스트 갯수

  //페이징 숫자 처리
  const [arrowNumberList, setArrowNumberList] = useState([]);
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(0);
  //카테고리 상태값
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  //구분상태값
  const [category, setCategory] = useState("");
  //선호작품
  const [storeHeartStates, setStoreHeartStates] = useState({});
  //유저정보
  const [profile, setProfile] = useState<ProfileData | null>(null);

  //책 리스트
  const [bookList, setBookList] = useState<BookItem[]>([]);

  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);

  //총페이지
  const [totalPages, setTotalPages] = useState(0);

  //선호작품
  const handleBookSave = async (itemId: number) => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
      return;
    } else {
      setStoreHeartStates((prevStates) => ({
        ...prevStates,
        [itemId]: !prevStates[itemId],
      }));
      const likes = !storeHeartStates[itemId];
      console.log(likes);
      const newStoreHearts = {
        like: likes,
      };
      try {
        const response = await axios.put(`http://localhost:8081/books/${itemId}/like`, newStoreHearts, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          console.log("선호작품 등록/수정 성공..!");
        }
      } catch (e: any) {
        console.log(e + "선호작품 오류");
      }
    }
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

  // useEffect(() => {
  //   if (currentPage > 0 && currentPage % 5 === 0) {
  //     let lst = [];
  //     for (let i = currentPage; i < 5; i++) {
  //       lst.push(i);
  //     }
  //     setArrowNumberList(lst);
  //   }
  //   if (currentPage > 0) {
  //     setShowArrowLeft(true);
  //   } else if (currentPage === 0) {
  //     setShowArrowLeft(false);
  //   }
  //   if (currentPage >= totalPages - 1) {
  //     setShowArrowRight(false);
  //   } else {
  //     setShowArrowRight(true);
  //   }
  // }, [currentPage, totalPages]);

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

  //카테고리 이동
  // useEffect(() => {
  //   const queryKeyword = params.get("option") || "";
  //   console.log(queryKeyword + "카테고리 키워드");
  //   setSearchQuery(queryKeyword);
  //   (async () => {
  //     try {
  //       const response = await axios.get<BookData>(
  //         `http://localhost:8081/books/category?option=${queryKeyword}&size=${MAX_LIST}&page=${currentPage}`,
  //       );
  //       if (response.status === 200) {
  //         setTotalPages(response.data.totalPages);
  //         setBookList(response.data.content);
  //         setCategory(fetchUrl.split("=")[1]);
  //       }
  //     } catch (e: any) {
  //       console.log(e);
  //     }
  //   })();
  // }, [searchQuery, params]);

  //북리스트서버 연동
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get<BookData>(`${fetchUrl}&size=${MAX_LIST}&page=${currentPage}`);
  //       if (response.status === 200) {
  //         setTotalPages(response.data.totalPages);
  //         setBookList(response.data.content);
  //         setCategory(fetchUrl.split("=")[1]);
  //       }
  //     } catch (e: any) {
  //       console.log(e);
  //     }
  //   })();
  // }, [currentPage, fetchUrl]);

  //내 선호작품 표시
  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get<ProfileData>(`http://localhost:8081/auth/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProfile(response.data);
          //좋아요 상태값 설정
        } catch (e: any) {
          console.log(e);
        }
      })();
      bookList.map((book) => {
        // 좋아요 데이터를 해당 북 객체에 추가
        const bookWithLikeData = { ...book, likeData: book.likedBook };

        bookWithLikeData.likeData.forEach((like) => {
          if (like.profileId === profile.profileId) {
            setStoreHeartStates((prevStates) => ({
              ...prevStates,
              [bookWithLikeData.id]: like.likes,
            }));
          }
        });
      });
    }
  }, [bookList]);

  //페이징/카테고리 조회 통합
  useEffect(() => {
    const queryKeyword = params.get("option") || "";
    console.log(queryKeyword + "카테고리 키워드");
    setSearchQuery(queryKeyword);

    // 현재 queryKeyword와 currentPage에 기반한 URL을 정의합니다
    const categoryUrl = `http://localhost:8081/books/category?option=${queryKeyword}&size=${MAX_LIST}&page=${currentPage}`;
    const listUrl = `${fetchUrl}&size=${MAX_LIST}&page=${currentPage}`;

    (async () => {
      try {
        const response = await axios.get<BookData>(queryKeyword !== "" ? categoryUrl : listUrl);
        if (response.status === 200) {
          setTotalPages(response.data.totalPages);

          // 설정된 북 목록
          // setBookList(booksWithLikes);
          setBookList(response.data.content);
          setCategory(searchQuery || fetchUrl.split("=")[1]);
        }
      } catch (e: any) {
        console.log(e);
      }
    })();
  }, [searchQuery, currentPage, params, fetchUrl]);

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
                      <Link to={`/page?id=${item.id}`}>
                        <h3>{`${item.title}`}</h3>
                      </Link>
                      <hr />
                      <p>{`${item.author}`}</p>
                      <p>{`${item.description}`}</p>
                    </div>
                  </div>
                  <ul>
                    <li style={{ fontSize: "small" }}>
                      정가:
                      <del>
                        <p>{`${item.priceStandard}`}원</p>
                      </del>
                    </li>
                    <li style={{ color: "crimson", fontWeight: "bold" }}>
                      판매가: {`${item.priceSales.toLocaleString()}`}원
                    </li>
                    <li
                      onClick={() => {
                        handleBookSave(item.id);
                      }}>
                      <button className="btn">
                        {storeHeartStates[item.id] ? (
                          <Favorite className="material-icons-outlined heart" />
                        ) : (
                          <FavoriteBorder className="material-icons-outlined" />
                        )}
                        선호작품
                      </button>
                    </li>
                    <li>
                      <Button itemId={item.itemId} quantity={1} />
                    </li>
                  </ul>
                </article>
              ))
            ) : (
              // 데이터가 없거나 오류 상태를 처리하는 부분
              <p>책을 찾을 수 없습니다.</p>
            )}
            {totalPages > 2 && (
              <nav>
                <ol>
                  {showArrowLeft && (
                    <li className="numberbox">
                      <button onClick={handlePageMinus}>{`<`}</button>
                    </li>
                  )}
                  {arrowNumberList.map((num) => (
                    <li
                      key={num}
                      className="numberbox"
                      onClick={() => {
                        handleSetPage(num);
                      }}>
                      {num + 1}
                    </li>
                  ))}
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
      </BookListContainer>
    </>
  );
};

export default BookList;
