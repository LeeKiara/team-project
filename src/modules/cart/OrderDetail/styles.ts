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

  .order-summary-box {
    display: block;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 16px;
    overflow: hidden;
    word-break: break-all;

    .order-date-no {
      cursor: default;
    }

    .box_header .order-date-no .gap {
      display: inline-block;
      font-size: 0;
      width: 1px;
      height: 10px;
      background-color: #d5d5d5;
      margin: 6px 10px 0 20px;
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
  }

  .box_header .order-cancel button {
    width: 160px;
    height: 40px;
    line-height: 1;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    background: ${lightblueColor};
    color: white;
    border: 0;
    cursor: pointer;

    /* 마우스 호버 시 스타일 변경 */
    &:hover {
      background: ${blueColor};
      color: white;
    }
  }

  .order_date {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    font-weight: 700;
  }

  .article-layer-title {
    border-top: 1px solid #000;
    border-bottom: 1px solid #ccc;
    height: 60px;
    line-height: 60px;
    font-weight: 600;
    padding-left: 40px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
  }
  .order-item-container {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  .order-item-layer > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 300px;
    border: 1px solid #eaeaea;
    border-radius: 16px;

    div {
      /* width: 100px; */
    }
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

  .article-layer-orderitems {
    border: 1px solid ${grayColor};
    border-radius: 12px;
    padding: 0px 30px 5px 30px;

    article > div {
      font-weight: 600;
      margin-top: 20px;
    }
  }

  .box-bookinfo-wrap {
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid ${grayColor}; */

    .bookinfo {
      display: flex;
      flex-direction: row;
      flex-basis: calc(22.22% - 20px);

      .image img {
        width: 100px;
        height: 150px;
        /* margin: 10px 5px; */
        /* border: 1px solid ${lightgrayColor}; */
      }

      .bookItem-title {
        font-size: 15px;
        line-height: 26px;
        font-weight: 500;
        width: 100px;
        max-height: 55px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .bookItem-quantity {
        font-size: 14px;
        color: ${grayColor};
      }
    }
  }

  .box-payment-container:not(.active) > div {
    display: none;
  }
  .box-cancel-container:not(.active) > div {
    display: none;
  }
  .box-payment-container {
    div {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .box-cancel-container {
    div {
      padding-left: 20px;
      padding-right: 20px;
    }
    div:nth-of-type(3) {
      padding-left: 38px;
      font-weight: 600;
    }
  }

  .box-payment-wrap {
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    box-sizing: border-box;
    gap: 30px;
    /* border: 1px dotted black; */

    div:nth-of-type(1) {
      flex: 50%;
    }
    div:nth-of-type(2) {
      flex: 50%;
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

  .box-submit-payment {
    position: relative;
    display: flex;
    justify-content: center;
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

  .box_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    padding: 15px 24px;
    background-color: rgba(80, 85, 177, 0.06);
    box-sizing: border-box;
  }

  /* ---------------------------- */

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
      width: 370px;
    }

    .box_header {
      flex-direction: column;
      gap: 15px;
    }

    .box_header .order-cancel button {
      width: 340px;
    }
    .box-payment-wrap {
      flex-direction: column;
      gap: 5px;
    }
    .box-submit-payment .btn-order button {
      width: 340px;
    }
  }
`;
