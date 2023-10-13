import { useState } from "react";
import { CartContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCartData } from "../cartdata";
import axios from "axios";

const CartList = () => {
  const navigate = useNavigate();

  const { cartData: cartlist, isCartDataValidating } = useCartData();

  // 서버/스토리지의 데이터와 캐시데이터 비교중인지 여부를 표시
  console.log("---validating---");
  console.log(isCartDataValidating);

  const handleOrder = () => {
    navigate("/cart/order");
  };

  const [quantityStates, setQuantityStates] = useState({});

  // 장바구니 수량 변경
  const handleUpdateQty = (itemId) => {
    console.log("---------handleUpdateQty -----------itemId:" + itemId);

    const parsedItemId = parseInt(itemId, 10);
    console.log(
      "---------handleUpdateQty -----------parsedItemId:" + parsedItemId
    );

    if (!isNaN(parsedItemId)) {
      // 수량 변경 상태
      setQuantityStates((prevStates) => {
        // Find the item with the matching itemId
        // itemid로 item 을 찾기
        const updatedCartList = cartlist.map((cartItem) => {
          if (cartItem.id === parsedItemId) {
            // Calculate the updated quantity
            const updatedQuantity = Number(cartItem.quantity) + 1;

            // Update the quantity for this item
            return {
              ...cartItem,
              quantity: updatedQuantity,
            };
          }
          return cartItem;
        });

        return {
          ...prevStates,
          [parsedItemId]:
            updatedCartList.find((item) => item.id === parsedItemId)
              ?.quantity || 0,
        };
      });
    }
  };

  // const handleUpdateQty = async (itemId) => {
  //   console.log("---------handleUpdateQty -----------itemId:" + itemId);

  //   const parsedItemId = parseInt(itemId, 10);
  //   console.log(
  //     "---------handleUpdateQty -----------parsedItemId:" + parsedItemId
  //   );

  //   if (!isNaN(parsedItemId)) {
  //     // Find the item with the matching itemId
  //     const updatedCartList = cartData.map((cartItem) => {
  //       if (cartItem.id === parsedItemId) {
  //         // Calculate the updated quantity
  //         const updatedQuantity = Number(cartItem.quantity) + 1;

  //         // Update the quantity for this item
  //         return {
  //           ...cartItem,
  //           quantity: updatedQuantity,
  //         };
  //       }
  //       return cartItem;
  //     });

  //     try {
  //       // Now, update the cartData with the updatedCartList
  //       await axios.post(`/updateCartItem/${parsedItemId}`, {
  //         quantity:
  //           updatedCartList.find((item) => item.id === parsedItemId)
  //             ?.quantity || 0,
  //       });

  //       // Use mutate to update cartData and trigger a re-render
  //       const CART_DATA_KEY = "/cart";
  //       mutate(CART_DATA_KEY, updatedCartList, false);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  // };

  return (
    <>
      <CartContainer>
        <section>
          <article>
            <div className="cart-header">
              <h3 className="title">장바구니</h3>
            </div>
          </article>
          <article className="cart-layer-title">
            <div>
              <input
                type="checkbox"
                name="productall_seq"
                className="listCheckBox"
              />
            </div>
            <div>상품정보</div>
            <div>수량</div>
            <div>판매가(정가)</div>
          </article>
          {/* 장바구니 상품 리스트(Loop) */}
          {cartlist.map((cartCashData) => (
            <article className="cart-layer">
              {/* 도서정보(책이미지/도서명) */}
              <div className="bookinfo">
                <label className="form-checkbox">
                  <input
                    type="checkbox"
                    name="product_seq"
                    className="listCheckBox"
                    key={`item-${cartCashData.id}`}
                  />
                </label>
                <figure>
                  <span className="image">
                    <a href="" target="_blank">
                      <img src={cartCashData.cover} alt={cartCashData.title} />
                    </a>
                  </span>
                </figure>
                <div>
                  <div className="box-bookgubun">
                    <span className="icon-bookgubun">{cartCashData.gubun}</span>
                  </div>
                  <p>
                    {cartCashData.id},{cartCashData.title}
                  </p>
                </div>
              </div>
              {/* 가격정보 */}
              <div className="priceinfo">
                {/* 수량 */}
                <div>
                  <h3>[수량변경:{quantityStates[cartCashData.id]}]</h3>
                  <button
                    onClick={() => handleUpdateQty(cartCashData.id)}
                    data-item-id={cartCashData.id}
                  >
                    +
                  </button>
                </div>
                <div>
                  <span className="book-quantity" style={{ width: "100px" }}>
                    <input
                      type="number"
                      readOnly
                      value={cartCashData.quantity}
                    />

                    <div className="quantity-nav">
                      <div className="quantity-up"></div>
                      <div className="quantity-down">-</div>
                    </div>
                  </span>
                </div>

                {/* 할인가/정가 */}
                <div>
                  <div className="box-price">
                    <strong>{cartCashData.priceSales}</strong>원
                    <del>정가{cartCashData.priceStandard}원</del>
                  </div>
                </div>
                {/* 삭제버튼 */}
                <div className="box-delete">X</div>
              </div>
            </article>
          ))}

          {/* 주문합계 */}
          <article>
            <div className="box-total-payment">
              <div className="total-text">주문합계</div>
              <div className="total-sum">
                상품금액 <strong id="fixedsum">1,0000</strong>원 <i>-</i>
                할인금액 <strong id="discountsum">2,000</strong>원 <i>+</i>
                배송비 <strong id="deliveryfee">2,000</strong>원
              </div>
              <div className="total-price">
                결제 예정 금액 <strong id="totalsum">10,000</strong>원
              </div>
            </div>
          </article>

          {/* 주문버튼 */}
          <article>
            <div className="box-submit-payment">
              <dl>
                <dt>주의하세요.</dt>
                <dd>· 주문 총액 2만원 이상이면 배송비가 무료입니다.</dd>
              </dl>
              <span className="btn-order">
                <button onClick={handleOrder}>주문하기</button>
              </span>
            </div>
          </article>
        </section>
      </CartContainer>
    </>
  );
};

export default CartList;
