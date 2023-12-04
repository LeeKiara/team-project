import Home from "@/pages/Home";
import { OrderListContainer } from "./styles";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http, { getDomain } from "@/utils/http";
import { OrderData, OrderResponse, BankDepositData } from "../orderdata";
import FormatDate from "@/components/FormatDate";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

// npm install --save react-spinners
// import { PuffLoader } from "react-spinners";

import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { getCookie } from "@/utils/cookie";
import OrderNotification from "../Order/OrderNotification/OrderNotification";

const OrderList = () => {
  const token = getCookie("token");

  const [selectedStatus, setSelectedStatus] = useState("A"); // 조회조건 : 주문상태(전체/주문완료/주문접수(입금대기)/취소)
  const [isPeriodType1, setPeriodType1] = useState(true); // 조회기간 3개월
  const [isPeriodType2, setPeriodType2] = useState(false); // 조회기간 6개월
  const [isPeriodTypeAll, setPeriodTypeAll] = useState(false); // 조회기간 전체
  const [startDate, setStartDate] = useState(""); // 시작일에 대한 상태 추가
  const [endDate, setEndDate] = useState(""); // 종료일에 대한 상태 추가
  const [isOrderList, setIsOrderList] = useState(true); // 주문조회 가능 여부
  const [isLoading, setIsLoading] = useState(false);

  //현재 페이지
  const [currentPage, setCurrentPage] = useState(0);
  //리스트 총 페이지 수
  const [totalPages, setTotalPages] = useState(0);
  //주문 결과 리스트
  const [orderResultList, setOrderResultList] = useState<OrderData[]>([]);

  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);
  const navigate = useNavigate();

  // 조회 기간 선택구분에 따른 부가 처리
  useEffect(() => {
    const currentDate = new Date();
    const threeMonthsAgo = new Date(currentDate);

    if (isPeriodType1) {
      threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
    }
    if (isPeriodType2) {
      threeMonthsAgo.setMonth(currentDate.getMonth() - 6);
    }
    if (isPeriodTypeAll) {
      threeMonthsAgo.setMonth(currentDate.getMonth() - 12);
    }

    setStartDate(formatDate(threeMonthsAgo));
    setEndDate(formatDate(currentDate));
  }, [isPeriodType1, isPeriodType2, isPeriodTypeAll]);

  // 주문/결제 List
  useEffect(() => {
    console.log(
      "isOrderList:" +
        isOrderList +
        ", startDate:" +
        startDate +
        ", endDate:" +
        endDate +
        ", selectedStatus:" +
        selectedStatus,
    );

    if (isOrderList && startDate != "" && endDate != "") {
      (async () => {
        try {
          const MAX_SEARCH = 5; // 고정된 검색 리스트 갯수
          const response = await http.get<OrderResponse>(
            `/api/order-commerce/order/paging?size=${MAX_SEARCH}&page=${currentPage}&startDate=${startDate}&endDate=${endDate}&orderStatus=${selectedStatus}`,
          );
          if (response.status === 200) {
            console.log("response.data.totalPages" + response.data.totalPages);
            setTotalPages(response.data.totalPages);
            setOrderResultList(response.data.content);
          }
        } catch (e: any) {
          console.log(e);
        } finally {
          // 데이터 로딩이 완료되면 "isLoading"를 false로 설정하여 "조회 중" 메시지를 숨깁니다.
          setTimeout(() => {
            setIsLoading(false);
          }, 300); // 0.5초(500ms) 지연
        }
      })();
    }
    // }, [isOrderList, startDate, endDate, currentPage]);
  }, [isOrderList, selectedStatus, startDate, currentPage, isLoading]);

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

  // 조회기간 선택
  const changeSearchPeriod = (periodGubn: string) => {
    if (periodGubn === "3MONTH") {
      setPeriodType1(true);
      setPeriodType2(false);
      setPeriodTypeAll(false);
    }

    if (periodGubn === "6MONTH") {
      setPeriodType1(false);
      setPeriodType2(true);
      setPeriodTypeAll(false);
    }

    if (periodGubn === "ALL") {
      setPeriodType1(false);
      setPeriodType2(false);
      setPeriodTypeAll(true);
    }

    setIsOrderList(false);
  };

  // 조회기간별 주문 목록 조회 버튼 처리
  const handleOrderList = () => {
    setIsLoading(true); // 조회 중 메시지를 표시
    setSelectedStatus("A"); // 주문상태(전체)

    // 데이터 로딩을 지연시킵니다.
    setTimeout(() => {
      setIsOrderList(true); // 주문 조회 시작
    }, 300); // 0.5초(500ms) 지연
  };

  // const formatDate = (date) => {
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   return `${year}-${month}-${day}`;
  // };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // console.log("changeSearchPeriod >> " + isPeriodAll);

  // 주문상태(전체/주문완료/취소) 변경 함수
  const changeStatus = (status) => {
    setSelectedStatus(status);
  };

  // 주문상세 화면으로 이동
  const handleOrderDtail = (orderId: string) => {
    // navigate(`/order/orderdetail/$orderno`);
    navigate(`/order/detail/${orderId}`);
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
  //   alert("orderResultList change!!");
  // }, [orderResultList]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const domain = getDomain();
  //       const response = await http.get<BankDepositData[]>(domain + "/payment/redis", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       // if (response.status === 200) {
  //       response.data.forEach((data) => {
  //         console.log("Redis 정보 조회");
  //         console.log(data);
  //         alert(
  //           "[주문알림] 온라인입금 결제 건이 입금되어 주문 완료 되었습니다. \n- 주문일자 : 2023-11-17 \n- 주문번호:" +
  //             data.orderId +
  //             "",
  //         );
  //       });
  //       // }
  //     } catch (e: any) {
  //       console.log("Redis 정보 조회 시 오류가 발생하였습니다.");
  //     }
  //   })();
  // }, [orderResultList]);

  return (
    <>
      <OrderListContainer>
        <section className="container">
          {/* <OrderNotification /> */}

          {/* <article>
            <div className="order-header">
              <h3 className="title">주문/결제 내역</h3>
              <br />
              <h6>제목을 클릭하면 주문내역, 결제내역 등 상제정보를 확인할 수 있습니다.</h6>
            </div>
          </article> */}

          <article className="contain-search-layer">
            <div></div>
            {/* 조회기간 별 주문내역 조회 */}
            <div className="contain-search-date">
              <div className="box-date1">
                <p className="title">조회기간</p>
                <label className={`form-radio ${isPeriodType1 ? "checked" : ""}`}>
                  <input type="radio" name="p_period" value="3MONTH" onClick={() => changeSearchPeriod("3MONTH")} />
                  3개월
                </label>
                <label className={`form-radio ${isPeriodType2 ? "checked" : ""}`}>
                  {/* onclick="changeSearchPeriod('6MONTH', true)" */}
                  <input
                    type="radio"
                    name="p_period"
                    id="p_period_6"
                    value="6MONTH"
                    onClick={() => changeSearchPeriod("6MONTH")}
                  />
                  6개월
                </label>
                <label className={`form-radio ${isPeriodTypeAll ? "checked" : ""}`}>
                  {/* onclick="changeSearchPeriod('ALL', true)" */}
                  <input
                    type="radio"
                    name="p_period"
                    id="p_period_all"
                    value="ALL"
                    onClick={() => changeSearchPeriod("ALL")}
                  />
                  전체
                </label>
              </div>
              <div className="box-date2">
                <input
                  type="date"
                  placeholder="시작일"
                  name="p_startdate"
                  disabled={!isPeriodTypeAll}
                  value={startDate} // 시작일 상태와 연결
                  onChange={(e) => setStartDate(e.target.value)} // 입력 값이 변경될 때 시작일 상태를 업데이트
                />
                &nbsp; ~ &nbsp;
                <input
                  type="date"
                  placeholder="종료일"
                  name="p_enddate"
                  disabled={!isPeriodTypeAll}
                  value={endDate} // 시작일 상태와 연결
                  onChange={(e) => setEndDate(e.target.value)} // 입력 값이 변경될 때 시작일 상태를 업데이트
                />
              </div>
              <div>
                <span className="btn-orderlist">
                  <button type="button" onClick={handleOrderList}>
                    조회
                  </button>
                </span>
              </div>
            </div>
            <div className="navigation-sub-type2">
              <div className="area-inner">
                <a href="#" className={selectedStatus === "A" ? "on" : ""} onClick={() => changeStatus("A")}>
                  전체
                </a>
                <a href="#" className={selectedStatus === "1" ? "on" : ""} onClick={() => changeStatus("1")}>
                  주문 완료
                </a>
                <a href="#" className={selectedStatus === "0" ? "on" : ""} onClick={() => changeStatus("0")}>
                  주문 접수(입금대기)
                </a>
                <a href="#" className={selectedStatus === "2" ? "on" : ""} onClick={() => changeStatus("2")}>
                  취소
                </a>
              </div>
            </div>
          </article>

          {isLoading && (
            <div>
              <div className="loading-container">
                <div className="loading-content">
                  <HourglassEmptyIcon sx={{ color: "pink", fontSize: "100px" }} />
                  {/* <PuffLoader size={100} color="#368ed6" /> */}
                </div>
              </div>
              <div style={{ height: "250px" }}>&nbsp;</div>
            </div>
          )}
          {/* 주문내역 (Loop) */}
          {!isLoading &&
            orderResultList &&
            orderResultList.map((orderData, index) => (
              <article className="orders-layer" key={`item-${orderData.orderId}`}>
                {/* 도서정보(책이미지/도서명) */}

                <div className="bookinfo">
                  <figure>
                    {/* 도서이미지 */}
                    <span className="image">
                      {/* {orderData.orderItems[0].cover} */}
                      <Link to={`/page?id=${orderData.orderItems.id}`}>
                        {" "}
                        <img src={orderData.orderItems.cover} alt={orderData.orderItems.title} />
                      </Link>
                    </span>
                  </figure>
                  <div>
                    {/* 주문일자 */}
                    <div className="order-date">
                      <FormatDate date={orderData.orderDate} />
                    </div>

                    {/* 도서 카테고리 */}
                    {/* <div className="box-bookgubun">
                      <span>국내도서 에세이 한국에세이</span>
                    </div> */}
                    {/* 도서제목 */}
                    <p className="subject">
                      <Link to={`/page?id=${orderData.orderItems.id}`}>{orderData.orderItems.title}</Link>
                    </p>
                    <br />
                    {/* 주문번호 (주문상세로 이동) */}
                    <p className="order-number">
                      <strong>주문번호</strong>
                      &nbsp;&nbsp;
                      <span
                        onClick={() => {
                          handleOrderDtail(`${orderData.orderId}`);
                        }}>
                        <p>{orderData.orderId} 주문 상세 보기</p>
                        <DoubleArrowIcon />
                      </span>
                    </p>
                  </div>
                </div>

                <div className="priceinfo">
                  {/* 주문금액 */}
                  <div>
                    <div className="box-price">
                      <strong>{orderData.paymentPrice.toLocaleString()}</strong>원
                    </div>
                  </div>
                </div>
                {/* <div style={{ width: "0px" }}>&nbsp;</div> */}
                {/* 주문상태 */}
                <div className="order-state">
                  {orderData.orderStatus === "1" ? (
                    <strong>주문완료</strong>
                  ) : orderData.orderStatus === "2" ? (
                    <strong>주문취소</strong>
                  ) : (
                    <strong>
                      주문접수
                      <br />
                      <p style={{ fontSize: "14px", marginTop: "10px" }}>(입금대기)</p>
                    </strong>
                  )}
                </div>
                {/* 주문상태 */}
                {/* 주문상태 */}
                <div>
                  <div className="payment-method">
                    <strong>
                      {orderData.paymentMethod === "1"
                        ? "신용카드"
                        : orderData.paymentMethod === "2"
                        ? "실시간계좌이체"
                        : "온라인 입금"}
                    </strong>
                  </div>
                </div>
              </article>
            ))}

          {!isLoading && totalPages > 1 && (
            <nav>
              <ol>
                {showArrowLeft && (
                  <li className="numberbox btn_prev">
                    <button onClick={handlePageMinus}>{`<`}</button>
                  </li>
                )}
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
                {totalPages > 2 && (
                  <li
                    className="numberbox"
                    onClick={() => {
                      handleSetPage(2);
                    }}>
                    3
                  </li>
                )}

                {totalPages > 3 && (
                  <li
                    className="numberbox"
                    onClick={() => {
                      handleSetPage(3);
                    }}>
                    4
                  </li>
                )}
                {totalPages > 4 && (
                  <li
                    className="numberbox"
                    onClick={() => {
                      handleSetPage(4);
                    }}>
                    5
                  </li>
                )}
                {showArrowRight && (
                  <li className="numberbox">
                    <button onClick={handlePagePlus}>{`>`}</button>
                  </li>
                )}
              </ol>
            </nav>
          )}
        </section>
      </OrderListContainer>
    </>
  );
};

export default OrderList;
