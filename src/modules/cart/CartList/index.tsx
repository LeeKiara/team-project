import Home from "@/pages/Home";
import { useState } from "react";
import { CartContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/cart/order");
  };
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
              <input type="checkbox" name="productall_seq" className="listCheckBox" />
            </div>
            <div>상품정보</div>
            <div>수량</div>
            <div>판매가(정가)</div>
          </article>
          {/* 장바구니 상품 1 */}
          <article className="cart-layer">
            {/* 도서정보(책이미지/도서명) */}
            <div className="bookinfo">
              <label className="form-checkbox">
                <input type="checkbox" name="product_seq" className="listCheckBox" />
              </label>
              <figure>
                <img src="책이미지" alt="책이미지" />
              </figure>
              <div>
                <div className="box-tag-bookgubun">
                  <span className="icon-tag-bookgubun">국내도서</span>
                </div>
                <p>빠작 고등 국어 고전 문학</p>
              </div>
            </div>
            {/* 가격정보 */}
            <div className="priceinfo">
              {/* 수량 */}
              <div>
                <span className="book-quantity" style={{ width: "100px" }}>
                  <input name="num" type="number" min="1" max="999" step="1" />
                  <div className="quantity-nav">
                    <div className="quantity-button quantity-up">+</div>
                    <div className="quantity-button quantity-down">-</div>
                  </div>
                </span>
              </div>

              {/* 할인가/정가 */}
              <div>
                <div className="box-price">
                  <strong>13,950</strong>원<del>정가15,500원</del>
                </div>
              </div>
              {/* 삭제버튼 */}
              <div className="box-delete">X</div>
            </div>
          </article>
          {/* 장바구니 상품 2 */}
          <article className="cart-layer">
            {/* 도서정보(책이미지/도서명) */}
            <div className="bookinfo">
              <label className="form-checkbox">
                <input type="checkbox" name="product_seq" className="listCheckBox" />
              </label>
              <figure>
                <img src="책이미지" alt="책이미지" />
              </figure>
              <div>
                <h3>국내도서</h3>
                <p>빠작 고등 국어 고전 문학</p>
              </div>
            </div>
            {/* 가격정보 */}
            <div className="priceinfo">
              {/* 수량 */}
              <div>
                <span className="book-quantity" style={{ width: "100px" }}>
                  <input name="num" type="number" min="1" max="999" step="1" />
                  <div className="quantity-nav">
                    <div className="quantity-button quantity-up">+</div>
                    <div className="quantity-button quantity-down">-</div>
                  </div>
                </span>
              </div>

              {/* 할인가/정가 */}
              <div>
                <div className="box-price">
                  <strong>13,950</strong>원<del>정가15,500원</del>
                </div>
              </div>
              {/* 삭제버튼 */}
              <div className="box-delete">X</div>
            </div>
          </article>

          {/* 주문합계 */}
          <article>
            <div className="box-total-payment">
              <div className="total-text">주문합계</div>
              <div className="total-sum">
                상품금액 <strong id="fixedsum">1,0000</strong>원 <i>-</i>
                할인금액 <strong id="discountsum">2000</strong>원 <i>+</i>
                배송비 <strong id="deliveryfee">2000</strong>원
              </div>
              <div className="total-price">
                결제 예정 금액 <strong id="totalsum">10000</strong>원
              </div>
            </div>
          </article>

          {/* 주문버튼 */}
          <article className="payment-layer">
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
