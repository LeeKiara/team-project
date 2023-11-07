import { Link, useSearchParams } from "react-router-dom";
import { BookNewContainer } from "./styles";
import { useEffect, useState } from "react";
import { BookData, BookItem } from "../data";
import Button from "@/components/Button";
import axios from "axios";
import { ButtonStyle } from "@/components/Button/styles";
import { Notifications, NotificationsOutlined, ShoppingCart } from "@mui/icons-material";
import CartButton from "@/components/CartButton";
import PagingButton from "@/components/PagingButton";

const BookNewList = () => {
  const MAX_LIST = 8; // 고정된 리스트 갯수
  const [newBookList, setNewBookList] = useState<BookItem[]>([]);
  //카테고리 상태값
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();

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

  //알림설정
  const handleBell = (itemId: number) => {
    setStoreBellStates((prevStates) => ({
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
            `http://localhost:8081/redis/category?size=${MAX_LIST}&page=${currentPage}&option=${query}`,
          );
          if (response.status === 200) {
            setNewBookList([...response.data.content]);
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
            `http://localhost:8081/redis/new?size=${MAX_LIST}&page=${currentPage}`,
          );
          if (response.status === 200) {
            setNewBookList([...response.data.content]);
            setTotalPages(response.data.totalPages);
          }
        } catch (e: any) {
          console.log(e);
        }
      })();
    }
  }, [searchQuery, currentPage, params]);

  return (
    <>
      <BookNewContainer>
        {!newBookList ? (
          <p>로딩 중...</p>
        ) : (
          <section>
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
                      <dl>판매가: {`${item.priceSales}`}원</dl>
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
                          className="btn"
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
                <p>책을 찾을 수 없습니다.</p>
              )}
            </ul>
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
      </BookNewContainer>
    </>
  );
};

export default BookNewList;
