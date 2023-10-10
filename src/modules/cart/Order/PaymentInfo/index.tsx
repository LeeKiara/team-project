import { useState } from "react";
import { PaymentInfoContainer, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";

interface PaymentInfoModalProps {
  onCancel: () => void;
}

const PaymentInfo = ({ onCancel }: PaymentInfoModalProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <PaymentInfoContainer>
        <div>
          <h1>결제 정보</h1>
        </div>
        <div className="box-payment-wrap">
          {/* 주문 정보 */}
          <div className="box-order-info">
            <dl>
              <dt>주문금액</dt>
              <dd>
                <span className="val">15,100</span>
                <span className="unit">원</span>
              </dd>
            </dl>
            <dl>
              <dt>상품금액</dt>
              <dd>
                <span className="val">13,100</span>
                <span className="unit">원</span>
              </dd>
            </dl>
            <dl>
              <dt>배송비</dt>
              <dd>
                <span className="val">2,000</span>
                <span className="unit">원</span>
              </dd>
            </dl>
          </div>
          {/* 결제 정보 */}
          <div className="box-payment-info">
            <dl>
              <dt>결제금액</dt>
              <dd>
                <span className="val">13,100</span>
                <span className="unit">원</span>
              </dd>
            </dl>
            <dl>
              <dt>
                신용카드:
                <br /> 카드번호
              </dt>
              <dd>
                <span className="val">13,100</span>
                <span className="unit">원</span>
              </dd>
            </dl>
          </div>
        </div>
        {/* 확인 버튼 */}
        <div className="box-payment-button">
          <button className="box-blue font-blue point" onClick={onCancel}>
            확인
          </button>
        </div>
      </PaymentInfoContainer>
    </Wrapper>
  );
};

export default PaymentInfo;
