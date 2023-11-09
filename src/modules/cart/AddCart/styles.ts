import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
// const lightgrayColor = "#f5f6f9";
const lightgrayColor = "#eaeaea;";

const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const AddCartContainer = styled.div`
  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 900px;
  }
  .cart-header {
    margin-bottom: 20px;

    .title {
      font-size: 28px;
      font-weight: 600;
    }
  }

  .cart-layer-title-off {
    > div {
      height: 300px;
      border-top: 1px dotted ${grayColor};
      border-bottom: 1px dotted ${grayColor};
      /* text-align: center;
      line-height: 300px; */
      font-size: 30px;
      color: ${grayColor};
      display: flex;
      justify-content: center;
      align-items: center;

      > div:nth-of-type(2) {
        margin-left: 20px;
      }
    }
  }

  .cart-layer-title {
    display: flex;
    flex-direction: row;
    background-color: ${lightgrayColor};
    width: 890px;
    height: 50px;
    align-items: center;
    padding-left: 11px;
    color: ${primaryColor};
    font-weight: 600;
    border-radius: 8px;

    div {
      /* border: 1px solid black; */
      text-align: center;
    }
    div:nth-of-type(1) {
      width: 4%;
    }
    div:nth-of-type(2) {
      width: 63%;
    }
    div:nth-of-type(3) {
      width: 10%;
    }
    div:nth-of-type(4) {
      width: 25%;
    }
  }

  /* 장바구니 도서리스트 프레임 */
  .cart-frame {
    display: flex;
    flex-direction: row;
    border: 2px solid ${lightgrayColor};
    height: 150px;
    padding-top: 10px;

    /* 첫번째 div(checkbox/도서이미지) */
    > div:nth-of-type(1) {
      width: 20%;
      padding-left: 10px;

      display: flex;
      flex-direction: row;
    }
    /* 두번째 div(도서명/{수량/가격/삭제button}) */
    > div:nth-of-type(2) {
      width: 80%;
      display: flex;
      flex-direction: row;
      /* border: 1px solid red; */

      /* 도서명 div */
      > div:nth-of-type(1) {
        width: 60%;
        padding-top: 10px;
      }
      /* {수량/가격/삭제button} div */
      > div:nth-of-type(2) {
        width: 40%;
        /* padding-top: 20px; */

        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;
        text-align: center;

        /* {수량} div */
        > div:nth-of-type(1) {
          width: 40%;
        }
        /* {가격} div */
        > div:nth-of-type(2) {
          width: 40%;
        }
        /* {삭제button} div */
        > div:nth-of-type(3) {
          width: 20%;
        }
      }
    }
  }

  .cart-frame .cart-checkbox {
    margin-right: 10px;
    label.cart-checkbox {
      display: inline-block;
      position: relative;
    }

    input[type="checkbox"] {
      width: 20px;
      height: 20px;

      &:checked {
        border: 2px solid ${blueColor};
      }
    }
  }

  .cart-frame .book-image img {
    display: block;
    width: 110px;
    height: 124px;
    border: 1px solid ${lightgrayColor};
  }

  .cart-frame .bookinfo-title {
    > div {
      margin-top: 5px;
      margin-bottom: 15px;
      font-size: 14px;
      color: ${grayColor};
    }
  }
  .icon-bookgubun {
    display: inline-block;
    padding: 0 8px;
    width: auto;
    height: 22px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
    border: 1px solid green;
    border-radius: 4px;

    p {
      color: green;
    }
  }

  /* 수량 div */
  .bookinfo-quantity {
    display: flex;
    flex-direction: row;

    input {
      border-radius: 4px 0px 0px 4px;
      border-right: #fff;
    }
  }

  .btn-qty-change {
    border: 1px solid ${lightgrayColor};
    background-color: #f6f7fb;
    border-radius: 0px 4px 4px 0px;
  }

  /* 가격 div */
  .box-price {
    font-size: 16px;
    letter-spacing: -1px;
    display: flex;
    flex-direction: column;

    > div {
    }
    strong {
      font-size: 24px;
      white-space: nowrap; // Prevent line break
    }

    p {
      line-height: 25px;
      margin-left: 5px;
      display: inline;
    }

    del {
      display: block;
      font-size: 14px;
      letter-spacing: -0.5px;
      color: #bfc1cd;
      margin-top: 7px;
    }
  }

  .cart-layer {
    display: flex;
    flex-direction: row;
    border: 2px solid ${lightgrayColor};
    height: 150px;
    align-items: center;
    justify-content: space-between;
  }

  .cart-checkbox {
    margin-right: 10px;
    label.cart-checkbox {
      display: inline-block;
      position: relative;
    }

    input[type="checkbox"] {
      width: 20px;
      height: 20px;

      &:checked {
        border: 2px solid ${blueColor};
      }
    }
  }

  .event-layer1 {
    > div {
      display: flex;
      gap: 10px;
      align-items: center; /* 가로 중앙 정렬 */
      margin-top: 50px;
      flex-direction: column;
      width: 900px;
      height: 360px;
      border: 1px solid ${grayColor};
      border-radius: 10px;
      text-align: center;
      img {
        max-width: 98%;
        max-height: 98%;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }

  .event-layer2 {
    > div {
      display: flex;
      gap: 10px;
      align-items: center; /* 가로 중앙 정렬 */
      margin-top: 10px;
      margin-bottom: 50px;

      > div:nth-of-type(1),
      > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        width: 440px;
        height: 360px;
        border: 1px solid ${grayColor};
        border-radius: 10px;
        text-align: center;
        /* margin-top: 20px; */
        justify-items: center;
        padding-top: 10px;

        img {
          width: 380px;
          height: 300px;
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .event-layer-sub {
    width: 150px;
    height: 30px;
    border: 1px dotted ${grayColor};
    border-radius: 50px;
    padding-top: 10px;
    align-self: center; /* 세로 중앙 정렬 */
    margin-top: 10px;
    cursor: pointer;
  }

  /* 합계금액 */
  .box-total-payment {
    display: flex;
    margin-top: 50px;
    margin-bottom: 32px;
    padding: 28px 32px;
    font-size: 14px;
    font-weight: 400;
    color: ${primaryColor};
    border: 1px solid #999aa9;
    justify-content: space-between;
    border-radius: 6px;

    .total-text {
      width: 80px;
      font-weight: 700;
    }

    .total-sum {
      line-height: 1;
      text-align: center;
      font-weight: 400;
      display: flex;
      flex-direction: row;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    .total-sum strong {
      margin-left: 15px;
      font-size: 18px;
      letter-spacing: -1px;
      color: #0091ff;
    }

    .total-sum i {
      margin: 0 20px;
      font-weight: 400;
      font-style: normal;
      font-size: 20px;
      color: #8d99ae;
    }

    .total-price {
      width: 240px;
      text-align: right;
      font-size: 14px;
      font-weight: 500;
    }

    .total-price strong {
      display: inline-block;
      vertical-align: middle;
      margin: -6px 2px 0 15px;
      font-size: 24px;
      letter-spacing: -1px;
      color: ${darkRedColor};
    }
  }

  .box-submit-payment {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    .btn-order {
      display: block;
    }

    .btn-order button {
      display: block;
      width: 218px;
      height: 74px;
      line-height: 1;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      color: #fff;
      border-radius: 4px;
      background: #3d4ed7;
      border: 0;
    }
    dt {
      line-height: 22px;
      font-size: 14px;
      font-weight: 500;
      color: ${darkRedColor};
      display: flex;
      align-items: center;
    }
    dd {
      font-size: 13px;
      font-weight: 400;
      line-height: 1.83;
      margin-left: 30px;
    }
  }

  .cart-item-delete {
    cursor: pointer;
  }

  .contain-cart-header-mobile {
    display: none;
  }
  /* 모바일(mobile) 스타일 start */
  @media (max-width: 768px) {
    section {
      width: 380px;
      font-size: 14px;
      margin-left: 15px;
    }

    .contain-cart-header-mobile {
      display: inline-block;
      margin: 0 15px 0 0;
      font-size: 28px;
      font-weight: 600;
      vertical-align: top;
      line-height: 1;
    }

    .cart-layer-title {
      display: none;
      margin-top: 5px;
    }

    /* 장바구니 도서리스트 프레임 */
    .cart-frame {
      display: flex;
      flex-direction: row;
      border: 2px solid ${lightgrayColor};
      /* height: 150px; */
      /* border: 1px solid red; */
      border-radius: 8px;
      height: 80px;
      margin-top: 10px;
      padding-top: 15px;
      padding-bottom: 15px;
      width: 360px;

      /* 첫번째 div(checkbox/도서이미지) */
      > div:nth-of-type(1) {
        width: 35%;

        display: flex;
        flex-direction: row;
      }
      /* 두번째 div(도서명/{수량/가격/삭제button}) */
      > div:nth-of-type(2) {
        width: 65%;
        display: flex;
        flex-direction: column;
        /* border: 1px solid red; */

        /* 도서명 div */
        > div:nth-of-type(1) {
          height: 50%;
          width: 100%;
          padding-top: 0px;
        }

        /* {수량/가격/삭제button} div */
        > div:nth-of-type(2) {
          display: flex;
          flex-direction: row;
          height: 50%;
          width: 100%;
          align-items: center;

          /* {수량} div */
          > div:nth-of-type(1) {
            /* width: 35%; */
          }
          /* {가격} div */
          > div:nth-of-type(2) {
            /* width: 35%; */
          }
          /* {삭제button} div */
          > div:nth-of-type(3) {
            /* width: 30%; */
          }
        }
      }
    }

    .cart-frame .book-image img {
      display: block;
      width: 80px;
      height: 80px;
      border: 1px solid ${lightgrayColor};
      /* border: 1px solid red; */
    }

    /* 수량 div */
    .bookinfo-quantity {
      > input {
        /* width: 50px; */
        height: 32px;
      }
    }

    /* 가격 div */
    .box-price {
      font-size: 16px;
      letter-spacing: -1px;
      display: flex;
      flex-direction: column;

      > div {
      }
      /* 정가 */
      strong {
        font-size: 16px;
        white-space: nowrap; // Prevent line break
      }

      p {
        line-height: 25px;
        margin-left: 5px;
        display: inline;
      }

      /* 할인가 */
      del {
        display: block;
        font-size: 12px;
        letter-spacing: -0.5px;
        color: #bfc1cd;
        margin-top: 3px;
      }
    }

    .btn-qty-change {
      border: 1px solid ${lightgrayColor};
      img {
        width: 15px;
        height: 15px;
      }
    }

    .event-layer1 {
      align-items: top;
      justify-content: top;
      height: 200px;
      > div {
        margin-top: 0px;
        width: 380px;
        height: 200px;
        /* height: 400px; */
      }
    }

    .total-payment-layer {
      /* height: 100px;
      margin-top: 0px;
      margin-bottom: 0px; */
      > div {
        padding-top: 0px;
        padding-bottom: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }
    .payment-layer {
      height: 50px;
    }
    .box-total-payment {
      display: flex;
      flex-direction: row;
      padding: 0;
      height: 40px;
      width: 360px;

      > div:nth-of-type(1) {
        width: 40%;
        border-right: 1px solid ${lightgrayColor};
      }
      > div:nth-of-type(2) {
        width: 60%;
        border: 1px solid ${lightgrayColor};
      }
      .total-text {
        /* border-bottom: 1px dotted gray; */
        height: 30px;
        display: none;
      }

      .total-sum {
        display: none;
      }

      .total-price {
        padding-top: 10px;
        padding-left: 10px;
        text-align: center;
      }
    }

    .box-submit-payment {
      /* position: relative; */
      display: flex;
      flex-direction: column;
      margin-top: 0px;
      height: 100px;

      button {
        display: block;
        width: 360px;
        height: 60px;
        line-height: 1;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        border-radius: 4px;
        background: ${blueColor};
        border: 0;
        margin-bottom: 20px;
      }

      dl {
        display: none;
      }
    }
  }
  /* 모바일 스타일 end */
`;
