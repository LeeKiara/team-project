import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const PaymentInfoContainer = styled.div`
  width: 700px;
  height: 300px;
  padding-top: 40px;
  padding-left: 20px;
  background-color: white;
  border-radius: 40px;

  article {
    width: 680px;
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

  div:nth-of-type(1) {
    margin-bottom: 20px;

    h1 {
      font-size: 20px;
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

  .box-payment-button {
    text-align: center;

    button {
      width: 180px;
      height: 50px;
      line-height: 1;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      border: 1px;
      border-radius: 4px;
      /* border-color: ${grayColor}; */
      background: ${lightblueColor};
      color: black;
      cursor: pointer;

      /* 마우스 호버 시 스타일 변경 */
      &:hover {
        background: ${blueColor};
        color: white;
      }
    }
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
  /* padding: 20px; */ /* 이 부분은 제거 */
`;

export const Container = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
