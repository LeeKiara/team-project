import { ShoppingCart } from "@mui/icons-material";
import { OrderButtonStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import { OrderItemData, useOrderListData } from "@/modules/cart/orderlistdata";

interface OrderButtonProps {
  cartBooks: OrderItemData[]; // 상품 목록을 받을 프로퍼티
}

// const OrderButton: React.FC<OrderButtonProps> = ({ cartBooks }) => {
const OrderButton = (cartBooks) => {
  const { orderListData, createOrderListData } = useOrderListData();
  const navigate = useNavigate();

  // 주문하기
  const SaveOrder = () => {
    cartBooks.map((selectedItem, index) => {
      console.log("   주문대상 ^^^^^^^^^ " + selectedItem.title + ", " + selectedItem.quantity);
    });

    // createOrderListData(cartBooks);

    // 주문하기 화면으로 이동
    // navigate("/cart/order");
  };

  return (
    <OrderButtonStyle>
      <div>
        <h1>주문 처리 화면</h1>
        {/* 주문 대상 정보를 보여줍니다. */}
        <div>
          <h2>주문 대상 상품:</h2>
          <ul>
            {/* {cartBooks.map((selectedItem, index) => (
              <li key={index}>
                {selectedItem.title}: {selectedItem.quantity}
              </li>
            ))} */}
          </ul>
        </div>
        <button onClick={SaveOrder}>주문하기</button>
      </div>
    </OrderButtonStyle>
  );
};

export default OrderButton;
