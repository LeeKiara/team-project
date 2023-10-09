import { OrderContainer } from "./styles";

const Order = () => {
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

                {/* <!-- 주문자 정보 --> */}
                <h4 className="title-order">주문자 정보</h4>
                <div className="box-information-order">
                  {/* <!-- 이름 입력 --> */}
                  <div className="box-name">
                    <span className="form-text" style={{ width: "316px" }}>
                      <input type="text" name="oname" id="oname" value="이현미" placeholder="이름" />
                    </span>
                  </div>

                  {/* <!-- 전화번호 입력 --> */}
                  <div className="box-phonenum">
                    <span className="form-select">
                      <select name="ohp1" id="ohp1">
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                    </span>
                    <span className="form-text">
                      <input type="text" name="ohp2" id="ohp2" value="4608" placeholder="휴대폰 앞자리" />
                    </span>
                    <span className="form-text">
                      <input type="text" name="ohp3" id="ohp3" value="3414" placeholder="휴대폰 뒷자리" />
                    </span>
                  </div>
                  {/* <!-- //전화번호 입력 --> */}

                  {/* <!-- 이메일 입력 --> */}
                  <div className="box-email">
                    <span className="form-text">
                      <input type="text" name="email1" id="email1" value="hbin1028" />
                    </span>
                    <span>@</span>
                    <span className="form-text">
                      <input type="text" name="email2" id="email2" value="gmail.com" />
                    </span>
                    <span className="form-select">
                      <select name="email2_temp">
                        <option>직접입력</option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="hotmail.com">hotmail.com</option>
                      </select>
                    </span>
                  </div>
                  {/* <!-- //이메일 입력 --> */}

                  {/* <!-- 주문자 주소 정보 --> */}
                  <input type="hidden" name="ozipcode" id="ozipcode" value="" />
                  <input type="hidden" name="oaddress1" id="oaddress1" value="" />
                  <input type="hidden" name="oaddress2" id="oaddress2" value="" />
                  {/* <!-- // 주문자 주소 정보 --> */}

                  {/* <!-- 안내문구 --> */}
                  <p className="text-notice-type1">
                    주문 / 결제 내역이 발송되므로 정확한 휴대폰 번호와 이메일 주소인지 확인해 주세요.
                  </p>
                  <p className="text-notice-type1">
                    정보 변경은{" "}
                    <strong>
                      MY &gt; <a href="/my/myhome.donga">개인정보 수정</a>
                    </strong>{" "}
                    메뉴에서 가능합니다.{" "}
                  </p>
                  {/* <!-- //안내문구 --> */}
                </div>

                {/* <!-- //주문자 정보 --> */}
              </div>

              {/* 사이드 메뉴 */}
              <div className="box-payment-sidebar" style={{ top: "22px" }}>
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
                  <span className="btn-type2">
                    <button type="button">결제하기</button>
                  </span>
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
