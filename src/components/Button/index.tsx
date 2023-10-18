import { ShoppingCart } from "@mui/icons-material";
import { ButtonStyle } from "./styles";
import { useCartData } from "@/modules/cart/cartdata";
import { CartData } from "@/modules/cart/cartdata";
import { useNavigate } from "react-router-dom";

const Button = ({ gubun, itemId, title, cover, priceStandard, priceSales, quantity }: CartData) => {
  const { createCartData } = useCartData();
  const navigate = useNavigate();

  const handleAddCart = () => {
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
  };

  const handleConfirm = () => {
    const isConfirmed = window.confirm("장바구니에 추가하시겠습니까?");

    if (isConfirmed) {
      // 사용자가 확인을 클릭한 경우에만 addCart 함수를 호출
      handleAddCart();
    }
  };

  return (
    <ButtonStyle>
      <div key={itemId}>
        <button onClick={handleConfirm}>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </button>
      </div>
    </ButtonStyle>
  );
};

export default Button;
