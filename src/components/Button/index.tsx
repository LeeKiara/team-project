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
    navigate(`/cart`);
  };

  return (
    <ButtonStyle>
      <div>
        <button onClick={handleAddCart}>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </button>
      </div>
    </ButtonStyle>
  );
};

export default Button;
