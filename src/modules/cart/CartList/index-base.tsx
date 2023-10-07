import { CartListContainer } from "./styles";

const CartList = () => {
  return (
    <CartListContainer>
      <div>
        {/* <article>
          <div>장바구니</div>
        </article> */}
        <section>
          <article>
            <h3>장바구니...</h3>
            <ul>
              <li>체크박스</li>
              <li>도서이미지</li>
              <li>도서명/할인율</li>
              <li>수량</li>
              <li>판매가</li>
              <li>삭제</li>
            </ul>
            <div></div>
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
