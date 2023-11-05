import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const TestContainer = styled.div`
  section {
    width: 900px;
    border: 1px solid red;
  }

  section > * {
    width: 100%;
  }
  .scroll-container {
    /* width: 300px; */
    height: 200px;
    border: 1px solid #ccc;
    overflow: auto;
  }

  .scroll-content {
    padding: 10px;
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
