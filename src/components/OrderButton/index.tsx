import { ShoppingCart } from "@mui/icons-material";
import { OrderButtonStyle } from "./styles";

import { useNavigate } from "react-router-dom";
import { OrderItemData } from "@/modules/cart/orderdata";
import { useState } from "react";
import ShowMessageModal from "../ShowMessageModal";

const OrderButton = ({ cartBooks }: { cartBooks: OrderItemData[] }) => {
  const navigate = useNavigate();

  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleShowMessageButton = () => {
    setShowMessageModal(true);
  };

  const handleCancel = () => {
    setShowMessageModal(false);
  };

  const handleAddOrder = () => {
    console.log("   주문대상 ^^^^^^^^^ cartBooks length" + cartBooks.length);

    if (cartBooks.length === 0) {
      // alert("상품을 선택하세요.");
      setShowMessageModal(true);
      return;
    }

    cartBooks &&
      cartBooks.map((selectedItem, index) => {
        console.log("   주문대상 ^^^^^^^^^ " + selectedItem.title + ", " + selectedItem.quantity);
      });

    // 주문하기 화면으로 이동
    navigate("/order", {
      state: {
        cartBooks: cartBooks,
      },
    });
  };

  return (
    <OrderButtonStyle>
      <div>
        <button onClick={handleAddOrder}>
          <ShoppingCart className="material-icons-outlined" />
          주문하기
        </button>

        {showMessageModal && <ShowMessageModal message="상품을 선택하세요." onCancel={handleCancel} />}
      </div>
    </OrderButtonStyle>
  );
};

export default OrderButton;
