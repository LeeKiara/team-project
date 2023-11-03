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
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loading-container {
    animation: blink 1s 3; /* "blink" 애니메이션을 3번만 실행합니다. */
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 0; /* 시작과 중간 지점에서 아이콘을 숨깁니다. */
    }
    100% {
      opacity: 1; /* 끝 지점에서 아이콘을 보이게 합니다. */
    }
  }
`;
