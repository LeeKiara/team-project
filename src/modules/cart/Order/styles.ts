import styled from "@emotion/styled";

// import deleteButtonImage from "@/modules/cart/assets/icon_delete_order.png";

export const OrderContainer = styled.div`
  input,
  select {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #36364b;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 900px;
  }

  .contain-payment-header {
    margin-bottom: 20px;

    .title {
      display: inline-block;
      margin: 0 15px 0 0;
      font-size: 28px;
      font-weight: 600;
      vertical-align: top;
      line-height: 1;
    }
  }

  /* 주문결제 */
  .wrap-payment {
    position: relative;

    .contain-payment-body {
      width: 640px;
      /* border: 1px solid red; */
    }

    font-size: 15px;
    font-weight: 400;
  }

  .box-list-payment {
    position: relative;
    height: auto;
    overflow: hidden;
    width: 627px;
    border: 2px solid #f5f6f9;
    margin-bottom: 10px;

    .bookinfo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .priceinfo {
        /* flex: 1; */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 5px;
        margin: 10px 0px;

        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 15px;
          font-size: 14px;
        }
        > div:nth-of-type(2) {
          color: rgb(239, 0, 124);
        }

        .icon-tag-pricegubun {
          display: inline-block;
          /* padding: 0 8px; */
          width: 60px;
          height: 22px;
          line-height: 20px;
          font-size: 13px;
          font-weight: 400;
          color: white;
          border: 1px solid #bfc1cd;
          border-radius: 4px;
          background-color: #bfc1cd;
          text-align: center;
        }
      }
    }

    .link-detail {
      display: flex;
      float: left;
      padding: 0 15px;
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: -0.67px;
    }

    .image {
      display: inline-block;
      margin: 0 23px 0 0;
      width: 110px;
      vertical-align: top;
    }

    .image img {
      display: block;
      width: 110px;
      height: 124px;
      border: 1px solid #e1e1e1;
    }

    .text {
      display: flex;
      flex-direction: column;
      font-weight: 400;
      max-width: 380px;
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
  }

  /* 주문자 정보 */
  .title-order {
    margin: 0 0 24px 0;
    padding: 12px 0 12px 24px;
    font-size: 16px;
    font-weight: 700;
    background: #f5f6f9;
  }

  .box-information-order {
    padding: 0 24px 34px 24px;
    /* gap: 20px; */

    .box-name {
      margin-bottom: 16px;
    }

    .box-phonenum {
      display: flex;
      margin-bottom: 16px;
      gap: 10px;
      input {
        width: 120px;
      }
    }

    .box-phonenum .form-text {
      width: 115px;
    }

    .box-email {
      display: flex;
      margin-bottom: 16px;
      vertical-align: middle;
      line-height: 45px;
      gap: 5px;
      input {
        width: 200px;
      }
    }

    .box-memo select {
      background: #fff;
      border-radius: 4px;
      border: 1px solid #e1e1e1;
      cursor: pointer;
      /* font-size: 16px; */
      height: 40px;
      /* margin: 0; */
      margin-top: 12px;
      outline: none;
      padding: 0 30px 3px 16px;
      position: relative;
      vertical-align: middle;
      width: 400px;
      z-index: 1;
    }

    .box-radio {
      margin-bottom: 24px;
      padding: 10px 0 20px 0;
      border-bottom: 1px solid #f5f6f9;
    }

    .text-notice-type1 strong {
      color: #3d4ed7;
    }

    .box-address {
      /* margin-bottom: 16px; */
      display: flex;
      flex-direction: column;
      gap: 10px;

      button {
        padding: 0 28px;
        width: 130px;
        /* height: 56px; */
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        /* line-height: 54px; */
        border: 1px solid #3d4ed7;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
        color: #3d4ed7;
        background-color: white;
      }

      div {
        display: flex;
        gap: 10px;
      }
    }
  }

  .box-information-payment {
    /* margin: -24px 0 48px 0; */

    div:nth-of-type(1) {
      display: flex;
      gap: 10px;
      justify-content: space-between;

      button {
        padding: 0 28px;
        width: 200px;
        height: 56px;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        /* border: 1px solid #3d4ed7; */
        border: 1px solid #999aa9;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
        /* color: #3d4ed7; */
        color: #999aa9;
        background-color: white;
      }

      .button-selected {
        border: 1px solid #3d4ed7;
        color: #3d4ed7;
      }
    }

    .payment-tab-cont {
      font-size: 14px;
      strong {
        font-size: 18px;
        font-weight: 500;
      }
    }

    .payment-tab-cont {
      display: none;
    }

    .payment-tab-cont.visible {
      display: block;
    }
  }

  /* 결제 예정금액 sidebar */
  .wrap-payment .box-payment-sidebar {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: 258px;

    .contain-calcpay {
      display: block;
      position: relative;
      padding: 24px;
      border: 1px solid #e1e1e1;
      box-sizing: border-box;
      background: #fff;
    }

    .title {
      margin-bottom: 24px;
      font-size: 18px;
      font-weight: 500;
    }

    .payment-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .payment-item.total dt {
      font-size: 16px;
      color: #fd342a;
    }

    .payment-item dt {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 14px;
      font-weight: 400;
    }

    .div-type2 {
      margin-bottom: 24px;
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 1px;
      background: #e1e1e1;
      border: none;
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
        height: 44px;
        line-height: 1;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        border-radius: 4px;
        background: #3d4ed7;
        border: 0;
        cursor: pointer;
      }
    }
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
`;
