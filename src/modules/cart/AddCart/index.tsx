import { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCartData } from "../cartdata";
import { AddCartContainer } from "./styles";

const AddCart = () => {
  // programatic방식으로 라우팅 처리
  const navigate = useNavigate();

  const gubunRef = useRef() as MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const coverRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceStandardRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceSalesRef = useRef() as MutableRefObject<HTMLInputElement>;
  const quantityRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { cartData, createCartData } = useCartData();

  const handleAddCart = () => {
    console.log("AddCart > handleAddCart start.....");

    // 검증
    // 서버연동
    // 상태값(데이터)변경
    createCartData({
      gubun: gubunRef.current.value,
      title: titleRef.current.value,
      cover: coverRef.current.value,
      priceStandard: priceStandardRef.current.value,
      priceSales: priceSalesRef.current.value,
      quantity: quantityRef.current.value,
    });

    console.log("AddCart > handleAddCart : cartData =>" + cartData);

    // 완료가 되면 장바구니 목록 화면으로 이동
    navigate("/cart");
  };

  return (
    <AddCartContainer>
      <section>
        <h6>도서정보</h6>
        <hr />
        <article>
          <aside>
            <div>
              <dl>
                <dt>도서구분</dt>
                <dd>
                  <input type="text" name="bookGubun" ref={gubunRef} />
                </dd>
              </dl>

              <dl>
                <dt>도서이미지</dt>
                <dd>
                  <input type="text" name="bookCover" ref={coverRef} />
                </dd>
              </dl>

              <dl>
                <dt>책제목</dt>
                <dd>
                  <input type="text" name="title" ref={titleRef} />
                </dd>
              </dl>

              <dl>
                <dt>정가</dt>
                <dd>
                  <input
                    type="text"
                    name="priceStandard"
                    ref={priceStandardRef}
                  />
                </dd>
              </dl>
              <dl>
                <dt>할인가</dt>
                <dd>
                  <input type="text" name="priceSales" ref={priceSalesRef} />
                </dd>
              </dl>
              <dl>
                <dt>수량</dt>
                <dd>
                  <input type="text" name="qty" ref={quantityRef} />
                </dd>
              </dl>
            </div>
            <div>
              <button className={"box-blue"} onClick={handleAddCart}>
                장바구니 담기
              </button>
            </div>
          </aside>
        </article>
      </section>
    </AddCartContainer>
  );
};

export default AddCart;
