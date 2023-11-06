import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const OrderCancelContainer = styled.div`
  section {
    width: 800px;
    height: 600px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: white;
    border-radius: 10px;
    /* border: 1px solid red; */
  }

  section > * {
    width: 100%;
    padding-right: 20px;
  }

  .article-top-header {
    font-size: 17px;
    font-weight: 700;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    div:nth-of-type(2) {
      cursor: pointer;
      padding-right: 10px;
    }
  }

  /* 주문일자 / 주문번호 */
  .order-summary-box {
    display: block;
    background-color: ${lightgrayColor};
    border: 1px solid ${grayColor};
    border-radius: 8px;
    overflow: hidden;
    word-break: break-all;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    font-size: 15px;
    font-weight: 500;

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

  /* 단계 표시 : 취소 상품 확인 / 취소 사유입력 */
  .step_item_one:not(.active) > div {
    display: none;
  }
  .step_item_two:not(.active) > div {
    display: none;
  }

  .order-step-box {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 20px;

    .step_round_text_list {
      margin-bottom: 20px;
      text-align: right;
      font-size: 0;

      .step_item.active {
        color: #000;
        font-weight: 700;
      }
      .step_item {
        display: inline-block;
        color: #767676;
        font-size: 14px;
        letter-spacing: -0.01em;
        line-height: 20px;
        margin-left: 16px;

        .step_num {
          display: inline-block;
          color: #fff;
          width: 20px;
          height: 20px;
          margin-right: 6px;
          background: #d5d5d5;
          border-radius: 10px;
          text-align: center;
          font-weight: 500;
          font-size: 12px;
        }
      }

      .step_item.active .step_num {
        background: #4dac27;
      }
    }
  }

  .order-step-box-title {
    div {
      font-weight: 600;
    }
    margin-bottom: 30px;
  }

  /* 도서 리스트 */
  .box-bookinfo-wrap {
    li {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 10px;

      div:nth-of-type(1) {
        flex: 10%;
      }
      div:nth-of-type(2) {
        flex: 80%;
      }
      div:nth-of-type(3) {
        flex: 10%;
      }
    }

    img {
      width: 80px;
      height: 100px;
    }

    .bookinfo-title {
      display: flex;
      flex-direction: column;
      gap: 20px;
      div:nth-of-type(2) {
        color: ${grayColor};
      }
    }
  }

  .box-cancel-form-wrap {
    display: flex;
    flex-direction: row;

    li:nth-of-type(1) {
      flex: 20%;
      padding-top: 20px;
    }
    li:nth-of-type(2) {
      flex: 80%;
      select {
        width: 500px;
      }
    }
  }

  .cancel-memo {
    font-size: 16px;
    width: 80%;
    position: relative;

    .custom-select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
      /* font-size: 16px; */
      outline: none; /* 선택 상자 클릭 시 파란 테두리 제거 */
      cursor: pointer; /* 커서 스타일을 포인터로 변경 */
      background: #fff;
    }

    .custom-select:hover {
      background-color: #f0f0f0; /* 마우스 오버 시 배경 색상 변경 */
    }

    .custom-select:focus {
      border-color: #5055b1; /* 선택 상자가 포커스될 때 테두리 색상 변경 */
    }

    input[type="text"] {
      width: 78%;
      height: 150px;
      border-radius: 10px;
      border: 1px solid #ccc;
      margin-top: 5px;
      text-align: top;

      padding: 10px; /* 필요에 따라 조정할 수 있는 패딩 값 */
      border: 1px solid #ccc;
    }

    input[type="text"]::placeholder {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px;
      color: #999;
      pointer-events: none; /* 마우스 이벤트를 비활성화하여 입력란 위에서 발생하지 않도록 함 */
    }
  }

  .box-payment-button {
    > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
      min-height: 80px;
      gap: 20px;

      button {
        width: 180px;
        height: 50px;
        line-height: 1;
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        border: 1px;
        border-radius: 4px;

        color: white;
        cursor: pointer;
      }

      /* &:hover {
        background: ${blueColor};
        color: white;
      } */
      .box-blue {
        border-color: ${blueColor};
        background: ${blueColor};
        border: 1px solid #5055b1;
      }
      .box-gray {
        border-color: ${grayColor};
        background: ${lightgrayColor};
        color: #000;
      }
    }
  }

  .scroll-container {
    min-height: 200px;
    max-height: 250px;
    border: 1px solid #ccc;
    overflow: auto;
    border-radius: 8px;

    .scroll-content {
      padding: 10px;
    }
  }
  /* Thin scrollbar styling */
  .scroll-container::-webkit-scrollbar {
    width: 3px;
    height: 50px;
  }

  .scroll-container::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .scroll-container::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 3px;
  }

  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9990;
  background-color: rgba(0, 0, 0, 0.7);
`;
