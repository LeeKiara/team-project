import styled from "@emotion/styled";

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

    .alert_text_sm {
      margin-top: 6px;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #595959;
    }

    .btn-height {
      height: 50px;
    }

    .btn-bgcolor {
      background-color:#999aa9;
    }
`;
