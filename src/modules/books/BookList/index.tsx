import { useEffect, useState } from "react";
import { BookListContainer } from "./styles";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
// import Button from "@/components/Button";
import { getCookie } from "@/utils/cookie";
import { ProfileData } from "@/modules/cart/userdata";
import StoreHeartButton from "@/components/StoreHeartButton";
import CartButton from "@/components/CartButton";
import PagingButton from "@/components/PagingButton";
import { AlamData, BookData, BookItem, isLocalhost } from "../data";
import { NotificationsOutlined, Notifications } from "@mui/icons-material";

const BookList = ({ fetchUrl }) => {
  const token = getCookie("token");
  const MAX_LIST = 3; // 고정된 리스트 갯수
  const navigate = useNavigate();

  const serverAddress = isLocalhost();

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
  //알림설정
  const [storeBelltStates, setStoreBellStates] = useState({});

  //책 리스트
  const [bookList, setBookList] = useState<BookItem[]>([]);

  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);

  //총페이지
  const [totalPages, setTotalPages] = useState(0);

  //선호작품 추가 수정
  const handleBookSave = async (itemId: number) => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
      const loginCheck = confirm("로그인 페이지로 이동하시겠습니까?");
      if (loginCheck) {
        navigate("/login");
      }
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
        const response = await axios.put(`${serverAddress}/books/${itemId}/like`, newStoreHearts, {
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

  //알림설정 등록 및 수정
  const handleBell = async (itemId: number) => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
    } else {
      setStoreBellStates((prevStates) => ({
        ...prevStates,
        [itemId]: !prevStates[itemId],
      }));
      const alamDisplay = !storeBelltStates[itemId];
      const newAlamDisplay = {
        alamDisplay: alamDisplay,
      };
      try {
        const response = await axios.put(`${serverAddress}/books/${itemId}/alam`, newAlamDisplay, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          console.log("알림설정 수정/등록 성공..!");
        }
      } catch (e: any) {
        console.log(e + "알림설정 오류");
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
          const response = await axios.get<ProfileData>(`${serverAddress}/auth/profile`, {
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
          if (profile && like.profileId === profile.profileId) {
            setStoreHeartStates((prevStates) => ({
              ...prevStates,
              [bookWithLikeData.id]: like.likes,
            }));
          }
        });
      });
    }
  }, [bookList]);

  //카테고리 이동시 현재 페이지 0 설정
  useEffect(() => {
    setCurrentPage(0); // 카테고리 이동할 때 현재 페이지를 0으로 설정
  }, [params]);

  //페이징/카테고리 조회 통합
  useEffect(() => {
    const queryKeyword = params.get("option") || "";
    console.log(queryKeyword + "카테고리 키워드");
    setSearchQuery(queryKeyword);

    // 현재 queryKeyword와 currentPage에 기반한 URL을 정의합니다
    const categoryUrl = `${serverAddress}/books/category?option=${queryKeyword}&size=${MAX_LIST}&page=${currentPage}`;
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

    //알림설정 디스플레이 조회
    (async () => {
      try {
        const response = await axios.get<AlamData[]>(`${serverAddress}/books/alam`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          console.log("알림 설정값 조회 성공");
          response.data.forEach((data) => {
            setStoreBellStates((prev) => ({
              ...prev,
              [data.bookItemId]: data.alamDisplay,
            }));
          });
        }
      } catch (e: any) {
        console.log(e + "알림설정 조회 오류");
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
            {searchQuery && (
              <div style={{ display: "flex", gap: "5px" }}>
                <p>[ 카테고리 ]</p>
                <p>{searchQuery.split(">")[1]}</p>
              </div>
            )}
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
                    <li>
                      <StoreHeartButton id={item.id} onClick={handleBookSave} liked={storeHeartStates[item.id]} />
                      {item.stockStatus !== "" &&
                        item.stockStatus !== "0" &&
                        item.stockStatus !== "예약판매" &&
                        item.stockStatus !== "품절" && (
                          <CartButton
                            itemId={item.itemId}
                            quantity={1}
                            title={item.title}
                            cover={item.cover}
                            priceStandard={item.priceStandard.toString()}
                            priceSales={item.priceSales.toString()}
                          />
                        )}
                      {(item.stockStatus === "예약판매" || item.stockStatus === "품절" || item.stockStatus === "") && (
                        <button
                          className="bell"
                          onClick={() => {
                            handleBell(item.itemId);
                          }}>
                          {storeBelltStates[item.itemId] ? (
                            <Notifications className="material-icons-outlined" />
                          ) : (
                            <NotificationsOutlined className="material-icons-outlined" />
                          )}
                          알림설정
                        </button>
                      )}
                    </li>
                  </ul>
                </article>
              ))
            ) : (
              // 데이터가 없거나 오류 상태를 처리하는 부분
              <p></p>
            )}
            {totalPages !== 0 && totalPages > 1 && (
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
      </BookListContainer>
    </>
  );
};

export default BookList;
