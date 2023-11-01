import { useState } from "react";
import { OrderDoneContainer } from "./styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PaymentInfo from "../PaymentInfo";

const OrderDone = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // 주문정보 데이터 받아오기
  const location = useLocation();
  const orderId = location.state?.orderId;
  const orderStatus = location.state?.orderStatus;

  // const orderId = "1234";
  // const orderStatus = "0";

  // const { orderId } = useParams();
  // alert("orderId " + orderId);

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
              {/* 결제방법이 온라인입금인 경우 */}
              {orderStatus === "0" ? (
                <div className="text2">주문이 접수 되었습니다.</div>
              ) : (
                <div className="text2">주문결제가 완료되었습니다.</div>
              )}
              <div className="orderno box-gray">
                <h3>주문번호 {orderId}</h3>
              </div>
              {/* 결제방법이 온라인입금인 경우 */}
              {orderStatus === "0" && (
                <div>
                  <p>
                    입금계좌 : <span className="bank-account">신한은행 637-90-132345-689</span>
                  </p>
                  <p>&nbsp;</p>
                  <p className="bank-account-desc">10일 이내 입금이 되지 않을 경우 주문이 자동취소됩니다.</p>
                </div>
              )}
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
        </section>
      </OrderDoneContainer>
      {/* 결제 정보 확인 모달창 띄우기 */}
      {/* 자식의 이벤트를 처리하는 함수를 속성으로 넘겨줘야 함 */}
      {showModal && <PaymentInfo orderId={orderId} onCancel={handleHiddenModal} />}
    </>
  );
};

export default OrderDone;
