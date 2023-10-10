import { useNavigate } from "react-router-dom";
import { CartListContainerDonga } from "./stylesdonga";

const CartListDonga = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/cart/order");
  };

  return (
    <CartListContainerDonga>
      <div className="cart-container">
        {/* <article>
          <div>장바구니</div>
        </article> */}
        <section>
          <article>
            <h3></h3>
          </article>
          <article>
            <div className="cart-header">
              <h3 className="title">장바구니</h3>
            </div>
            {/* 장바구니 상품 목록 */}
            <div className="box-list-payment">
              <form name="cartlistForm" id="cartlistForm" method="post">
                <table>
                  <thead>
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
                  </thead>
                  <tbody>
                    <tr>
                      <td className="checkbox">
                        <label className="form-checkbox" id="seq_32132">
                          <input type="checkbox" id="product_seq_32132" name="product_seq" className="listCheckBox" />
                        </label>
                      </td>
                      <td>
                        <div className="link-detail">
                          <span className="image">
                            <a href="">
                              <img src="" alt="빠작 고등 국어 고전 문학" />
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
                          <input id="num32132" name="num" type="number" min="1" max="999" step="1" />
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
                          <button type="button">삭제</button>
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="checkbox">
                        <label className="form-checkbox" id="seq_32132">
                          <input type="checkbox" id="product_seq_32132" name="product_seq" className="listCheckBox" />
                        </label>
                      </td>
                      <td>
                        <div className="link-detail">
                          <span className="image">
                            <a href="">
                              <img src="" alt="빠작 고등 국어 고전 문학" />
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
                          <input id="num32132" name="num" type="number" min="1" max="999" step="1" />
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
                          <button type="button">삭제</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </article>

          {/* 주문합계 */}
          <article>
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
          </article>

          {/* 주문버튼 */}
          <article>
            <div className="box-submit-payment">
              <dl className="box-notice-type1">
                <dt>주의하세요.</dt>
                <dd>
                  <ul className="text-list-type1">
                    <li>· 주문 총액 2만원 이상이면 배송비가 무료입니다.</li>
                  </ul>
                </dd>
              </dl>
              <span className="btn-order">
                <button onClick={handleOrder}>주문하기</button>
              </span>
            </div>
          </article>
        </section>
      </div>
    </CartListContainerDonga>
  );
};

export default CartListDonga;
