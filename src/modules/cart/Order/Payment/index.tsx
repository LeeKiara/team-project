import axios from "axios";
import { OrderItemData } from "../../orderlistdata";
import ConfirmModal from "@/components/ConfirmModal";
import { useState } from "react";
import { PaymentContainer } from "./styles";

export interface PaymentData {
  id?: number; // id값은 나중에 생성

  // 주문자 정보
  orderUserId: string;
  orderHp1: string;
  orderHp2: string;
  orderHp3: string;
  orderEmail1: string;
  orderEmail2: string;

  // 배송지 정보
  deliveryName: string;
  deliveryHp1: string;
  deliveryHp2: string;
  deliveryHp3: string;
  deliveryAddr1: string;
  deliveryAddr2: string;
  deliveryMemo: string;

  // 결제수단 "CARD | BANK | DEPOSIT"
  paymentMethod: string;

  // 주문도서 정보
  bookItem: OrderItemData[];
}

// const INIT_DATA: PaymentData[] = [];
const INIT_DATA: PaymentData = {
  orderUserId: "",
  orderHp1: "",
  orderHp2: "",
  orderHp3: "",
  orderEmail1: "",
  orderEmail2: "",
  deliveryName: "",
  deliveryHp1: "",
  deliveryHp2: "",
  deliveryHp3: "",
  deliveryAddr1: "",
  deliveryAddr2: "",
  deliveryMemo: "",
  paymentMethod: "CARD", // 또는 다른 초기 결제수단을 선택
  bookItem: [],
};

const paymentApi = axios.create({
  baseURL: "http://localhost:9090",
});

const handlePayment = () => {};
// const handleModifyModalConfirm = ({
//   index,
//   memo,
// }: {
//   index: number;
//   memo: string;
// }) => {
//   (async () => {
//     const response = await axios.put(
//       `http://localhost:9090/todos/${todoList[index].id}`,
//       {
//         memo,
//       }
//     );
//     console.log(response);

//     // 특정 요소의 값만 변경된 배열을 생성하여 반환
//     // map
//     setTodoList(
//       todoList.map((item, idx) => {
//         // 수정중인 요소와 같은 인덱스이면
//         if (index === idx) {
//           // 메모를 수정
//           return { index, memo };
//         }
//         return item;
//       })
//     );
//     setShowModifyModal(false);
//   })();
// };

// const Payment = ({ paymentInfo }: { paymentInfo: PaymentData }) => {
const Payment = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    // alert("확인되었습니다.");
    setModalVisible(false);
  };

  const handleCancel = () => {
    // alert("취소되었습니다.");
    setModalVisible(false);
  };

  return (
    <PaymentContainer>
      <div className="box-submit-payment">
        <button className="btn-payment" onClick={handleOpenModal}>
          결제하기
        </button>
        <ConfirmModal isVisible={isModalVisible} onConfirm={handleConfirm} onCancel={handleCancel} message="주문하시겠습니까?" />
      </div>
    </PaymentContainer>
  );
};

export default Payment;
