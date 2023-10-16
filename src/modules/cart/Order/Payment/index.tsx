import axios from "axios";
import { OrderItemData, useOrderListData } from "../../orderlistdata";
import ConfirmModal from "@/components/ConfirmModal";
import { useState } from "react";
import { PaymentContainer } from "./styles";
import http from "utils/http";
import { useNavigate } from "react-router-dom";

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

  // 주문 가능 상태
  const [isOrder, setIsOrder] = useState(false);

  // 주문 데이터
  const { orderListData: orderItems, isOrderListValidating } = useOrderListData();

  const navigate = useNavigate();

  const savePayment = () => {
    orderItems.map((item) => {
      console.log(
        item.id +
          "," +
          item.itemId +
          "," +
          item.title +
          "," +
          item.priceStandard +
          "," +
          item.priceSales +
          "," +
          item.quantity +
          "," +
          item.cover,
      );
    });
    // 서버에 주무/배송 정보 등록
    // handlePost()참고
    navigate("/cart/order/done");
  };

  // const handlePost = (e: React.FormEvent) => {
  //   // 이걸 안하면 현제 페이지에 폼데이터 전송
  //   e.preventDefault();

  //   // multipart/form-data 파일업로드하려면
  //   const formData = new FormData();

  //   Array.from(fileRef.current.files).forEach((file) => {
  //     formData.append("files", file);
  //   });

  //   formData.append("title", titleRef.current.value);
  //   formData.append("content", contentRef.current.value);

  //   (async () => {
  //     const response = await http.post<PostItem>("/posts/with-file", formData);
  //     console.log(response);
  //     if (response.status === 201) {
  //       formRef.current.reset();
  //       setPosts([{ ...response.data }, ...posts]);
  //     }
  //   })();
  // };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  // 결제하기
  const handleConfirm = () => {
    // alert("확인되었습니다.");
    setIsOrder(true);
    setModalVisible(false);
    savePayment();
  };

  const handleCancel = () => {
    // alert("취소되었습니다.");
    setIsOrder(false);
    setModalVisible(false);
  };

  return (
    <PaymentContainer>
      <div className="box-submit-payment">
        <button className="btn-payment" onClick={handleOpenModal}>
          결제하기
        </button>

        <ConfirmModal
          isVisible={isModalVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          message="주문하시겠습니까?"
        />
      </div>
    </PaymentContainer>
  );
};

export default Payment;
