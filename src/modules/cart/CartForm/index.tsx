import { useState } from "react";
import { useCartData } from "./data";
import { CartFormContainer } from "./styles";
import { useBookCartData } from "../AddCart/data";

const CartForm = () => {
  const [page, setPage] = useState(0);

  // 장바구니 캐시 데이터
  const { bookCartData: cartlist, isBookCartDataValidating } = useBookCartData(page);

  console.log("***CartForm : " + cartlist.length);

  cartlist.map((item, index) => {
    console.log(index + "," + item.title);
  });

  return (
    <>
      <CartFormContainer>
        <section>
          {cartlist.map((cartCashData, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <span>{index},</span>
              <span>
                <img src={cartCashData.cover} style={{ width: "50px", height: "50px" }} />
              </span>
              <span>{cartCashData.title},</span>
              <span>{cartCashData.priceStandard},</span>
              <span>{cartCashData.priceSales},</span>
            </div>
          ))}

          {/* {cartlist.map((cartCashData, index) => {
            <div>
              <div>{index}</div>
              <div>{cartCashData.title}</div>
            </div>;
          })} */}
        </section>
      </CartFormContainer>
    </>
  );
};

export default CartForm;
