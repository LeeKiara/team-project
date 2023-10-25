import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddCartContainer } from "./styles";
import Button from "@/components/Button";

const AddCart2 = () => {
  // programatic방식으로 라우팅 처리
  const navigate = useNavigate();

  const itemIdRef1 = useRef() as MutableRefObject<HTMLInputElement>;
  const itemIdRef2 = useRef() as MutableRefObject<HTMLInputElement>;

  const [itemId1, setItemId1] = useState(0);
  const [itemId2, setItemId2] = useState(0);

  const gubunRef = useRef() as MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const coverRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceStandardRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceSalesRef = useRef() as MutableRefObject<HTMLInputElement>;
  const quantityRef = useRef() as MutableRefObject<HTMLInputElement>;

  // const { cartData, createCartData } = useCartData();
  // const [isOrder, setIsOrder] = useState(false);

  // alert(">>>> Addcart  :");

  const handleInput = () => {
    // alert("handleInput");

    setItemId1(Number(itemIdRef1.current.value));
    setItemId2(Number(itemIdRef2.current.value));
  };

  const cartItem = [
    {
      gubun: "exampleGubun",
      itemId: "1234",
      title: "Example Item1",
      cover: "exampleCoverImage.jpg",
      priceStandard: 10.99,
      priceSales: 8.99,
      quantity: 1,
    },
    {
      gubun: "exampleGubun",
      itemId: "4567",
      title: "Example Item2",
      cover: "exampleCoverImage.jpg",
      priceStandard: 10.99,
      priceSales: 8.99,
      quantity: 1,
    },
  ];

  const handleAddCart = () => {
    // console.log("AddCart > handleAddCart start.....");
    // // 검증
    // // 서버연동
    // // 상태값(데이터)변경
    // createCartData({
    //   itemId: Number(itemIdRef.current.value),
    //   quantity: quantityRef.current.value,
    // });
    // console.log("AddCart > handleAddCart : cartData =>" + cartData);
    // 완료가 되면 장바구니 목록 화면으로 이동
    // navigate("/cart");
  };

  return (
    <AddCartContainer>
      <section>
        <hr />
        <h6>도서정보</h6>
        <hr />
        <article>
          <aside>
            <div>
              <dl>
                <dt>itemId</dt>
                <dd style={{ display: "flex", gap: "20px", width: "500px" }}>
                  <input
                    style={{ width: "100px" }}
                    type="text"
                    name="itemId"
                    ref={itemIdRef1}
                    // value="907990"
                    onChange={handleInput}
                  />
                  <Button itemId={itemId1} />

                  {/* <CartButton
                    // gubun="KOR"
                    itemId={detail.itemId}
                    // title={detail.title}
                    // cover={detail.cover}
                    // priceStandard={detail.priceStandard.toString()}
                    // priceSales={detail.priceSales.toString()}
                    quantity={number.toString()}
                  />
                   */}
                </dd>
              </dl>
              <dl>
                <dt>itemId</dt>
                <dd style={{ display: "flex", gap: "20px", width: "500px" }}>
                  <input
                    style={{ width: "100px" }}
                    type="text"
                    name="itemId"
                    ref={itemIdRef2}
                    // value="907990"
                  />
                  <CartButton itemId={itemId2} />
                </dd>
              </dl>
            </div>
            <div>583083, Aladdin and the Magic Lamp (책 + 테이프 1개),</div>
            <div>521683, 알라딘과 요술램프</div>
          </aside>
          <br />
          <br />
        </article>
      </section>
    </AddCartContainer>
  );
};

export default AddCart2;
