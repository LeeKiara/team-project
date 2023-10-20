import { useLocation } from "react-router-dom";

const Payment = () => {
  // 주문 데이터 받아오기
  const location = useLocation();
  const orderFormData = location.state?.orderBooks;

  console.log("Payment : " + orderFormData);
  console.log("Payment : " + orderFormData.deliveryName);

  return (
    <div>
      <h1>payment....</h1>
    </div>
  );
};

export default Payment;
