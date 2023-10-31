import Home from "@/pages/Home";
import { OrderListContainer } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "@/utils/http";
import { OrderData, OrderResponse } from "../orderdata";
import FormatDate from "@/components/FormatDate";

const OrderList = () => {
  const [selectedStatus, setSelectedStatus] = useState("A"); // 조회조건 : 주문상태(전체/주문완료/주문완료(입금대기)/취소)
  const [isPeriodType1, setPeriodType1] = useState(true); // 조회기간 3개월
  const [isPeriodType2, setPeriodType2] = useState(false); // 조회기간 6개월
  const [isPeriodTypeAll, setPeriodTypeAll] = useState(false); // 조회기간 전체
  const [startDate, setStartDate] = useState(""); // 시작일에 대한 상태 추가
  const [endDate, setEndDate] = useState(""); // 종료일에 대한 상태 추가
  const [isOrderList, setIsOrderList] = useState(true); // 주문조회 가능 여부

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
            `/order/paging?size=${MAX_SEARCH}&page=${currentPage}&startDate=${startDate}&endDate=${endDate}&orderStatus=${selectedStatus}`,
          );
          if (response.status === 200) {
            console.log("response.data.totalPages" + response.data.totalPages);
            setTotalPages(response.data.totalPages);
            setOrderResultList(response.data.content);
          }
        } catch (e: any) {
          console.log(e);
        }
      })();
    }
    // }, [isOrderList, startDate, endDate, currentPage]);
  }, [isOrderList, selectedStatus, startDate, currentPage]);

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
    setIsOrderList(true);
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

  return (
    <>
      <OrderListContainer>
        <section>
          <article>
            <div className="order-header">
              <h3 className="title">주문/결제 내역</h3>
              <br />
              <h6>제목을 클릭하면 주문내역, 결제내역 등 상제정보를 확인할 수 있습니다.</h6>
            </div>
          </article>

          <article>
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
                  주문 완료(입금대기)
                </a>
                <a href="#" className={selectedStatus === "2" ? "on" : ""} onClick={() => changeStatus("2")}>
                  취소
                </a>
              </div>
            </div>
          </article>
          {/* 주문내역 (Loop) */}
          {orderResultList &&
            orderResultList.map((orderData, index) => (
              <article className="orders-layer" key={`item-${orderData.orderId}`}>
                {/* 도서정보(책이미지/도서명) */}

                <div className="bookinfo">
                  <figure>
                    {/* 도서이미지 */}
                    <span className="image">
                      {/* {orderData.orderItems[0].cover} */}
                      <a href="" target="_blank">
                        <img src={orderData.orderItems.cover} />
                      </a>
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
                    <p className="subject">{orderData.orderItems.title}</p>
                    <br />
                    {/* 주문번호 */}
                    <p className="order-number">
                      <strong>주문번호</strong>
                      &nbsp;&nbsp;
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleOrderDtail(`${orderData.orderId}`);
                        }}>
                        {orderData.orderId}
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
                      주문완료
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
                        ? "실시간 계좌이체"
                        : "온라인 입금"}
                    </strong>
                  </div>
                </div>
              </article>
            ))}

          {totalPages > 1 && (
            <nav>
              <ol>
                {showArrowLeft && (
                  <li className="numberbox">
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
