import { MutableRefObject, useRef, useState } from "react";
import { OrderCancelContainer, Wrapper } from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useOrderDetailData } from "../../orderdata";
import FormatDate from "@/components/FormatDate";
import http from "@/utils/http";

interface OrderCancelModalProps {
  orderId?: string;
  onConfirm: (payload: { cancelMemo: string }) => void;
  onCancel: () => void;
}

const OrderCancel = ({ orderId, onConfirm, onCancel }: OrderCancelModalProps) => {
  const navigate = useNavigate();
  // 취소 사유
  const [cancelMemo, setCancelMemo] = useState("");
  const cancelMemoRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [stepItemActive, setStepItemActive] = useState("1");

  console.log("This is OrderCancel .......... orderId : " + orderId);

  // 페이지를 직접 테스트 할 경우 사용
  // const testOrderId = "12";
  // const { orderDetailData, isOrderDetailValidating } = useOrderDetailData(Number(testOrderId));

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

  const handlePrevStep = () => {
    setStepItemActive("1");
  };
  const handleNextStep = () => {
    setStepItemActive("2");
  };

  const handleChangeCancelMemo = (event) => {
    const selectedValue = event.target.value;
    setCancelMemo(selectedValue);
  };

  // 주문취소 처리
  // const handleOrderCancel = () => {
  //   const isConfirmed = window.confirm("주문을 취소하시겠습니까?");
  //   if (isConfirmed) {
  //     (async () => {
  //       try {
  //         interface OrderModityRequest {
  //           orderId: number; // 주문 id
  //           orderStatus: string; // 주문상태
  //           cancelMemo: string; // 주문 취소 메모
  //         }

  //         var saveCancelMemo = cancelMemo;
  //         if (cancelMemoRef.current.value != "") {
  //           saveCancelMemo = cancelMemoRef.current.value;
  //         }

  //         const response = await http.put<OrderModityRequest>(`/order/detail/cancel`, {
  //           orderId: Number(orderId),
  //           orderStatus: "2",
  //           cancelMemo: saveCancelMemo,
  //         });

  //         if (response.status === 200) {
  //           console.log("주문 취소 완료" + response.data);

  //           alert("주문이 취소 되었습니다.");

  //           orderDetailData.orderStatus = "2";
  //           // setIsUpdateOrderData(true);

  //         }
  //       } catch (e: any) {
  //         console.log(e);
  //         alert("시스템 오류가 발생하였습니다.");
  //         navigate("/");
  //       }
  //     })();
  //   }
  // };

  // 주문취소 Modal에 취소 사유 전달하기
  const handleConfirm = () => {
    var saveCancelMemo = cancelMemo;
    if (cancelMemoRef.current.value != "") {
      saveCancelMemo = cancelMemoRef.current.value;
    }
    onConfirm({
      cancelMemo: saveCancelMemo,
    });
  };
  return (
    <OrderCancelContainer>
      <Wrapper>
        <section>
          <article className="article-top-header">
            <div>
              <h3 className="title">취소 신청</h3>
            </div>
            <div onClick={onCancel}>X</div>
          </article>

          {/* 주문일자 / 주문번호 */}
          <article>
            <div className="order-summary-box">
              <div className="box_header">
                <div className="order-date-no">
                  <span className="order_date" data-order-date="">
                    <FormatDate date={orderDetailData.orderDate} />
                  </span>
                  {/* <span className="gap">|</span> */}
                  <span className="order_num">
                    &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;주문번호
                    <span className="num" data-order-id="">
                      {orderDetailData.orderId}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* 단계 표시 : 취소 상품 확인 / 취소 사유입력 */}
          <article className="order-step-box">
            <ol className="step_round_text_list">
              <li className={`${stepItemActive === "1" ? "step_item active" : "step_item"}`}>
                <span className="step_num">1</span>취소 상품 확인
              </li>
              <li className={`${stepItemActive === "2" ? "step_item active" : "step_item"}`}>
                <span className="step_num">2</span>취소 사유입력
              </li>
            </ol>
          </article>

          {/* 취소 신청할 상품입니다. */}
          <article className="order-step-box-title">
            <div>취소 신청할 상품을 확인해 주세요.</div>
          </article>

          {/* 도서 리스트 */}
          <article className={`${stepItemActive === "1" ? "step_item_one active" : "step_item_one"}`}>
            <div className="scroll-container">
              <ol className="scroll-content box-bookinfo-wrap">
                {orderDetailData.orderItems.map((bookItem, index) => (
                  <li>
                    <div>
                      <Link to={`/page?id=${bookItem.id}`}>
                        <img src={bookItem.cover} />
                      </Link>
                    </div>
                    <div className="bookinfo-title">
                      <div>
                        <Link to={`/page?id=${bookItem.id}`}>{bookItem.title}</Link>
                      </div>
                      <div>수량 : {bookItem.quantity}</div>
                    </div>
                    <div>{bookItem.orderPrice.toLocaleString()}원</div>
                  </li>
                ))}
              </ol>
            </div>
          </article>
          {/* 취소 사유 입력 */}
          <article className={`${stepItemActive === "2" ? "step_item_two active" : "step_item_two"}`}>
            <div className="scroll-container">
              <ol className="scroll-content box-cancel-form-wrap">
                <li style={{ paddingTop: "0px", fontSize: "14px" }}>
                  취소 사유<span style={{ color: "green" }}>*</span>
                </li>
                <li className="cancel-memo">
                  <select onChange={handleChangeCancelMemo} className="custom-select">
                    <option value="">취소사유를 입력해 주세요.</option>
                    <option value="구매의사 없음">구매의사 없음</option>
                    <option value="서비스 및 상품 불만족">서비스 및 상품 불만족</option>
                    <option value="상품 정보 상이">상품 정보 상이</option>
                    <option value="상품 품절">상품 품절</option>
                    <option value="상품 오주문">상품 오주문</option>
                    <option value="상품 재주문">상품 재주문</option>
                    <option value="DIRECT">직접입력</option>
                  </select>
                  <input
                    type="text"
                    name="cancel-memo-direct"
                    placeholder="(선택)취소상세 사유를 입력해 주세요.(50자)"
                    ref={cancelMemoRef}
                    maxLength={50}
                  />
                </li>
              </ol>
            </div>
          </article>

          <article>
            {/* 다음 버튼 */}
            <div className="box-payment-button">
              {stepItemActive === "1" && (
                <div>
                  <button className="box-blue" onClick={handleNextStep}>
                    다음
                  </button>
                </div>
              )}
              {stepItemActive === "2" && (
                <div>
                  <button className="box-gray" onClick={handlePrevStep}>
                    이전
                  </button>
                  <button className="box-blue" onClick={handleConfirm}>
                    취소 신청
                  </button>
                </div>
              )}
            </div>
          </article>
        </section>
      </Wrapper>
    </OrderCancelContainer>
  );
};

export default OrderCancel;
