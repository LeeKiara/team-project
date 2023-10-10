import styled from "@emotion/styled";

export const CartContainer = styled.div`
  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 900px;
  }
  .cart-header {
    margin-bottom: 20px;
  }
  .cart-header .title {
    display: inline-block;
    margin: 0 15px 0 0;
    font-size: 28px;
    font-weight: 600;
    vertical-align: top;
    line-height: 1;
  }

  .cart-layer-title {
    display: flex;
    flex-direction: row;
    background-color: #f5f6f9;
    width: 880px;
    height: 50px;
    align-items: center;
    /* justify-content: space-between; */
    padding-left: 20px;
    /* padding-right: 20px; */
    color: #36364b;
    font-weight: 400;

    div {
      /* border: 1px solid black; */
      text-align: center;
    }
    div:nth-of-type(1) {
      width: 20px;
    }
    div:nth-of-type(2) {
      width: 700px;
    }
    div:nth-of-type(3) {
      width: 120px;
    }
    div:nth-of-type(4) {
      width: 180px;
    }
  }
  .cart-layer {
    display: flex;
    flex-direction: row;
    border: 2px solid #f5f6f9;

    height: 150px;
    align-items: center; /* 수직 가운데 정렬 추가 */
  }
  .bookinfo {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .priceinfo {
    display: flex;
    flex-direction: row;
    align-items: center; /* 수직 가운데 정렬 추가 */

    gap: 30px;
    margin: 0px 20px;
  }

  .bookinfo label {
    margin-top: 10px;
    margin-left: 10px;
  }
  .box-tag-bookgubun {
    margin: 8px 0;
  }

  .icon-tag-bookgubun {
    display: inline-block;
    padding: 0 8px;
    width: auto;
    height: 22px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
    color: #0c9cff;
    border: 1px solid #0c9cff;
    border-radius: 4px;
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

  .book-quantity {
    display: inline-block;
    position: relative;
    width: 100%;
    vertical-align: middle;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 15px;
  }

  .book-quantity input[type="number"] {
    display: block;
    float: left;
    margin: 0;
    padding: 0;
    /* width: calc(100% - 20px); */
    width: calc(100%);
    height: 30px;
    font-size: 14px;
    text-indent: 16px;
    border: none;
    border-radius: 0;
  }

  .book-quantity .quantity-nav {
    position: absolute;
    right: 0;
    top: 1px;
    height: 100%;
  }

  .book-quantity .quantity-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 20px;
    text-align: center;
    color: #808fa3;
    font-size: 13px;
    line-height: 20px;
    cursor: pointer;
    background: #f6f7fb;
    border-left: 1px solid #e1e1e1;
    transform: translateX(-100%);
    user-select: none;
  }

  .book-quantity .quantity-button.quantity-up {
    position: absolute;
    height: 50%;
    top: 0;
    border-bottom: 1px solid #eee;
  }

  .book-quantity .quantity-button.quantity-down {
    position: absolute;
    bottom: 0;
    height: 50%;
  }

  .box-price {
    font-size: 16px;
    letter-spacing: -1px;
    /* border: 1px solid black; */
  }

  .box-price strong {
    font-size: 24px;
  }

  .box-price del {
    display: block;
    font-size: 14px;
    letter-spacing: -0.5px;
    color: #bfc1cd;
  }

  /* 합계금액 */
  .box-total-payment {
    display: flex;
    margin-top: 50px;
    margin-bottom: 32px;
    padding: 28px 32px;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border: 1px solid #999aa9;
    justify-content: space-between;
  }

  .box-total-payment .total-text {
    width: 80px;
    font-weight: 700;
  }

  .box-total-payment .total-sum {
    line-height: 1;
    text-align: center;
    font-weight: 400;
  }

  .box-total-payment .total-sum strong {
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

  .box-total-payment .total-sum i {
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

  .box-total-payment .total-price {
    width: 240px;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
  }

  .box-total-payment .total-price strong {
    display: inline-block;
    vertical-align: middle;
    margin: -6px 2px 0 15px;
    font-size: 24px;
    letter-spacing: -1px;
    color: #e02020;
  }

  .box-submit-payment {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }
  .box-submit-payment .btn-order {
    display: block;
  }

  .box-submit-payment .btn-order button {
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
  .box-submit-payment dt {
    margin: 0 0 16px 0;
    padding: 0 0 0 30px;
    line-height: 22px;
    font-size: 14px;
    font-weight: 500;
    color: #e02020;
    background: url(/images/pc/icon_notice_type1.png) no-repeat left top;
  }

  element.style {
  }
  .box-submit-payment dd {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.83;
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
        background: #3d4ed7;
        border: 0;
        margin-bottom: 20px;
      }

      dl {
        display: none;
      }
    }
  }
`;
