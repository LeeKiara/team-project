import { useEffect, useState } from "react";
import { BookBestContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { AlamData, BookData, BookItem } from "../data";
import Button from "@/components/Button";
import axios from "axios";
import { getCookie } from "@/utils/cookie";
import { ProfileData } from "@/modules/cart/userdata";
import StoreHeartButton from "@/components/StoreHeartButton";
import CartButton from "@/components/CartButton";
import PagingButton from "@/components/PagingButton";
import { EmojiEvents, Notifications, NotificationsOutlined } from "@mui/icons-material";

const BookBestList = () => {
  const token = getCookie("token");
  const MAX_LIST = 5; // 고정된 리스트 갯수

  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);

  //페이징 숫자 처리
  const [arrowNumberList, setArrowNumberList] = useState([]);
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(0);
  //총페이지
  const [totalPages, setTotalPages] = useState(0);

  const [bookList, setBookList] = useState<BookItem[]>([]);
  //카테고리 상태값
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  //선호작품 상태값
  const [storeHeartStates, setStoreHeartStates] = useState({});
  //유저정보
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  //알림설정
  const [storeBelltStates, setStoreBellStates] = useState({});

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
        const response = await axios.put(`http://localhost:8081/books/${itemId}/alam`, newAlamDisplay, {
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
    if (totalPages === 1) {
      for (let i = startIndex; i <= endIndex; i++) {
        lst.push(i);
      }
    } else {
      for (let i = startIndex; i < endIndex; i++) {
        lst.push(i);
      }
    }

    setArrowNumberList(lst);
  }, [currentPage, totalPages]);

  //선호작품 추가
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
          setProfileData(response.data);
          //좋아요 상태값 설정
        } catch (e: any) {
          console.log(e);
        }
      })();
      bookList.map((book) => {
        // 좋아요 데이터를 해당 북 객체에 추가
        const bookWithLikeData = { ...book, likeData: book.likedBook };

        bookWithLikeData.likeData.forEach((like) => {
          if (profileData && like.profileId === profileData.profileId) {
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

  //카테고리 이동
  useEffect(() => {
    console.log(params);
    const queryKeyword = params.get("option") || "";
    console.log(queryKeyword + "카테고리 키워드");
    const query = queryKeyword.split(">")[1];
    console.log(query);
    setSearchQuery(query);
    if (queryKeyword) {
      (async () => {
        try {
          const response = await axios.get<BookData>(
            `http://localhost:8081/books/best/category?&option=국내도서>${query}&size=${MAX_LIST}&page=${currentPage}`,
          );
          if (response.status === 200) {
            setBookList(response.data.content);
            setTotalPages(response.data.totalPages);
          }
        } catch (e: any) {
          console.log(e);
        }
      })();
    } else {
      (async () => {
        try {
          const response = await axios.get<BookData>(
            `http://localhost:8081/books/best?size=${MAX_LIST}&page=${currentPage}`,
          );
          if (response.status === 200) {
            setBookList(response.data.content);
            setTotalPages(response.data.totalPages);
          }
        } catch (e: any) {
          console.log(e);
        }
      })();
    }

    //알림설정 디스플레이 조회
    (async () => {
      try {
        const response = await axios.get<AlamData[]>(`http://localhost:8081/books/alam`, {
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
  }, [searchQuery, totalPages, currentPage, params]);

  return (
    <>
      <BookBestContainer>
        {!bookList ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            {searchQuery && (
              <div style={{ display: "flex", gap: "5px" }}>
                <p>[ 카테고리 ]</p>
                <p>{searchQuery}</p>
              </div>
            )}
            {bookList.length > 0 ? (
              bookList.map((item, index) => (
                <article key={`${item.id}`}>
                  <div>
                    <figure>
                      <Link to={`/page?id=${item.id}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <span className="winner-cup">
                        {(currentPage === 0 || currentPage === 1) && (
                          <EmojiEvents className="material-icons-outlined" />
                        )}
                        {currentPage === 0 && <h2>{index + 1}위</h2>}
                        {currentPage === 1 && <h2>{index + 6}위</h2>}
                      </span>
                      <h3>
                        <Link to={`/page?id=${item.id}`}>{`${item.title}`}</Link>
                      </h3>
                      <dl>
                        <dt>지은이:</dt>
                        <p>{`${item.author}`}</p>
                        <dt>출판사:</dt>
                        <p>{`${item.publisher}`}</p>
                      </dl>
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
                  </ul>
                </article>
              ))
            ) : (
              <p>책을 찾을 수 없습니다.</p>
            )}
            {totalPages >= 1 && (
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
      </BookBestContainer>
    </>
  );
};

export default BookBestList;
