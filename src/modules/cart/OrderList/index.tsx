import Home from "@/pages/Home";
import { OrderListContainer } from "./styles";
import { useEffect, useState } from "react";
import { useCartData } from "../cartdata";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const [isPeriodType1, setPeriodType1] = useState(true); // 조회기간 3개월 선택관리
  const [isPeriodType2, setPeriodType2] = useState(false); // 조회기간 6개월 선택관리
  const [isPeriodTypeAll, setPeriodTypeAll] = useState(false); // 조회기간 전체 선택관리
  const [startDate, setStartDate] = useState(""); // 시작일에 대한 상태 추가
  const [endDate, setEndDate] = useState(""); // 종료일에 대한 상태 추가

  const navigate = useNavigate();

  // 주문/결제 데이터
  // TODO : 주문된 데이터로 변경(테스트를 위해 장바구니 데이터 조회함)
  const {
    cartData: orderList,
    mutateCartData,
    isCartDataValidating,
  } = useCartData();

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
  };

  useEffect(() => {
    if (isPeriodType1) {
      setStartDate(""); // 조회 기간이 3개월 또는 6개월이면 startDate를 초기화
      setEndDate(""); // 조회 기간이 3개월 또는 6개월이면 endDate를 초기화
    }
    if (isPeriodType2) {
      setStartDate(""); // 조회 기간이 3개월 또는 6개월이면 startDate를 초기화
      setEndDate(""); // 조회 기간이 3개월 또는 6개월이면 endDate를 초기화
    }
  }, [isPeriodType1, isPeriodType2]);

  // console.log("changeSearchPeriod >> " + isPeriodAll);

  const [selectedStatus, setSelectedStatus] = useState(""); // 조회조건 : 주문상태(전체/주문완료/취소)

  // 주문상태(전체/주문완료/취소) 변경 함수
  const changeStatus = (status) => {
    setSelectedStatus(status);
  };

  // 주문상세 화면으로 이동
  const handleOrderDtail = (orderno: string) => {
    // navigate(`/order/orderdetail/$orderno`);
    navigate(`/order/detail`);
  };

  return (
    <>
      <OrderListContainer>
        <section>
          <article>
            <div className="order-header">
              <h3 className="title">주문/결제 내역</h3>
              <br />
              <h6>
                제목을 클릭하면 주문내역, 결제내역 등 상제정보를 확인할 수
                있습니다.
              </h6>
            </div>
          </article>

          <article>
            <div></div>
            {/* 조회기간 별 주문내역 조회 */}
            <div className="contain-search-date">
              <div className="box-date1">
                <p className="title">조회기간</p>
                <label
                  className={`form-radio ${isPeriodType1 ? "checked" : ""}`}>
                  <input
                    type="radio"
                    name="p_period"
                    value="3MONTH"
                    onClick={() => changeSearchPeriod("3MONTH")}
                  />
                  3개월
                </label>
                <label
                  className={`form-radio ${isPeriodType2 ? "checked" : ""}`}>
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
                <label
                  className={`form-radio ${isPeriodTypeAll ? "checked" : ""}`}>
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
                <span className="btn-type1">
                  <button type="button">조회</button>
                </span>
              </div>
            </div>
            <div className="navigation-sub-type2">
              <div className="area-inner">
                <a
                  href="#"
                  className={selectedStatus === "" ? "on" : ""}
                  onClick={() => changeStatus("")}>
                  전체
                </a>
                <a
                  href="#"
                  className={selectedStatus === "D" ? "on" : ""}
                  onClick={() => changeStatus("D")}>
                  주문 완료
                </a>
                <a
                  href="#"
                  className={selectedStatus === "C" ? "on" : ""}
                  onClick={() => changeStatus("C")}>
                  취소
                </a>
              </div>
            </div>
          </article>
          {/* 주문내역 (Loop) */}
          {orderList &&
            orderList.map((cartCashData, index) => (
              <article className="cart-layer" key={`item-${cartCashData.id}`}>
                {/* 도서정보(책이미지/도서명) */}

                <div className="bookinfo">
                  <figure>
                    <span className="image">
                      <a
                        href={`/page?keyword=${cartCashData.itemId}`}
                        target="_blank">
                        <img
                          src={cartCashData.cover}
                          alt={cartCashData.title}
                        />
                      </a>
                    </span>
                  </figure>
                  <div>
                    <div className="box-bookgubun">
                      <span className="icon-bookgubun">
                        {cartCashData.gubun}
                      </span>
                    </div>
                    <p>
                      <a
                        className="subject"
                        href={`/page?keyword=${cartCashData.itemId}`}
                        target="_blank">
                        {cartCashData.id},{cartCashData.title}
                      </a>
                      <br />
                      <p className="order-number">
                        <strong>주문번호</strong>
                        &nbsp;&nbsp;
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleOrderDtail("20231015213531-0001285883");
                          }}>
                          20231015213531-0001285883
                        </span>
                      </p>
                    </p>
                  </div>
                </div>

                <div className="priceinfo">
                  {/* 주문금액 */}
                  <div>
                    <div className="box-price">
                      <strong>{cartCashData.priceSales}</strong>원
                    </div>
                  </div>
                </div>
                <div style={{ width: "100px" }}>&nbsp;</div>
                {/* 주문상태 */}
                <div>
                  <div className="order-state">
                    <strong>주문완료</strong>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </OrderListContainer>
    </>
  );
};

export default OrderList;
