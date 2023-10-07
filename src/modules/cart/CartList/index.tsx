import { CartListContainer } from "./styles";

const CartList = () => {
  return (
    <CartListContainer>
      <div className="cart-container">
        {/* <article>
          <div>장바구니</div>
        </article> */}
        <section>
          <article>
            <h3>blank box</h3>
          </article>
          <article>
            <div>
              <h3>장바구니...</h3>
            </div>
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
                  </tbody>
                </table>
              </form>
            </div>
          </article>
          <article>
            <h3>주문합계</h3>
            <ul>
              <li>주문합계</li>
              <li>상품금액</li>
              <li>할인금액</li>
              <li>배송비</li>
              <li>결제예정금액</li>
            </ul>
          </article>
        </section>
      </div>
    </CartListContainer>
  );
};

export default CartList;
