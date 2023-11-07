import { ShoppingCart } from "@mui/icons-material";
import { OrderButtonStyle } from "./styles";

import { useNavigate } from "react-router-dom";
import { OrderItemData } from "@/modules/cart/orderdata";
import { useState } from "react";
import ShowMessageModal from "../ShowMessageModal";

const OrderButton = ({ cartBooks }: { cartBooks: OrderItemData[] }) => {
  const navigate = useNavigate();

  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showMessageModal2, setShowMessageModal2] = useState(false);

  const handleShowMessageButton = () => {
    setShowMessageModal(true);
  };

  const handleCancel = () => {
    setShowMessageModal(false);
    setShowMessageModal2(false);
  };

  const handleAddOrder = () => {
    console.log("   주문대상 ^^^^^^^^^ cartBooks length" + cartBooks.length);

    if (cartBooks.length === 0) {
      // alert("상품을 선택하세요.");
      setShowMessageModal(true);
      return;
    }

    let isExistStockStatus = "N";

    cartBooks &&
      cartBooks.map((selectedItem, index) => {
        if (selectedItem.stockStatus === "품절" || selectedItem.stockStatus === "예약상품") {
          // 품절 or 예약상품
          isExistStockStatus = "Y";
        }
        console.log(
          "   주문대상 ^^^^^^^^^ title:" +
            selectedItem.title +
            ", quantity:" +
            selectedItem.quantity +
            ",stockStatus:" +
            selectedItem.stockStatus,
        );
      });

    if (isExistStockStatus === "Y") {
      // 품절 or 예약상품
      // alert("품절 또는 예약상품은 주문 불가입니다.");
      setShowMessageModal2(true);
      return;
    }

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
        {showMessageModal2 && (
          <ShowMessageModal message="품절 또는 예약상품은 주문 불가입니다." onCancel={handleCancel} />
        )}
      </div>
    </OrderButtonStyle>
  );
};

export default OrderButton;
