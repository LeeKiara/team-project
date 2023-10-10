import { useState } from "react";
import { PaymentDoneContainer, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";

const PaymentDone = () => {
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      <PaymentDoneContainer>
        <div>
          <div className="text1">결제정보</div>
          <hr />
          <div>
            <div>결제방법</div>
            <div>신용카드</div>
          </div>
          <div>
            <div>카드정보</div>
            <div>1234-1234-1234-1234</div>
          </div>
          <hr />
          <div>
            <div>결제금액</div>
            <div>20,000원</div>
          </div>
          {/* 결제정보확인/메인으로 이동 버튼 */}
          <div>
            <button className="box-blue font-blue" onClick={handleShowModal}>
              확인
            </button>
          </div>
        </div>
      </PaymentDoneContainer>
    </Wrapper>
  );
};

export default PaymentDone;
