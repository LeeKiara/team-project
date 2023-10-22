import { useState } from "react";
import { OrderDoneContainer } from "./styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PaymentInfo from "../PaymentInfo";

const { orderId } = useParams();
alert("orderId " + orderId);

const OrderDone = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHiddenModal = () => {
    setShowModal(false);
  };

  const handleGoHome = () => {
    navigate("/order/list");
  };

  return (
    <>
      <OrderDoneContainer>
        <section>
          <article>
            <div>{/* <h3>주문완료</h3> */}</div>
          </article>

          {/* 주문완료 */}
          <article>
            <div className="box-order-done">
              <div className="text1">도서몰을 이용해주셔서 감사합니다.</div>
              <div className="text2">주문결제가 완료되었습니다.</div>
              <div className="orderno box-gray">
                <h3>주문번호 {orderId}</h3>
              </div>
              {/* 결제정보확인/메인으로 이동 버튼 */}
              <div className="box-pagemove">
                <button className="box-blue font-blue pointer" onClick={handleShowModal}>
                  결제 정보 확인
                </button>
                <button className="box-blue font-blue pointer" onClick={handleGoHome}>
                  주문/배송 목록 조회
                </button>
              </div>
            </div>
          </article>

          <article className=""></article>
        </section>
      </OrderDoneContainer>
      {/* 결제 정보 확인 모달창 띄우기 */}
      {/* 자식의 이벤트를 처리하는 함수를 속성으로 넘겨줘야 함 */}
      {showModal && <PaymentInfo onCancel={handleHiddenModal} />}
    </>
  );
};

export default OrderDone;
