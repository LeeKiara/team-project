import { ShoppingCart } from "@mui/icons-material";
import { CartButtonStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import http from "@/utils/http";
// import { CartData, useCartData } from "@/modules/cart/cartdata";
import { useEffect, useState } from "react";
import { CartData, addCartData, useCartData } from "@/modules/cart/addcartdata";

const CartButton = ({ itemId, quantity }: { itemId: number; quantity?: string }) => {
  // const { addToCart } = useCartData(false);
  const [isCreateCartData, setIsCreateCartData] = useState(false);
  const [isAddCartCompleted, setIsAddCartCompleted] = useState(false);

  // const { createCartData } = useCartData();
  const navigate = useNavigate();

  const handleAddCart = (event) => {
    event.preventDefault();
    const isConfirmed = window.confirm("장바구니에 추가하시겠습니까?");
    if (isConfirmed) {
      (async () => {
        try {
          const response = await http.get("/cart/count/" + itemId);

          // 상품이 이미 장바구니 담겨져 있음
          if (response.status === 200) {
            console.log("isExistCartItem!!!:" + response.data);

            if (response.data) {
              const isAddCartConfirmed = window.confirm(
                "상품이 이미 장바구니 담겨져 있습니다. 장바구니로 이동하시겠습니까?",
              );

              if (isAddCartConfirmed) {
                navigate("/cart");
              }
            } else {
              setIsCreateCartData(true);
            }
          } else {
            setIsCreateCartData(true);
          }
        } catch (e: any) {
          console.log(e);
          alert("시스템 오류가 발생하였습니다.");
          // return false;
        }
      })();
    }
  };

  if (itemId && isCreateCartData) {
    console.log(
      "저장된 장바구니 없음. 신규 추가 !!! isCreateCartData " + itemId + ",isCreateCartData:" + isCreateCartData,
    );

    var inputCartData: CartData = {
      itemId: itemId,
      quantity: "1",
    };

    // 장바구니 등록
    const response = addCartData(inputCartData);
    // const response = addToCart(inputCartData);

    setIsCreateCartData(false);
    setIsAddCartCompleted(true);
  }

  useEffect(() => {
    console.log("<<<<<<<< useEffect isCreateCartData >>>>>>>>>");

    if (isAddCartCompleted) {
      const isCartConfirmed = window.confirm("상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?");

      if (isCartConfirmed) {
        navigate("/cart");
      }
    }
  }, [isAddCartCompleted]);

  return (
    <CartButtonStyle>
      <div key={itemId}>
        <span
          onClick={(e) => {
            handleAddCart(e);
          }}>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </span>
      </div>
    </CartButtonStyle>
  );
};

export default CartButton;
