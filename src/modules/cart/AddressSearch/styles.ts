import styled from "@emotion/styled";

export const AddressSearchStyle = styled.div`
  .modal-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 20;
  }

  .modal-box-layer {
    display: fixed;
    flex-direction: column;
    justify-content: center;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    border: 1px solid #3e3c50;
    background: #fff;
    z-index: 1;

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
