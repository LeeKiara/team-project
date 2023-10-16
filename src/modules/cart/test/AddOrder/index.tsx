import { MutableRefObject, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderItemData, useOrderListData } from "../../orderlistdata";
import OrderButton from "@/components/OrderButton";
import { AddOrderContainer } from "./styles";

const AddOrder = () => {
  // programatic방식으로 라우팅 처리
  const navigate = useNavigate();

  const itemIdRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gubunRef = useRef() as MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const coverRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceStandardRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceSalesRef = useRef() as MutableRefObject<HTMLInputElement>;
  const quantityRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { orderListData, createOrderListData } = useOrderListData();
  const [isOrder, setIsOrder] = useState(false);

  const cartlist: OrderItemData[] = [
    {
      itemId: 907990,
      title: "어린왕자1",
      cover:
        "https://www.cyber.co.kr/book/uploads/cache/2022-godo-goods/thumb-155247724937l0_300x0.jpg",
      priceSales: "8000",
      quantity: "3",
    },
    {
      itemId: 907991,
      title: "어린왕자2",
      cover:
        "https://www.cyber.co.kr/book/uploads/cache/2022-godo-goods/thumb-155247724937l0_300x0.jpg",
      priceSales: "10000",
      quantity: "5",
    },
  ];

  const handleAddOrder = () => {
    console.log("AddOrder > handleAddOrder start.....");
    console.log("AddOrder > handleAddOrder : cartData =>" + cartlist);

    // 검증
    // 서버연동
    // 상태값(데이터)변경
    // createOrderListData(cartlist);

    // 완료가 되면 장바구니 목록 화면으로 이동
    navigate("/cart");
  };

  const gotoOrder = () => {
    setIsOrder(true);
  };

  return (
    <AddOrderContainer>
      <section>
        <hr />
        <h6>도서정보</h6>
        <hr />
        <article>
          <aside>
            <div>
              <dl>
                <dt>itemId</dt>
                <dd>
                  <input type="text" name="itemId" value="907990" />
                </dd>
              </dl>

              <dl>
                <dt>도서이미지</dt>
                <dd>
                  <input
                    type="text"
                    name="bookCover"
                    value="https://www.cyber.co.kr/book/uploads/cache/2022-godo-goods/thumb-155247724937l0_300x0.jpg"
                  />
                </dd>
              </dl>

              <dl>
                <dt>책제목</dt>
                <dd>
                  <input type="text" name="title" value="어린왕자" />
                </dd>
              </dl>

              <dl>
                <dt>정가</dt>
                <dd>
                  <input type="text" name="priceStandard" value="10000" />
                </dd>
              </dl>
              <dl>
                <dt>할인가</dt>
                <dd>
                  <input type="text" name="priceSales" value="8000" />
                </dd>
              </dl>
              <dl>
                <dt>수량</dt>
                <dd>
                  <input type="text" name="qty" value="1" />
                </dd>
              </dl>
            </div>

            <div>
              <button className={"box-blue"} onClick={gotoOrder}>
                주문하기 버튼 활성화
              </button>
              {isOrder && <OrderButton cartBooks={cartlist} />}
            </div>
          </aside>
        </article>
      </section>
    </AddOrderContainer>
  );
};

export default AddOrder;
