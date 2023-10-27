import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const ShowMessageModalStyle = styled.div`
  .dialog_contents_layout {
    position: fixed;
    top: 30%;
    left: 30%;
    transform: translate(-50% -50%);
    background-color: white;
    /* background-color: rgba(0, 0, 0, 0.7); */
    padding: 20px;
    box-shadow: 0px 0px 10px gray;
    width: 500px;
    height: 180px;
    border-radius: 30px;

    .dialog_contents {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      align-items: stretch;
      min-height: 45px;
      text-align: center;
    }

    .dialog_footer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-shrink: 0;
      flex-wrap: wrap;
      margin-top: 34px;
    }

    .btn-confirm {
      background-color: ${lightgrayColor};
      border: 1px solid ${grayColor};
      color: black;
      width: 150px;
      height: 45px;
      border-radius: 10px;

      &:hover {
        background: ${grayColor};
        color: white;
      }
    }
    .alert_text_sm {
      margin-top: 6px;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      /* background-color: ${lightgrayColor};
      color: black; */
    }
  }

  .btn-height {
    height: 50px;
  }

  .btn-bgcolor {
    /* background-color:#999aa9; */
    /* background-color: ${lightgrayColor}; */
  }
`;
