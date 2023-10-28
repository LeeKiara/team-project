import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const OrderListContainer = styled.div`
  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 900px;
    margin-bottom: 50px;
  }
  .order-header {
    margin-bottom: 20px;

    .title {
      font-size: 28px;
      font-weight: 600;
    }
  }

  .box-period-payment {
    display: flex;
    margin-top: 50px;
    margin-bottom: 32px;
    padding: 28px 32px;
    font-size: 14px;
    font-weight: 400;
    color: ${primaryColor};
    border: 1px solid #999aa9;
    justify-content: space-between;

    .total-text {
      width: 80px;
      font-weight: 700;
    }
  }
  .contain-search-date {
    display: flex;
    margin-bottom: 48px;
    padding: 20px 24px;
    border: 1px solid #999aa9;
  }

  .box-date1 {
    display: flex;
    margin: 0 24px 0 0;
  }

  .box-date1 .title {
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
  }

  .box-date1 .form-radio.checked {
    color: #36364b;
    font-weight: 500;
    background: #e6eaf2;
    border-color: #e6eaf2;
  }
  .box-date1 .form-radio {
    width: 90px;
    height: 38px;
    /* height: 26px; */
    border: 1px solid #e1e1e1;
    border-radius: 20px;
    cursor: pointer;
    color: #3f4466;
    display: inline-block;
    line-height: 38px;
    /* line-height: 22px; */
    font-size: 14px;
    /* font-size: 16px; */
    font-weight: 400;
    margin: 0 0 0 8px;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-align: center;
    text-indent: 0;
    transition: all 0.2s ease-in-out;
    vertical-align: middle;
  }

  label {
    cursor: default;
  }

  .form-radio input[type="radio"] {
    position: absolute;
    left: -1000000px;
    top: 0;
  }
  input[type~="radio"] {
    position: relative;
    top: -1px;
    border: none;
    margin: -1px 0;
  }
  input {
    padding-top: 2px;
    vertical-align: middle;
    border: none;
  }
  .box-date2 input[type="date"] {
    width: 150px;
    border: 1px solid #aaa;
    border-radius: 4px;
    margin: 4px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    display: inline-block;
    font-family: "Noto Sans KR", sans-serif;
  }

  .btn-orderlist {
    button {
      width: auto;
      height: 38px;
      border: 0;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      display: block;
      margin-top: 5px;
      margin-left: 15px;
      letter-spacing: 4px;
      line-height: 38px;
      font-size: 14px;
      font-weight: 500;
      padding: 0 28px;
      border: 1px solid #3d4ed7;
      color: #3d4ed7;
      background-color: white;

      /* 마우스 호버 시 스타일 변경 */
      &:hover {
        background: ${blueColor};
        color: white;
      }
    }
  }

  .navigation-sub-type2 {
    margin: 0 0 24px 0;
    padding: 0;
    min-width: 0;
    box-sizing: border-box;

    .area-inner {
      margin: 0 auto;
      width: 800px;
      padding: 0;
      text-align: right;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 400;
      box-sizing: border-box;
    }

    a.on {
      font-size: 20px;
      font-weight: 500;
      color: #36364b;
    }
    a {
      display: inline-block;
      position: relative;
      margin: 0 11px;
      padding: 0 0 15px 0;
      font-size: 18px;
      font-weight: 400;
      color: #999aa9;
      vertical-align: bottom;
      transition: all 0.4s ease-in-out;
    }
  }

  .orders-layer-title {
    display: flex;
    flex-direction: row;
    background-color: ${lightgrayColor};
    width: 880px;
    height: 50px;
    align-items: center;
    padding-left: 20px;
    color: ${primaryColor};
    font-weight: 400;
  }

  .orders-layer {
    display: flex;
    flex-direction: row;
    border: 2px solid ${lightgrayColor};
    height: 150px;
    align-items: center;
    justify-content: space-between;
  }

  .bookinfo {
    /* flex: 1; */
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    /* gap: 50px; */

    label {
      margin-top: 0px;
      margin-left: 10px;
    }
    .box-bookgubun {
      margin: 8px 0;
    }
    .icon-bookgubun {
      display: inline-block;
      padding: 0 8px;
      width: auto;
      height: 22px;
      line-height: 20px;
      font-size: 12px;
      font-weight: 400;
      color: ${lightblueColor};
      border: 1px solid ${lightblueColor};
      border-radius: 4px;
    }

    .image {
      display: inline-block;
      margin: 0 23px 0 5px;
      width: 110px;
      vertical-align: top;
    }

    .image img {
      display: block;
      width: 110px;
      height: 124px;
      border: 1px solid ${lightgrayColor};
    }

    .order-date {
      font-size: 14px;
      color: ${lightblueColor};
    }
    .subject {
      display: block;
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
      width: 370px;
      /* max-height: 60px; */
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 5px;
      margin-bottom: 20px;
    }
  }

  .order-number {
    /* font-family: Roboto; */
    color: #717fa3;
  }

  .order-state {
    font-size: 18px;
    letter-spacing: -0.5px;
    font-weight: 500;
    color: ${darkRedColor};
    margin-right: 20px;
    text-align: center;
  }

  .payment-method {
    font-size: 18px;
    letter-spacing: -0.5px;
    font-weight: 500;
    color: ${blueColor};
    margin-right: 20px;
  }

  nav {
    display: flex;
    justify-content: center;
    magin-top: 100px;
  }
  nav > ol {
    width: 238px;
    display: flex;
    font-size: 16px;
    justify-content: center;
  }
  .numberbox {
    cursor: pointer;
    width: 34px;
    text-align: center;
    border: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .numberbox:nth-of-type(1) {
    border-radius: 5px 0 0 5px;
  }
  .numberbox:last-of-type {
    border-radius: 0 5px 5px 0;
  }
  .numberbox > a {
    color: #337ab7;
  }
  .numberbox:hover {
    background-color: #dddddd;
  }
  .numberbox:nth-of-type(1):hover {
    background-color: #dddddd;
    border-radius: 5px 0 0 5px;
  }

  .numberbox > button {
    border-radius: 5px;
    border: none;
    background-color: white;
    vertical-align: top;
    font-size: 20px;
    color: #337ab7;
    height: 30px;
  }
  .numberbox > button:hover {
    background-color: #dddddd;
    border-radius: 5px;
    cursor: pointer;
  }
  .numberbox:last-of-type:hover {
    background-color: #dddddd;
  }
  /* 모바일 스타일 */
  @media (max-width: 768px) {
    section {
      width: 320px;
    }
    .order-layer-title {
      display: none;
    }

    .order-layer {
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

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    .payment-layer {
      height: 50px;
    }
    .box-period-payment {
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
  }
`;
