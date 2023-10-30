import Home from "@/pages/Home";
import { OrderDetailContainer } from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import http from "@/utils/http";
import { OrderDeliveryResponse, useOrderDetailData } from "../orderdata";
import FormatDate from "@/components/FormatDate";

const OrderDetail = () => {
  const navigate = useNavigate();

  // 주문번호 파라메터 받음
  const { orderId } = useParams();
  // const testOrderId = "2023123456789";

  const { orderDetailData, isOrderDetailValidating } = useOrderDetailData(Number(orderId));
  const [stateOrderData, setStateOrderData] = useState(orderDetailData);
  const [isUpdateOrderData, setIsUpdateOrderData] = useState(false);

  let sumOrderPrice = 0;
  let deliveryAmt = 0;

  // 주문 데이터 초기화 설정
  useEffect(() => {
    if (orderDetailData) {
      setStateOrderData(orderDetailData);
    }
  }, [orderDetailData, isUpdateOrderData]);

  if (stateOrderData) {
    console.log(
      "*** stateOrderData => paymentMethod:" +
        stateOrderData.paymentMethod +
        ",paymentPrice:" +
        stateOrderData.paymentPrice +
        ",postcode:" +
        stateOrderData.postcode,
      ",stateOrderData orderStatus:" + stateOrderData.orderStatus,
    );
  }

  // 주문내역 조회 결과
  if (orderDetailData) {
    orderDetailData.orderItems.map((item) => {
      sumOrderPrice += item.orderPrice;
      console.log(item.itemId + "," + item.title + "," + item.orderPrice);
    });

    if (sumOrderPrice < 20000) {
      deliveryAmt = 2000;
    }
    console.log("sumOrderPrice:" + sumOrderPrice + ", deliveryAmt:" + deliveryAmt);
  }

  // 주문취소 처리
  const handleOrderCancel = () => {
    const isConfirmed = window.confirm("주문을 취소하시겠습니까?");
    if (isConfirmed) {
      (async () => {
        try {
          // http://localhost:8081/order/detail/cancel/2023123456789
          const response = await http.put(`/order/detail/cancel/${orderId}`);

          if (response.status === 200) {
            console.log("주문 취소 완료" + response.data);

            alert("주문이 취소 되었습니다.");

            orderDetailData.orderStatus = "2";
            setIsUpdateOrderData(true);

            // navigate(`/order/done/${orderId}`);
          }
        } catch (e: any) {
          console.log(e);
          alert("시스템 오류가 발생하였습니다.");
          navigate("/");
        }
      })();
    }
  };

  // 주문목록 화면으로 이동
  const handleOrderList = () => {
    navigate(`/order/list`);
  };

  return (
    <>
      <OrderDetailContainer>
        <section>
          <article>
            <div className="order-header">
              <h3 className="title">주문/결제 조회 상세</h3>
              <br />
              <h6></h6>
            </div>
          </article>

          <article>
            <div></div>
            {/* 주문일자 / 주문번호 */}
            <div className="order-summary-box">
              <div className="box_header">
                <div className="order-date-no">
                  <span className="order_date" data-order-date="">
                    <FormatDate date={orderDetailData.orderDate} />
                  </span>
                  <span className="gap">|</span>
                  <span className="order_num">
                    주문번호
                    <span className="num" data-order-id="">
                      {orderDetailData.orderId}
                    </span>
                  </span>
                </div>
                <div className="order-cancel">
                  {stateOrderData.orderStatus === "1" && <button onClick={handleOrderCancel}>주문취소</button>}
                  {stateOrderData.orderStatus === "2" && <p style={{ color: "red" }}>주문취소완료</p>}
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="article-layer-title">결제정보</div>
            <div className="box-payment-wrap">
              {/* 주문 정보 */}
              <div className="box-order-info">
                <dl>
                  <dt>주문금액</dt>
                  <dd>
                    <span></span>
                    <span>{sumOrderPrice.toLocaleString()}원</span>
                  </dd>
                </dl>
                {/* <dl>
                  <dt>상품금액</dt>
                  <dd>
                    <span></span>
                    <span>원</span>
                  </dd>
                </dl> */}
                <dl>
                  <dt>배송비</dt>
                  <dd>
                    <span></span>
                    <span>{deliveryAmt.toLocaleString()}원</span>
                  </dd>
                </dl>
              </div>
              {/* 결제 정보 */}
              <div className="box-payment-info">
                <dl>
                  <dt>결제금액</dt>
                  <dd>
                    <span>{orderDetailData.paymentPrice.toLocaleString()}</span>
                    <span>원</span>
                  </dd>
                </dl>
                <dl>
                  <dt>결제수단</dt>
                  <dd>
                    <span>
                      {orderDetailData.paymentMethod === "1"
                        ? "신용카드"
                        : orderDetailData.paymentMethod === "2"
                        ? "실시간 계좌이체"
                        : "무통장입금"}
                    </span>
                    <span></span>
                  </dd>
                </dl>
              </div>
            </div>
          </article>
          <div className="article-layer-orderitems">
            <article>
              <div>주문 상품</div>
            </article>
            <article className="box-bookinfo-wrap">
              {orderDetailData.orderItems.map((bookItem, index) => (
                <div className="bookinfo" key={`item-${bookItem.itemId}`}>
                  <div className="link-detail">
                    <span className="image">
                      <a href="" target="_blank">
                        <img src={bookItem.cover} />
                      </a>
                    </span>
                    <div className="bookItem-title">
                      <Link to="">{bookItem.title} </Link>
                    </div>
                    <div className="bookItem-quantity">수량 : {bookItem.quantity}</div>
                  </div>
                </div>
              ))}
            </article>
          </div>
          <article>
            <div className="article-layer-title">배송정보</div>
            <div className="box-payment-wrap">
              <div className="box-order-info">
                <dl>
                  <dt>기본정보</dt>
                  <dd></dd>
                </dl>
                <dl>
                  <dt></dt>
                  <dd></dd>
                </dl>
                <dl>
                  <dt></dt>
                  <dd></dd>
                </dl>
                <dl>
                  <dt>배송요청사항</dt>
                  <dd></dd>
                </dl>
              </div>
              {/* 배송 주소 */}
              <div className="box-payment-info">
                <dl>
                  <dt>
                    {orderDetailData.deliveryName} &nbsp;&nbsp;&nbsp;{orderDetailData.deliveryPhone}
                  </dt>
                </dl>
                <dl>
                  <dt>
                    [{orderDetailData.postcode}] {orderDetailData.address} ({orderDetailData.detailAddress})
                  </dt>
                </dl>
                <dl>
                  <dt style={{ height: "1px" }}></dt>
                </dl>
                {/* 배송요청사항 */}
                <dl>
                  <dt>{orderDetailData.deliveryMemo}</dt>
                </dl>
              </div>
            </div>
          </article>

          <article>
            <div className="box-submit-payment">
              <span className="btn-order">
                <button onClick={handleOrderList}>주문/배송 조회</button>
              </span>
            </div>
          </article>
          <article>
            <div style={{ height: "50px" }}></div>
          </article>
        </section>
      </OrderDetailContainer>
    </>
  );
};

export default OrderDetail;
