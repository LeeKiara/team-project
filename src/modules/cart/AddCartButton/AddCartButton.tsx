import { useBookCartData } from "@/modules/cart/AddCart/data";
import { useNavigate } from "react-router-dom";
import { AddCartButtonStyle } from "./styles";
import { getCookie } from "@/utils/cookie";

const AddCartButton = ({ itemId, quantity, title, cover, priceStandard, priceSales }) => {
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
          quantity: Number(quantity),
          title: title,
          cover: cover,
          priceStandard: priceStandard,
          priceSales: priceSales,
        });

        // 완료가 되면 목록 화면으로 이동
        navigate("/cart");
      }
    }
  };

  return (
    <AddCartButtonStyle>
      <div>
        <button onClick={handleSave}>장바구니 담기</button>
      </div>
    </AddCartButtonStyle>
  );
};

export default AddCartButton;
