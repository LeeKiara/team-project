import { Link, useSearchParams } from "react-router-dom";
import { BookNewContainer } from "./styles";
import { useEffect, useState } from "react";
import { AlamData, BookData, BookItem, isLocalhost, useRedisData } from "../data";
import axios from "axios";
import { Notifications, NotificationsOutlined, ShoppingCart } from "@mui/icons-material";
import CartButton from "@/components/CartButton";
import PagingButton from "@/components/PagingButton";
import { getCookie } from "@/utils/cookie";

const BookNewList = () => {
  const token = getCookie("token");
  const MAX_LIST = 8; // 고정된 리스트 갯수
  const [newBookList, setNewBookList] = useState<BookItem[]>([]);
  //카테고리 상태값
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  const serverAddress = isLocalhost();

  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);

  //페이징 숫자 처리
  const [arrowNumberList, setArrowNumberList] = useState([]);
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(0);
  //총페이지
  const [totalPages, setTotalPages] = useState(0);

  //알림설정
  const [storeBelltStates, setStoreBellStates] = useState({});

  // const { bookData: books } = useRedisData(MAX_LIST, currentPage);

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
      if (alamDisplay) {
        alert("알림 설정이 등록되었습니다.");
      } else {
        alert("알림 설정 등록이 취소되었습니다.");
      }
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
        alert("알림 설정 등록에 실패하였습니다. 다시 시도해주세요.");
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
    for (let i = startIndex; i < endIndex; i++) {
      lst.push(i);
    }
    setArrowNumberList(lst);
  }, [currentPage, totalPages]);

  //카테고리 이동시 현재 페이지 0 설정
  useEffect(() => {
    setCurrentPage(0); // 카테고리 이동할 때 현재 페이지를 0으로 설정
  }, [params]);

  //카테고리 이동
  useEffect(() => {
    console.log(params);
    const queryKeyword = params.get("option") || "";
    const query = queryKeyword.split(">")[1];
    console.log(query);
    setSearchQuery(query);
    (async () => {
      try {
        const response = await axios.get<BookData>(
          `${serverAddress}/redis/category?size=${MAX_LIST}&page=${currentPage}${query ? `&option=${query}` : ""}`,
        );
        if (response.status === 200) {
          setNewBookList([...response.data.content]);
          setTotalPages(response.data.totalPages);
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
  }, [searchQuery, currentPage, params]);

  return (
    <>
      <BookNewContainer>
        {!newBookList ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            {searchQuery && (
              <div style={{ display: "flex", gap: "5px", marginBottom: "8px" }}>
                <p>[ 카테고리 ]</p>
                <p>{searchQuery}</p>
              </div>
            )}
            <ul>
              {newBookList.length > 0 ? (
                newBookList.map((item) => (
                  <li key={`${item.id}`}>
                    <figure>
                      <Link to={`/page?new=${item.id}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <Link to={`/page?new=${item.id}`}>
                        <h3>{`${item.title}`.length > 12 ? `${item.title}`.slice(0, 12) + "..." : `${item.title}`}</h3>
                      </Link>
                      <p>{`${item.author}`.length > 8 ? `${item.author}`.slice(0, 8) + "..." : `${item.author}`}</p>
                      <dl>
                        정가
                        <del>{`${item.priceStandard}`}원</del>
                      </dl>
                      <dl>판매가: {`${item.priceSales.toLocaleString()}`}원</dl>
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
                    </div>
                  </li>
                ))
              ) : (
                <p>책이 없습니다.</p>
              )}
            </ul>
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
      </BookNewContainer>
    </>
  );
};

export default BookNewList;
