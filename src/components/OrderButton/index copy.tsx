import { ShoppingCart } from "@mui/icons-material";
import { OrderButtonStyle } from "./styles";

import { useNavigate } from "react-router-dom";
import { OrderItemData, useOrderListData } from "@/modules/cart/orderlistdata";

const OrderButton = ({ cartBooks }: { cartBooks: OrderItemData[] }) => {
  // const OrderButton = (cartBooks: OrderItemData[]) => {
  const { createOrderListData } = useOrderListData();
  const navigate = useNavigate();

  const handleAddOrder = () => {
    console.log("   주문대상 ^^^^^^^^^ cartBooks length" + cartBooks.length);

    cartBooks &&
      cartBooks.map((selectedItem, index) => {
        console.log("   주문대상 ^^^^^^^^^ " + selectedItem.title + ", " + selectedItem.quantity);
      });

    createOrderListData(cartBooks);

    // 주문하기 화면으로 이동
    navigate("/cart/order");
  };

  return (
    <OrderButtonStyle>
      <div>
        <button onClick={handleAddOrder}>
          <ShoppingCart className="material-icons-outlined" />
          주문하기
        </button>
      </div>
    </OrderButtonStyle>
  );
};

export default OrderButton;
