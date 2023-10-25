import { ShoppingCart } from "@mui/icons-material";
import { ButtonStyle } from "./styles";
import { useCartData } from "@/modules/cart/cartdata";
import { CartData } from "@/modules/cart/cartdata";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Button = ({ gubun, itemId, title, cover, priceStandard, priceSales, quantity }: CartData) => {
  const { createCartData } = useCartData();
  const navigate = useNavigate();

  const handleAddCart = useCallback(
    (event) => {
      event.preventDefault();
      console.log("진짜 진짜 담는다????");
      createCartData({
        gubun,
        itemId,
        title,
        cover,
        priceStandard,
        priceSales,
        quantity,
      });
      // navigate(`/cart`);
    },
    [{ gubun, itemId, title, cover, priceStandard, priceSales, quantity }],
  );

  const handleConfirm = useCallback(
    (e) => {
      e.preventDefault();
      const isConfirmed = window.confirm("장바구니에 추가하시겠습니까?");
      if (isConfirmed) {
        // 사용자가 확인을 클릭한 경우에만 addCart 함수를 호출
        console.log("장바구니 담는다!!!!!!");
        handleAddCart(e);
      }
    },
    [{ gubun, itemId, title, cover, priceStandard, priceSales, quantity }],
  );

  return (
    <ButtonStyle>
      <div key={itemId}>
        <span
          onClick={(e) => {
            handleConfirm(e);
          }}>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </span>
      </div>
    </ButtonStyle>
  );
};

export default Button;
