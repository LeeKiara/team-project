import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const TestForm = styled.div`
  .cart-checkbox {
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
`;
