import Home from "@/pages/Home";
import { OrderDetailContainer } from "./styles";
import { useCartData } from "../cartdata";

const OrderDetail = () => {
  // 주문/결제 데이터
  // TODO : 주문된 데이터로 변경(테스트를 위해 장바구니 데이터 조회함)
  const {
    cartData: orderList,
    mutateCartData,
    isCartDataValidating,
  } = useCartData();

  return (
    <>
      <OrderDetailContainer>
        <section>
          <article>
            <div className="order-header">
              <h3 className="title">주문/결제 조회 상세</h3>
              <br />
              <h6></h6>
            </div>
          </article>

          <article>
            <div></div>
            {/* 주문일자 / 주문번호 */}
            <div className="order_summary_box">
              <div className="box_header">
                <div className="label">
                  <span className="order_date" data-order-date="">
                    2023.10.04
                  </span>
                  <span className="gap">|</span>
                  <span className="order_num">
                    주문번호
                    <span className="num" data-order-id="">
                      O23105779333
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="order-layer">결제정보</div>
            <div className="box-payment-wrap">
              {/* 주문 정보 */}
              <div className="box-order-info">
                <dl>
                  <dt>주문금액</dt>
                  <dd>
                    <span className="val">15,100</span>
                    <span className="unit">원</span>
                  </dd>
                </dl>
                <dl>
                  <dt>상품금액</dt>
                  <dd>
                    <span className="val">13,100</span>
                    <span className="unit">원</span>
                  </dd>
                </dl>
                <dl>
                  <dt>배송비</dt>
                  <dd>
                    <span className="val">2,000</span>
                    <span className="unit">원</span>
                  </dd>
                </dl>
              </div>
              {/* 결제 정보 */}
              <div className="box-payment-info">
                <dl>
                  <dt>결제금액</dt>
                  <dd>
                    <span className="val">13,100</span>
                    <span className="unit">원</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    신용카드:
                    <br /> 카드번호
                  </dt>
                  <dd>
                    <span className="val">13,100</span>
                    <span className="unit">원</span>
                  </dd>
                </dl>
              </div>
            </div>
          </article>
          <article>
            <div className="order-layer">배송정보</div>
            <div className="box-payment-wrap">
              <div className="box-order-info">
                <dl>
                  <dt>기본정보</dt>
                  <dd>
                    <span className="val"></span>
                    <span className="unit"></span>
                  </dd>
                </dl>
              </div>
              {/* 결제 정보 */}
              <div className="box-payment-info">
                <dl>
                  <dt>이현미 </dt>
                  <dd>
                    <span className="val">01046083414</span>
                    <span className="unit"></span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    [14224] 경기도 광명시 사성로103번길 14(철산동,
                    광복현대아파트), 106동 903호
                  </dt>
                </dl>
              </div>
            </div>
          </article>
          <article>
            <div className="order-layer">주문 상품</div>
          </article>
          {/* 주문내역 (Loop) */}
          {orderList &&
            orderList.map((cartCashData, index) => (
              <article
                className="order-item-layer"
                key={`item-${cartCashData.id}`}>
                {/* 도서정보(책이미지/도서명) */}

                <div className="bookinfo">
                  <figure>
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
                  </figure>
                  <div>
                    <div>
                      <span>&nbsp;</span>
                    </div>
                    <p>
                      <a
                        className="subject"
                        href={`/page?keyword=${cartCashData.itemId}`}
                        target="_blank">
                        {cartCashData.title}
                      </a>
                      <br />
                      <p className="order-number">
                        <strong>수량</strong>
                        &nbsp;&nbsp;1
                      </p>
                    </p>
                  </div>
                </div>

                <div className="priceinfo">
                  {/* 주문금액 */}
                  <div>
                    <div className="box-price">
                      <strong>{cartCashData.priceSales}</strong>원
                    </div>
                  </div>
                </div>
                <div style={{ width: "100px" }}>&nbsp;</div>
                {/* 주문상태 */}
                {/* <div>
                  <div className="order-state">
                    <strong>주문완료</strong>
                  </div>
                </div> */}
              </article>
            ))}
          <article>
            <div className="box-submit-payment">
              <button>주문/배송 목록</button>
            </div>
          </article>
        </section>
      </OrderDetailContainer>
    </>
  );
};

export default OrderDetail;
