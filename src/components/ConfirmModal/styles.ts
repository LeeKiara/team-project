import styled from "@emotion/styled";

export const ConfirmModalStyle = styled.div`
  div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0px 0px 10px gray;
  }

  div > button {
    display: inline-block;
    padding: 12px 15px;
    margin-bottom: 0;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 4px;
    width: 200px;
    background-color: #e97171;
    color: #fff;
    font-size: 18px;
  }
  div > button > svg {
    vertical-align: middle;
    font-size: 20px;
    margin-right: 5px;
  }
`;
