import { useState } from "react";
import { PaymentInfoContainer, Wrapper } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useOrderDetailData } from "../../orderdata";
import http from "@/utils/http";

interface PaymentInfoModalProps {
  orderId?: string;
  onCancel?: () => void;
}

const PaymentInfo = ({ orderId, onCancel }: PaymentInfoModalProps) => {
  const navigate = useNavigate();

  console.log("This is PaymentInfo .......... orderId : " + orderId);

  // orderId = "2023123456796";
  const { orderDetailData, isOrderDetailValidating } = useOrderDetailData(Number(orderId));

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
      <PaymentInfoContainer>
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
        <article>
          {/* 확인 버튼 */}
          <div className="box-payment-button">
            <button className="box-blue font-blue point" onClick={onCancel}>
              확인
            </button>
          </div>
        </article>
      </PaymentInfoContainer>
    </Wrapper>
  );
};

export default PaymentInfo;
