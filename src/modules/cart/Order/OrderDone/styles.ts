import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const OrderDoneContainer = styled.div`
  .box-order-done {
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: 200px;
    text-align: center;
    /* border: 1px solid black; */

    .text1 {
      font-size: 18px;
      font-weight: 600;
    }

    .text2 {
      font-size: 34px;
      font-weight: 800;
    }

    .orderno {
      font-size: 20px;
      width: 400px;
    }
  }

  .box-pagemove {
    display: flex;
    gap: 10px;

    button {
      cursor: pointer;

      &:hover {
        background-color: ${blueColor};
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
  z-index: 9990;
  background-color: rgba(0, 0, 0, 0.7);
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
