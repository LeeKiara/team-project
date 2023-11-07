import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
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

  .cart-layer {
    display: flex;
    flex-direction: row;
    border: 2px solid ${lightgrayColor};
    height: 150px;
    align-items: center;
    justify-content: space-between;
  }

  /* 장바구니 도서정보 */
  .bookinfo {
    /* flex: 1; */
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    /* gap: 10px; */
    width: 60%;

    label {
      margin-top: 0px;
      margin-left: 10px;
    }
    .bookinfo-title {
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

    .image {
      display: inline-block;
      margin: 0 10px 0 0;
      width: 110px;
      vertical-align: top;
    }

    .image img {
      display: block;
      width: 110px;
      height: 124px;
      border: 1px solid ${lightgrayColor};
    }
  }

  /* 장바구니 가격정보 */
  .priceinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    margin: 0px 20px;

    div {
      display: flex;
      flex-direction: row;
    }
    .btn-qty-change {
      display: flex;
      flex-direction: column;
    }

    input {
      width: 100px;
    }

    .box-price {
      font-size: 16px;
      letter-spacing: -1px;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 24px;
        white-space: nowrap; // Prevent line break
      }

      p {
        line-height: 25px;
        margin-left: 5px;
      }

      del {
        display: block;
        font-size: 14px;
        letter-spacing: -0.5px;
        color: #bfc1cd;
        margin-top: 7px;
      }
    }

    /* .box-price strong {
      font-size: 24px;
      white-space: nowrap; // Prevent line break
    } */

    /* .box-price del {
      display: block;
      font-size: 14px;
      letter-spacing: -0.5px;
      color: #bfc1cd;
    } */
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

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    section {
      width: 320px;
    }
    .cart-layer-title {
      display: none;
    }

    .cart-layer {
      flex-direction: column;
      height: 180px;
      align-items: center; /* 수직 가운데 정렬 추가 */
      justify-content: space-between;
    }
    .bookinfo {
      flex: 1;
      display: flex;
      flex-direction: row;
      width: 300px;
    }
    .priceinfo {
      display: flex;
      flex-direction: row;
      align-items: center; /* 수직 가운데 정렬 추가 */
      gap: 30px;
      margin: 10px 20px;
    }
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
    }

    .total-sum strong {
      display: inline-block;
      position: relative;
      top: -2px;
      margin: 0 0 0 15px;
      line-height: 1.5;
      vertical-align: middle;
      font-size: 18px;
      letter-spacing: -1px;
      color: #0091ff;
    }

    .total-sum i {
      display: inline-block;
      position: relative;
      top: -2px;
      margin: 0 20px;
      font-weight: 400;
      vertical-align: middle;
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
  /* 모바일 스타일 */
  @media (max-width: 768px) {
    .payment-layer {
      height: 50px;
    }
    .box-total-payment {
      display: flex;
      flex-direction: column;
      padding: 0;

      .total-text {
        /* border-bottom: 1px dotted gray; */
        height: 30px;
      }
      .total-sum strong {
        display: inline;
        text-align: left;
      }

      .total-price {
        display: inline;
        text-align: left;
      }
    }

    .box-submit-payment {
      /* position: relative; */
      display: flex;
      flex-direction: column;
      /* margin-top: 32px; */

      .btn-order button {
        display: block;
        width: 330px;
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
`;
