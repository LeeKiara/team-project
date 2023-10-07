import { CartListContainer } from "./styles";

const CartList = () => {
  return (
    <CartListContainer>
      <div className="area-payment">
        <div className="area-inner">
          <div className="contain-payment-header">
            <h3 className="title">장바구니</h3>
            <p className="text">
              {/* 장바구니는 최대 30일 보관 후 삭제됩니다.
              <br />
              (이벤트 상품은 이벤트 기간까지만 보관) */}
            </p>
          </div>

          <div id="cartExistArea">
            <div className="box-list-header">
              <span className="btn-type1">
                {/* <button type="button" onClick="carCheckDelete()">선택 삭제</button> */}
                <button type="button">선택 삭제</button>
              </span>
            </div>
            <form
              name="orderForm"
              id="orderForm"
              method="get"
              // action="/mall/order_form.donga"
            ></form>
            <div className="box-list-payment">
              <form name="cartlistForm" id="cartlistForm" method="post">
                <table>
                  {/* <colgroup>
                          <col width="50">
                          <col>
                          <col>
                          <col width="120">
                          <col width="130">
		                    </colgroup> */}
                  <tbody>
                    <tr>
                      <th>
                        <label className="form-checkbox">
                          <input type="checkbox" id="allchecked" />
                        </label>
                      </th>
                      <th>상품 정보</th>
                      <th>수량</th>
                      <th>판매가(정가)</th>
                      <th></th>
                    </tr>

                    <tr>
                      <td className="checkbox">
                        <input type="hidden" id="fixedprice32132" value="15500" />
                        <input type="hidden" id="saleprice32132" value="13950" />
                        <input type="hidden" id="discountprice32132" value="1550" />
                        <input type="hidden" id="productcategory32132" name="product_category" value="PCEDUHI" />
                        <input type="hidden" id="productIsDigital32132" name="product_isdigital" value="false" />

                        <label className="form-checkbox" id="seq_32132">
                          <input
                            type="checkbox"
                            id="product_seq_32132"
                            name="product_seq"
                            className="listCheckBox"
                            value="32132"
                          />
                        </label>
                      </td>
                      <td>
                        <div className="link-detail">
                          <span className="image">
                            <a href="">
                              <img
                                src="https://www.bookdonga.com/file/image/product/1_(%EA%B3%A0%EB%93%B1)%EB%B9%A0%EC%9E%91%20%EA%B3%A0%EB%93%B1%20%EA%B5%AD%EC%96%B4%20%EA%B3%A0%EC%A0%84%20%EB%AC%B8%ED%95%99_%ED%91%9C1_9788900470420_20220921151240_28.jpg"
                                alt="빠작 고등 국어 고전 문학"
                              />
                            </a>
                          </span>
                          <div className="text">
                            <div className="box-tag">
                              <span className="icon-tag">국내도서</span>
                            </div>
                            <a href="">빠작 고등 국어 고전 문학</a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="form-number" style={{ width: "100px" }}>
                          {/* <input id="num32132" name="num" type="number" min="1" max="999" step="1" value="1" onchange="changePrice('32132','PCEDUHI')" readonly=""> */}
                          <input id="num32132" name="num" type="number" min="1" max="999" step="1" value="1" />
                          <div className="quantity-nav">
                            <div className="quantity-button quantity-up">+</div>
                            <div className="quantity-button quantity-down">-</div>
                          </div>
                        </span>
                      </td>
                      <td>
                        <div className="box-price">
                          <strong id="saleprice_32132">13,950</strong>원<del id="fixedprice_32132">정가15,500원</del>
                        </div>
                      </td>
                      <td>
                        <span className="btn-delete-item">
                          {/* <button type="button" onClick="cartDelete('32132',this)">삭제</button> */}
                          <button type="button">삭제</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>

            {/* <div className="box-total-payment">
		                <div className="total-text">주문합계</div>
		                <div className="total-sum">
		                	상품금액 <strong id="fixedsum">0</strong>원 <i>-</i> 
		                	할인금액 <strong id="discountsum">0</strong>원 <i>+</i>
		                	배송비 <strong id="deliveryfee">0</strong>원
		          		</div>
		                <div className="total-price">결제 예정 금액 <strong id="totalsum">0</strong>원</div>
		            </div>
		
		            <div className="box-submit-payment">
		                <dl className="box-notice-type1">
		                    <dt>주의하세요.</dt>
		                    <dd>
		                        <ul className="text-list-type1">
		                            <li>· 주문 총액 2만원 이상이면 배송비가 무료입니다.(단, 디지털 콘텐츠 주문 금액 제외)</li>
		                            <li>· 소득 공제 표시가 된 상품은 문화비 소득 공제를 받으실 수 있습니다. <strong>단, 소득 공제 가능/불가능 제품을 한 번에 결제하시면 소득 공제가 불가능합니다. 별도로 결제해 주세요.</strong></li>
		                            <li>· 디지털 콘텐츠는 원칙적으로 환불이 불가능합니다. 신중한 구매 부탁드립니다.</li>
		                        </ul>
		                    </dd>
		                </dl>
		                <span className="btn-order"><button type="button" onClick="submitForm()">주문하기</button></span>
		            </div> */}
          </div>

          {/* <div
            className="box-board-nodata"
            id="cartEmptyArea"
            style={{ display: "none" }}
          >
            <p className="text-nodata">장바구니가 비어 있습니다.</p>
          </div> */}
        </div>
      </div>
    </CartListContainer>
  );
};

export default CartList;
