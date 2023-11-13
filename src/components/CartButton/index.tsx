import { BookCartData, useBookCartData } from "@/modules/cart/AddCart/data";
import { useNavigate } from "react-router-dom";
import { CartButtonStyle } from "./styles";
import { getCookie } from "@/utils/cookie";
import { ShoppingCart } from "@mui/icons-material";

const CartButton = ({ itemId, quantity, title, cover, priceStandard, priceSales }: BookCartData) => {
  const navigate = useNavigate();
  const token = getCookie("token");

  const { bookCartData, createBookCartData } = useBookCartData(0);

  const handleSave = () => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    } else {
      const isConfirmed = window.confirm("장바구니에 추가하시겠습니까?");
      if (isConfirmed) {
        createBookCartData({
          itemId: Number(itemId),
          title: title,
          cover: cover,
          priceStandard: priceStandard,
          priceSales: priceSales,
          quantity: Number(quantity),
        });

        // 완료가 되면 목록 화면으로 이동
        navigate("/cart");
      }
    }
  };

  return (
    <CartButtonStyle>
      <div>
        {/* <button onClick={handleSave}>장바구니 담기</button> */}

        <span onClick={handleSave}>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </span>
      </div>
    </CartButtonStyle>
  );
};

export default CartButton;
