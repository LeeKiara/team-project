import styled from "@emotion/styled";

export const ConfirmModalStyle = styled.div`
  .modal-container {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding-top: 30px;
    box-shadow: 0px 0px 10px gray;
    width: 300px;
    height: 150px;

    p {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
  }

  .modal-box-layer {
    display: fixed;
    flex-direction: column;
    justify-content: center;

    button {
      width: 100px;
      height: 40px;

      background-color: #bfc1cd;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
      text-align: center;
      cursor: pointer;
      margin: 10px;
      margin-top: 50px;
    }
  }
`;
