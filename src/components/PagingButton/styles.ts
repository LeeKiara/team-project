import styled from "@emotion/styled";

export const PagingContainer = styled.div`
  nav {
    display: flex;
    justify-content: center;
  }
  nav > ol {
    width: 238px;
    display: flex;
    font-size: 16px;
    justify-content: center;
  }
  .numberbox {
    cursor: pointer;
    width: 34px;
    text-align: center;
    border: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .numberbox:nth-of-type(1) {
    border-radius: 5px 0 0 5px;
  }
  .numberbox:last-of-type {
    border-radius: 0 5px 5px 0;
  }
  .numberbox > a {
    color: #337ab7;
  }
  .numberbox:hover {
    background-color: #dddddd;
  }
  .numberbox:nth-of-type(1):hover {
    background-color: #dddddd;
    border-radius: 5px 0 0 5px;
  }

  .numberbox > button {
    border-radius: 5px;
    border: none;
    background-color: white;
    vertical-align: top;
    font-size: 20px;
    color: #337ab7;
    height: 30px;
  }
  .numberbox > button:hover {
    background-color: #dddddd;
    border-radius: 5px;
    cursor: pointer;
  }
  .numberbox:last-of-type:hover {
    background-color: #dddddd;
  }
`;
