import { MutableRefObject, useRef, useState, useEffect } from "react";
import { CartContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCartData } from "../cartdata";
import axios from "axios";
import * as React from "react";

const CartList = () => {
  const { cartData: cartlist, isCartDataValidating } = useCartData();
  const [qtys, setQtys] = useState([]);
  const [priceStandards, setPriceStandards] = useState([]);
  const [priceSales, setPriceSales] = useState([]);

  const navigate = useNavigate();
  const quantityRef = useRef() as MutableRefObject<HTMLInputElement>;

  // cartData가 로드되면 initialNumbers 배열을 설정
  useEffect(() => {
    if (cartlist && cartlist.length > 0) {
      // 장바구니 수량 cartData에 저장된 값으로 초기화
      const initialNumbers = cartlist.map((item) =>
        parseInt(item.quantity, 10)
      );
      setQtys(initialNumbers);

      // 정가
      const initialPriceStandard = cartlist.map((item) =>
        parseInt(item.priceStandard, 10)
      );
      setPriceStandards(initialPriceStandard);

      // 할인가
      const initialPriceSales = cartlist.map((item) =>
        parseInt(item.priceSales, 10)
      );
      setPriceSales(initialPriceSales);
    }
  }, [cartlist]);

  // 장바구니 수량이 변경되면 처리 되는 함수
  useEffect(() => {
    // qtys가 변경되면 처리...
    console.log("!! qtys useEffect  ");
    console.log(qtys);
    console.log(priceStandards);

    // 정가 변경 : (수량이 변경되면 정가 다시 계산)
    const calcuPriceStandard = qtys.map((item, index) => {
      return item * Number(cartlist[index].priceStandard);
    });

    setPriceStandards(calcuPriceStandard);

    console.log("calcuPriceStandard:", calcuPriceStandard);
    console.log("priceStandards:", priceStandards);

    // 할인가 다시 계산 : (수량이 변경되면)
    const calcuPriceSales = qtys.map((item, index) => {
      return item * Number(cartlist[index].priceSales);
    });

    setPriceSales(calcuPriceSales);

    //
  }, [qtys]);

  // 서버/스토리지의 데이터와 캐시데이터 비교중인지 여부를 표시
  console.log("---validating---");
  console.log(isCartDataValidating);

  // 장바구니 수량 변경 이벤트 핸들러
  const handleQtyChange = (e, index) => {
    console.log("** handleQtyChange ");

    const itemQty = parseInt(e.target.value, 10);

    setQtys((prevQtys) => {
      const newQtys = [...prevQtys];
      newQtys[index] = itemQty;
      return newQtys;
    });

    // // 정가 상태 변경 처리 (수량이 변경되면 정가 다시 계산)
    // setPriceStandards((prevPriceStandards) => {
    //   const newPriceStandards = [...prevPriceStandards];
    //   newPriceStandards[index] = itemQty * prevPriceStandards[index];
    //   return newPriceStandards;
    // });

    // console.log("** handleQtyChange  priceStandards : " + priceStandards[0]);
  };

  // 수량 1씩 증가
  const handleIncrement = (index) => {
    console.log("●●●●● handleIncrement ");

    setQtys((prevQtys) => {
      const newQtys = [...prevQtys];
      newQtys[index] = newQtys[index] + 1;
      return newQtys;
    });

    // // 정가 상태 변경 처리 (수량이 변경되면 정가 다시 계산)
    // setPriceStandards((prevPriceStandards) => {
    //   const newPriceStandards = [...prevPriceStandards];
    //   // 정가 다시 계산 : 수량 * 정가
    //   newPriceStandards[index] = qtys[index] * newPriceStandards[index];
    //   return newPriceStandards;
    // });

    console.log(
      "●●●●● handleIncrement qtys:" +
        qtys[index] +
        ", priceStandards : " +
        priceStandards[index]
    );
  };

  // 수량 1씩 감소
  const handleDecrement = (index) => {
    setQtys((prevQtys) => {
      const newQtys = [...prevQtys];
      if (newQtys[index] < 1) {
        newQtys[index] = 0;
      } else {
        newQtys[index] = newQtys[index] - 1;
      }

      return newQtys;
    });
  };

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
          {cartlist.map((cartCashData, index) => (
            <article className="cart-layer" key={`item-${cartCashData.id}`}>
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
                <div style={{ width: "150px" }}>
                  <input
                    type="text"
                    placeholder="0"
                    value={qtys[index]}
                    onChange={(e) => handleQtyChange(e, index)}
                  />
                  <button onClick={() => handleIncrement(index)}>1 증가</button>
                  <button onClick={() => handleDecrement(index)}>1 감소</button>
                </div>

                {/* 할인가/정가 */}
                <div>
                  <div className="box-price">
                    <strong>{priceSales[index]}</strong>원
                    <del>정가{priceStandards[index]}원</del>
                  </div>
                  {/* <div>정가 다시 계산:{priceStandards[index]}</div> */}
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
