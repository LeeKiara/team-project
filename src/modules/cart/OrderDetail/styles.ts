import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const OrderDetailContainer = styled.div`
  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 900px;
  }

  .order_summary_box {
    display: block;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 16px;
    overflow: hidden;
    word-break: break-all;
  }

  .order_date {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    font-weight: 700;
  }

  .order_summary_box .box_header .label .gap {
    display: inline-block;
    font-size: 0;
    width: 1px;
    height: 10px;
    background-color: #d5d5d5;
    margin: 6px 10px 0 10px;
    vertical-align: top;
    box-sizing: border-box;
  }

  .order_num {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.01em;
    font-weight: 500;
    .num {
      margin-left: 5px;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.01em;
    }
  }

  .order-layer {
    border-top: 1px solid #000;
    border-bottom: 1px solid #ccc;
    height: 60px;
    line-height: 60px;
    font-weight: 600;
    padding-left: 50px;
    margin-top: 30px;
  }
  .order-item-layer {
    display: flex;
    flex-direction: row;
    /* border: 2px solid ${lightgrayColor}; */
    height: 100px;
    align-items: center;
  }

  .order-item-layer-title {
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
      margin: 0 23px 0 0;
      width: 110px;
      vertical-align: top;
    }

    .image img {
      display: block;
      width: 82px;
      height: 109px;
      border: 1px solid ${lightgrayColor};
    }

    .subject {
      display: block;
      font-size: 18px;
      line-height: 26px;
      font-weight: 500;
      width: 370px;
      max-height: 55px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .box-payment-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 30px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #eaeaea;
    box-sizing: border-box;
    margin-bottom: 30px;

    div {
      /* border: 1px solid red; */
      width: 80%;
      padding-right: 80px;
    }
    div dl {
      /* border: 1px dotted gray; */
      display: flex;
      flex-direction: row;
      gap: 30px;
      justify-content: space-between;
      height: 30px;
    }
  }

  /* ---------------------------- */
  .box_header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    min-height: 60px;
    padding: 15px 24px;
    background-color: rgba(80, 85, 177, 0.06);
    box-sizing: border-box;
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

  .btn-type1 button {
    width: auto;
    height: 40px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    margin-left: 15px;
    letter-spacing: 4px;
    line-height: 38px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 28px;
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

  .order-number {
    /* font-family: Roboto; */
    color: #717fa3;
  }

  .order-state {
    font-size: 18px;
    letter-spacing: -0.5px;
    font-weight: 500;
    color: #0091ff;
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
