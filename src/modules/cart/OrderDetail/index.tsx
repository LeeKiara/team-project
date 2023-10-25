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
  const testOrderId = "1";

  const { orderDetailData, isOrderDetailValidating } = useOrderDetailData(Number(testOrderId));

  // 주문내역 조회 결과
  if (orderDetailData) {
    console.log("orderDetailData => " + orderDetailData);
    console.log(orderDetailData.paymentMethod + "," + orderDetailData.paymentPrice + "," + orderDetailData.postcode);

    orderDetailData.orderItems.map((item) => {
      console.log(item.itemId + "," + item.title);
    });
  }

  // 주문/결제 데이터
  // TODO : 주문된 데이터로 변경(테스트를 위해 장바구니 데이터 조회함)
  // const { cartData: orderList, isCartDataValidating } = useCartData();
  // const { booksItem: books, isBookItemValidating } = useBooksItem();
  // alert("2. orderId " + orderId);

  // useEffect(() => {
  //   if (isFetchOrderData) {
  //     (async () => {
  //       try {
  //         // http://localhost:8081/order/detail/2023123456789
  //         const response = await http.get<OrderDeliveryResponse>(`/order/detail/${orderId}`);
  //         if (response.status === 200) {
  //           console.log(response);
  //         }
  //         setIsFetchOrderData(false);
  //       } catch (e: any) {
  //         console.log(e);
  //       }
  //     })();
  //   }
  // }, [isFetchOrderData]);

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
            <div className="order_summary_box">
              <div className="box_header">
                <div className="label">
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
                    <span>원</span>
                  </dd>
                </dl>
                <dl>
                  <dt>상품금액</dt>
                  <dd>
                    <span></span>
                    <span>원</span>
                  </dd>
                </dl>
                <dl>
                  <dt>배송비</dt>
                  <dd>
                    <span></span>
                    <span>원</span>
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
