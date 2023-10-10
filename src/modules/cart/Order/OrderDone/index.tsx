import Home from "@/pages/Home";
import { useState } from "react";
import { OrderDoneContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import PaymentDone from "../PaymentDone";

const OrderDone = () => {
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const [showModal, setShowModal] = useState(false);

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
                <h3>주문번호 2023123456789</h3>
              </div>
              {/* 결제정보확인/메인으로 이동 버튼 */}
              <div className="box-pagemove">
                <button
                  className="box-blue font-blue pointer"
                  onClick={handleShowModal}
                >
                  결제 정보 확인
                </button>
                <button className="box-blue font-blue pointer">
                  메인으로 이동
                </button>
              </div>
            </div>
          </article>

          <article className=""></article>
        </section>
      </OrderDoneContainer>
      {showModal && <PaymentDone />}
    </>
  );
};

export default OrderDone;
