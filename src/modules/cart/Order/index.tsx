import { useState } from "react";
import { OrderContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCartData } from "../cartdata";

const Order = () => {
  // 장바구니 캐시 데이터
  const { cartData: cartlist, isCartDataValidating } = useCartData();

  const [isCardSelected, setIsCardSelected] = useState(false);
  const [isBankTransferSelected, setIsBankTransferSelected] = useState(false);
  const [isBankDepositSelected, setIsBankDepositSelected] = useState(false);

  const handleCardSelect = () => {
    setIsCardSelected(true);
    setIsBankTransferSelected(false);
    setIsBankDepositSelected(false);
  };

  const handleBankTransferSelect = () => {
    setIsBankTransferSelected(true);
    setIsCardSelected(false);
    setIsBankDepositSelected(false);
  };

  const handleBankDepositSelect = () => {
    setIsBankDepositSelected(true);
    setIsBankTransferSelected(false);
    setIsCardSelected(false);
  };

  const navigate = useNavigate();

  const handleOrderDone = () => {
    navigate("/cart/order/done");
  };

  return (
    <OrderContainer>
      <div className="cart-container">
        <section>
          <article>
            <div className="contain-payment-header">
              <h3 className="title">주문/결제</h3>
            </div>
            <div className="wrap-payment">
              <div className="contain-payment-body">
                {/* 주문 리스트(Loop)  */}
                {cartlist.map((cartCashData, index) => (
                  <article
                    className="box-list-payment"
                    key={`item-${cartCashData.id}`}
                  >
                    <div className="bookinfo">
                      <div>
                        <input type="hidden" name="orderdata" />
                        <div className="link-detail">
                          <span className="image">
                            {/* 도서정보(책이미지/도서명) */}
                            <a href="" target="_blank">
                              <img
                                src={cartCashData.cover}
                                alt={cartCashData.title}
                              />
                            </a>
                          </span>
                          <div className="text">
                            <div className="box-tag-bookgubun">
                              <span className="icon-tag-bookgubun">
                                {cartCashData.gubun}
                              </span>
                            </div>
                            <a href="" target="_blank">
                              {cartCashData.id},{cartCashData.title}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="priceinfo">
                        <div>
                          <div className="icon-tag-pricegubun">정가</div>
                          <div>{cartCashData.priceStandard}원</div>
                        </div>
                        <div>
                          <div className="icon-tag-pricegubun">할인가</div>
                          <div>{cartCashData.priceSales}원</div>
                        </div>
                        <div>
                          <div className="icon-tag-pricegubun">수량</div>
                          <div>{cartCashData.quantity}</div>
                        </div>
                        <div>
                          <div className="icon-tag-pricegubun">주문금액</div>
                          <div>13,950원</div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}

                {/* <!-- 주문자 정보 --> */}
                <h4 className="title-order">주문자 정보</h4>
                <div className="box-information-order">
                  {/* <!-- 이름 입력 --> */}
                  <div className="box-name">
                    <span className="form-text">
                      <input
                        type="text"
                        name="oname"
                        placeholder="이름"
                        style={{ width: "316px" }}
                      />
                    </span>
                  </div>

                  {/* <!-- 전화번호 입력 --> */}
                  <div className="box-phonenum">
                    <input type="text" name="ohp1" placeholder="010" />
                    <input
                      type="text"
                      name="ohp2"
                      placeholder="휴대폰 앞자리"
                    />
                    <input
                      type="text"
                      name="ohp3"
                      placeholder="휴대폰 뒷자리"
                    />
                  </div>
                  {/* <!-- //전화번호 입력 --> */}

                  {/* <!-- 이메일 입력 --> */}
                  <div className="box-email">
                    <input type="text" name="email1" id="email1" />
                    @
                    <input type="text" name="email2" id="email2" />
                    <div className="form-select">
                      <select name="email2_temp">
                        <option>직접입력</option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="hotmail.com">hotmail.com</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- //이메일 입력 --> */}

                  {/* <!-- 주문자 주소 정보 --> */}
                  <input type="hidden" name="ozipcode" id="ozipcode" />
                  <input type="hidden" name="oaddress1" id="oaddress1" />
                  <input type="hidden" name="oaddress2" id="oaddress2" />
                  {/* <!-- // 주문자 주소 정보 --> */}
                </div>

                {/* <!-- //주문자 정보 --> */}
                <h4 className="title-order">배송지 정보</h4>
                <div className="box-information-order">
                  {/* <!-- 이름 입력 --> */}
                  <div className="box-name">
                    <span className="form-text">
                      <input
                        type="text"
                        name="oname"
                        placeholder="이름"
                        style={{ width: "316px" }}
                      />
                    </span>
                  </div>

                  {/* <!-- 전화번호 입력 --> */}
                  <div className="box-phonenum">
                    <input type="text" name="ohp1" placeholder="010" />
                    <input
                      type="text"
                      name="ohp2"
                      placeholder="휴대폰 앞자리"
                    />
                    <input
                      type="text"
                      name="ohp3"
                      placeholder="휴대폰 뒷자리"
                    />
                  </div>
                  {/* <!-- //전화번호 입력 --> */}

                  {/* <!-- 주소찾기 --> */}
                  <div className="box-address">
                    <div>
                      <button type="button">주소찾기</button>
                      <input
                        type="text"
                        name="zipcode"
                        placeholder="우편번호"
                        readOnly={true}
                        style={{ width: "180px" }}
                      />
                    </div>

                    <input
                      type="text"
                      name="address"
                      placeholder="기본주소"
                      readOnly={true}
                      style={{ width: "550px" }}
                    />
                    <input
                      type="text"
                      name="street_detail"
                      placeholder="상세 주소 및 상세 건물명"
                      style={{ width: "550px" }}
                    />
                  </div>
                  {/* <!-- //주소찾기 --> */}
                  {/* <!-- 배송메모 --> */}
                  <div className="box-memo">
                    <select>
                      <option value="">배송 메모를 선택해 주세요.</option>
                      <option value="부재 시 경비실에 맡겨 주세요.">
                        부재 시 경비실에 맡겨 주세요.
                      </option>
                      <option value="부재 시 문앞에 놓아 주세요.">
                        부재 시 문앞에 놓아 주세요.
                      </option>
                      <option value="배송 전 미리 연락 바랍니다.">
                        배송 전 미리 연락 바랍니다.
                      </option>
                      <option value="DIRECT">직접입력</option>
                    </select>
                    <input
                      style={{ display: "none" }}
                      type="text"
                      name="requirement"
                      id="requirement"
                      placeholder="배송 메모를 입력해 주세요.(50자)"
                    />
                  </div>
                  {/* <!-- //배송메모 --> */}
                </div>

                {/* <!-- 결제 수단 --> */}
                <h4 className="title-order">결제수단</h4>
                <div className="box-information-payment">
                  {/* <!-- 결제 수단 선택 --> */}
                  <div>
                    <button
                      type="button"
                      onClick={handleCardSelect}
                      className={`${isCardSelected ? "button-selected" : ""}`}
                    >
                      신용카드
                    </button>
                    <button
                      type="button"
                      onClick={handleBankTransferSelect}
                      className={`${
                        isBankTransferSelected ? "button-selected" : ""
                      }`}
                    >
                      실시간 계좌 이체
                    </button>
                    <button
                      type="button"
                      onClick={handleBankDepositSelect}
                      className={`${
                        isBankDepositSelected ? "button-selected" : ""
                      }`}
                    >
                      무통장 입금
                    </button>
                  </div>

                  {/* <!-- 신용카드 --> */}
                  <div
                    className={`payment-tab-cont kind1 ${
                      isCardSelected ? "visible" : ""
                    }`}
                  >
                    <p className="text">
                      <strong>신용카드를 선택하셨습니다.</strong> 보유하신
                      신용카드로 결제하시는 방법입니다.
                    </p>
                  </div>
                  {/* <!-- //신용카드 --> */}

                  {/* <!-- 실시간 계좌 이체 --> */}
                  <div
                    className={`payment-tab-cont kind2 ${
                      isBankTransferSelected ? "visible" : ""
                    }`}
                  >
                    <p className="text">
                      <strong>실시간 계좌 이체를 선택하셨습니다.</strong> 고객님
                      계좌에서 바로 이체시키는 결제 방법입니다.
                    </p>
                  </div>
                  {/* <!-- //실시간 계좌 이체 --> */}

                  {/* <!-- 무통장 입금 --> */}
                  <div
                    className={`payment-tab-cont kind3 ${
                      isBankDepositSelected ? "visible" : ""
                    }`}
                  >
                    <p className="text">
                      <strong>무통장 입금을 선택하셨습니다.</strong>
                      가상 계좌로 입금해 주시는 결제 방법입니다.
                    </p>
                  </div>
                  {/* <!-- //무통장 입금 --> */}
                </div>

                <div style={{ height: "100px" }}>
                  <h1></h1>
                </div>
              </div>

              {/* 사이드 메뉴 */}
              <div className="box-payment-sidebar" style={{ top: "0px" }}>
                <div className="contain-calcpay">
                  <h4 className="title">결제 예정 금액</h4>
                  <dl className="payment-item">
                    <dt>상품 금액</dt>
                    <dd>
                      <strong>27,000</strong>원
                    </dd>
                  </dl>
                  <dl className="payment-item minus">
                    <dt>상품 할인</dt>
                    <dd>
                      <strong>-2,700</strong>원
                    </dd>
                  </dl>
                  <dl className="payment-item">
                    <dt>배송비</dt>
                    <dd>
                      <strong>0</strong>원
                    </dd>
                  </dl>

                  <hr className="div-type2" />
                  <dl className="payment-item total">
                    <dt>합계</dt>

                    <dd>
                      <strong id="totalPriceText">24,300</strong>원
                    </dd>
                  </dl>

                  <hr className="div-type2" />
                  <div className="box-submit-payment">
                    <span className="btn-order">
                      <button onClick={handleOrderDone}>결제하기</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </OrderContainer>
  );
};

export default Order;
