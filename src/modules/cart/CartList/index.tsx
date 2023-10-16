import { MutableRefObject, useRef, useState, useEffect } from "react";
import { CartContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCartData } from "../cartdata";
import OrderButton from "@/components/OrderButton";
import ConfirmModal from "@/components/ConfirmModal";
import ShowMessageModal from "@/components/ShowMessageModal";
import CalcuTotalPayment from "./CalcuTotalPayment";

const CartList = () => {
  // 장바구니 캐시 데이터
  const {
    cartData: cartlist,
    mutateCartData,
    isCartDataValidating,
  } = useCartData();

  // 주문할 장바구니 도서 상태관리
  const [stateCartData, setStateCartData] = useState(cartlist);

  // 장바구니 수량 상태
  const [qtys, setQtys] = useState([]);
  // 정가 상태
  const [priceStandards, setPriceStandards] = useState([]);
  // 할인가 상태
  const [priceSales, setPriceSales] = useState([]);

  // 주문 가능 여부
  const [isOrder, setIsOrder] = useState(false);

  // 장바구니 상품 선택 박스
  const [checkboxes, setCheckboxes] = useState([]);
  // const [checkboxes, setCheckboxes] = useState(
  //   cartlist && cartlist.length > 0 && cartlist.map(() => false),
  // );

  const navigate = useNavigate();

  // 서버/스토리지의 데이터와 캐시데이터 비교중인지 여부를 표시
  console.log("---validating---");
  console.log(isCartDataValidating);

  // 장바구니 데이터로 수량/정가/할인가 초기화 배열 설정
  useEffect(() => {
    if (cartlist && cartlist.length > 0) {
      // 장바구니 수량 cartData에 저장된 값으로 초기화
      const initialNumbers = cartlist.map((item) =>
        parseInt(item.quantity, 10),
      );
      setQtys(initialNumbers);

      // 정가
      const initialPriceStandard = cartlist.map((item) =>
        parseInt(item.priceStandard, 10),
      );
      setPriceStandards(initialPriceStandard);

      // 할인가
      const initialPriceSales = cartlist.map((item) =>
        parseInt(item.priceSales, 10),
      );
      setPriceSales(initialPriceSales);
    }
  }, [cartlist]);

  // 장바구니 수량이 변경되면 정가와 할인가 변경 처리
  useEffect(() => {
    console.log(
      "!! qtys useEffect : 장바구니 수량이 변경되면 정가와 할인가 변경 처리 ",
    );
    // console.log(qtys + ", " + priceStandards);

    // 정가 다시 계산
    const calcuPriceStandard = qtys.map((item, index) => {
      return item * Number(cartlist[index].priceStandard);
    });

    setPriceStandards(calcuPriceStandard);

    // console.log("calcuPriceStandard:", calcuPriceStandard);
    // console.log("priceStandards:", priceStandards);

    // 할인가 다시 계산
    const calcuPriceSales = qtys.map((item, index) => {
      return item * Number(cartlist[index].priceSales);
    });

    setPriceSales(calcuPriceSales);

    // 주문상품 상태 관리
    // const checkedCartItems = createSelectedCartList(stateCartData, qtys);
    // setStateCartData(checkedCartItems);
  }, [qtys]);

  // 주문할 상품 선택박스 상태변경 부가처리
  useEffect(() => {
    if (cartlist && cartlist.length > 0) {
      console.log("++++++++++ useEffect checkboxes");

      const checkedCartItems = createSelectedCartList(stateCartData, qtys);

      setStateCartData(checkedCartItems);

      setIsOrder(true);
    }
  }, [checkboxes]);

  const gotoOrder = () => {
    console.log("++++++++++ gotoOrder");

    // alert("상품을 선택하세요.");
    setShowMessageModal(true);

    const checkedCartItems = createSelectedCartList(stateCartData, qtys);

    setStateCartData(checkedCartItems);

    setIsOrder(true);
  };

  // 체크박스 선택 및 수량 변경에 따른 대상 최종 정보 생성
  function createSelectedCartList(stateCartData, qtys) {
    const checkedCartItems = cartlist
      .map((selectedItem, index) => ({
        itemId: selectedItem.itemId,
        title: selectedItem.title,
        cover: selectedItem.cover,
        priceStandard: selectedItem.priceStandard,
        priceSales: selectedItem.priceSales,
        quantity: qtys[index],
        isChecked: checkboxes[index], // 체크박스 상태 사용
        gubun: "",
      }))
      .filter((selectedItem) => selectedItem.isChecked);

    checkedCartItems.map((item, index) => {
      console.log(
        "  최종 장바구니 상품 목록 >>> " +
          item.title +
          ", " +
          item.quantity +
          ", " +
          item.isChecked,
      );
    });

    return checkedCartItems;
  }

  // 체크박스 변경에 따른 장바구니 상품목록 상태관리
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  // 장바구니 수량 변경 이벤트 핸들러
  const handleQtyChange = (e, index) => {
    console.log("** handleQtyChange ");

    const itemQty = parseInt(e.target.value, 10);

    setQtys((prevQtys) => {
      const newQtys = [...prevQtys];
      newQtys[index] = itemQty;
      return newQtys;
    });
  };

  // 수량 1씩 증가
  const handleIncrement = (index) => {
    console.log("●●●●● handleIncrement ");

    setQtys((prevQtys) => {
      const newQtys = [...prevQtys];
      newQtys[index] = newQtys[index] + 1;
      return newQtys;
    });

    // 수량 증가 화살표를 클릭했을 때 product_seq 체크박스를 체크하기 위한 로직
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);

    // console.log(
    //   "●●●●● handleIncrement qtys:" +
    //     qtys[index] +
    //     ", priceStandards : " +
    //     priceStandards[index],
    // );
  };

  // 수량 1씩 감소
  const handleDecrement = (index) => {
    setQtys((prevQtys) => {
      const newQtys = [...prevQtys];
      if (newQtys[index] <= 1) {
        newQtys[index] = 1;
      } else {
        newQtys[index] = newQtys[index] - 1;
      }
      return newQtys;
    });

    // 수량 감소 화살표를 클릭했을 때 product_seq 체크박스를 체크하기 위한 로직
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleShowMessageButton = () => {
    setShowMessageModal(true);
  };

  const handleCancel = () => {
    setShowMessageModal(false);
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
          {cartlist &&
            cartlist.length > 0 &&
            cartlist.map((cartCashData, index) => (
              <article className="cart-layer" key={`item-${cartCashData.id}`}>
                {/* 도서정보(책이미지/도서명) */}
                <div className="bookinfo">
                  <label className="form-checkbox">
                    <input
                      type="checkbox"
                      name="product_seq"
                      className="listCheckBox"
                      key={cartCashData.id}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </label>
                  <div>
                    <span className="image">
                      <a
                        href={`/page?keyword=${cartCashData.itemId}`}
                        target="_blank">
                        <img
                          src={cartCashData.cover}
                          alt={cartCashData.title}
                        />
                      </a>
                    </span>
                  </div>
                  <div className="bookinfo-title">
                    <div className="box-bookgubun">
                      <span className="icon-bookgubun">
                        {cartCashData.gubun}
                      </span>
                    </div>
                    <p>
                      <a
                        href={`/page?keyword=${cartCashData.itemId}`}
                        target="_blank">
                        {cartCashData.id},{cartCashData.title}
                      </a>
                      <br />
                      (할인가:
                      {cartCashData.priceSales},정가:
                      {cartCashData.priceStandard})
                    </p>
                  </div>
                </div>
                {/* 가격정보 */}

                <div className="priceinfo">
                  {/* 수량 */}
                  <div>
                    <input
                      type="text"
                      placeholder="0"
                      value={qtys[index]}
                      onChange={(e) => handleQtyChange(e, index)}
                    />
                    <div className="btn-qty-change">
                      {/* <button onClick={() => handleIncrement(index)}>
                        1 증가
                      </button>
                      <button onClick={() => handleDecrement(index)}>
                        1 감소
                      </button> */}
                      <img
                        onClick={() => handleIncrement(index)}
                        src="https://image.aladin.co.kr/img/shop/2018/icon_Aup.png"
                        alt="위 화살표"
                      />
                      <img
                        onClick={() => handleDecrement(index)}
                        src="https://image.aladin.co.kr/img/shop/2018/icon_Adown.png"
                        alt="아래화살표"
                      />
                    </div>
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
            {stateCartData && stateCartData.length && (
              <CalcuTotalPayment cartBooks={stateCartData} />
            )}
            {stateCartData.length === 0 && (
              <div className="box-total-payment">
                <div className="total-text">주문합계</div>
                <div className="total-sum">
                  상품금액 <strong id="fixedsum">0</strong>원 <i>-</i>
                  할인금액 <strong id="discountsum">0</strong>원 <i>+</i>
                  배송비 <strong id="deliveryfee">0</strong>원
                </div>
                <div className="total-price">
                  결제 예정 금액 <strong id="totalsum">0</strong>원
                </div>
              </div>
            )}
          </article>

          {/* 주문버튼 */}
          <article>
            <div className="box-submit-payment">
              <dl>
                <dt>주의하세요.</dt>
                <dd>· 주문 총액 2만원 이상이면 배송비가 무료입니다.</dd>
              </dl>

              {/* <span className="btn-order">
                <button onClick={handleOrder}>주문하기</button>
              </span> */}
              {!isOrder && (
                <button className={"box-blue"} onClick={gotoOrder}>
                  주문하기
                </button>
              )}

              {isOrder && <OrderButton cartBooks={stateCartData} />}

              {showMessageModal && (
                <ShowMessageModal
                  message="상품을 선택하세요."
                  onCancel={handleCancel}
                />
              )}
            </div>
          </article>
        </section>
      </CartContainer>
    </>
  );
};

export default CartList;
