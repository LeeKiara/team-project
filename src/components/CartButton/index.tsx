import { ShoppingCart } from "@mui/icons-material";
import { CartButtonStyle } from "./styles";
import { CartData, useCartData } from "@/modules/cart/CartForm/data";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import http from "@/utils/http";
import { getCookie } from "@/utils/cookie";

const CartButton = ({ itemId, quantity, title, cover, priceStandard, priceSales }: CartData) => {
  const token = getCookie("token");
  const navigate = useNavigate();

  const { cartData, createCartData } = useCartData();

  const handleAddCart = (event) => {
    event.preventDefault();
    if (token) {
      (async () => {
        try {
          const resBooks = await http.get(`/cart/books/count/${itemId}`);
          const isExistBookItem = resBooks.data;
          if (!isExistBookItem) {
            alert("해당 도서가 북마스터에 존재하지 않습니다. 관리자에게 문의하세요.");
            return -1;
          }

          const response = await http.get(`/cart/count/${itemId}`);
          //상품이 이미 장바구니에 담겨있음
          if (response.status === 200 && response.data) {
            const isAddCartConfirmed = window.confirm(
              "상품이 이미 장바구니 담겨져 있습니다. 장바구니로 이동하시겠습니까?",
            );
            if (isAddCartConfirmed) {
              navigate("/cart");
            }
          } else {
            createCartData({
              itemId,
              quantity,
              title,
              cover,
              priceStandard,
              priceSales,
            });
            const isCartConfirmed = window.confirm("상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?");
            if (isCartConfirmed) {
              navigate("/cart");
            }
          }
        } catch (e: any) {
          console.log(e);
          alert("시스템 오류가 발생했습니다. 관리자에 문의하세요." + e);
        }
      })();
    }
  };

  const handleConfirm = useCallback(
    (e) => {
      e.preventDefault();
      if (!token) {
        alert("로그인 후 이용해주세요.");
        navigate("/login");
      } else {
        const isConfirmed = window.confirm("장바구니에 추가하시겠습니까?");
        if (isConfirmed) {
          // 사용자가 확인을 클릭한 경우에만 addCart 함수를 호출
          handleAddCart(e);
        }
      }
    },
    [{ itemId, quantity }],
  );

  return (
    <CartButtonStyle>
      <div key={itemId}>
        <span
          onClick={(e) => {
            handleConfirm(e);
          }}>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </span>
      </div>
    </CartButtonStyle>
  );
};

export default CartButton;
