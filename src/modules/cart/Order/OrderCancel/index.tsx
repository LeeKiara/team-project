import { useState } from "react";
import { OrderCancelContainer, Wrapper } from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useOrderDetailData } from "../../orderdata";
import FormatDate from "@/components/FormatDate";

interface OrderCancelModalProps {
  orderId?: string;
  onCancel?: () => void;
}

const OrderCancel = ({ orderId, onCancel }: OrderCancelModalProps) => {
  const navigate = useNavigate();

  console.log("This is OrderCancel .......... orderId : " + orderId);

  // 페이지를 직접 테스트 할 경우 사용
  const testOrderId = "2023123456821";
  const { orderDetailData, isOrderDetailValidating } = useOrderDetailData(Number(testOrderId));

  // const { orderDetailData, isOrderDetailValidating } = useOrderDetailData(Number(orderId));

  let sumOrderPrice = 0;
  let deliveryAmt = 0;

  // 주문내역 조회 결과
  if (orderDetailData) {
    console.log("orderDetailData => " + orderDetailData);
    console.log(orderDetailData.paymentMethod + "," + orderDetailData.paymentPrice + "," + orderDetailData.postcode);

    orderDetailData.orderItems.map((item) => {
      sumOrderPrice += item.orderPrice;
      console.log(item.itemId + "," + item.title + "," + item.orderPrice);
    });

    if (sumOrderPrice < 20000) {
      deliveryAmt = 2000;
    }
    console.log("sumOrderPrice:" + sumOrderPrice + ", deliveryAmt:" + deliveryAmt);
  }

  return (
    <Wrapper>
      <OrderCancelContainer>
        <article>
          <div className="order-header">
            <h3 className="title">취소 신청</h3>
            <br />
            <h6></h6>
          </div>
        </article>

        {/* 주문일자 / 주문번호 */}
        <article>
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
            </div>
          </div>
        </article>

        {/* 취소 신청할 상품입니다. */}
        <article>
          <div className="article-layer-orderitems">
            <article>
              <div>주문 상품</div>
            </article>
            <article className="box-bookinfo-wrap">
              {orderDetailData.orderItems.map((bookItem, index) => (
                <div className="bookinfo" key={`item-${bookItem.itemId}`}>
                  <div className="link-detail">
                    <span className="image">
                      <Link to={`/page?id=${bookItem.id}`}>
                        <img src={bookItem.cover} />
                      </Link>
                    </span>
                    <div className="bookItem-title">
                      <Link to={`/page?id=${bookItem.id}`}>{bookItem.title}</Link>
                    </div>
                    <div className="bookItem-quantity">수량 : {bookItem.quantity}</div>
                  </div>
                </div>
              ))}
            </article>
          </div>
        </article>

        <article>
          {/* 확인 버튼 */}
          <div className="box-payment-button">
            <button className="box-blue font-blue point" onClick={onCancel}>
              확인
            </button>
          </div>
        </article>
      </OrderCancelContainer>
    </Wrapper>
  );
};

export default OrderCancel;
