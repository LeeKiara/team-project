import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const blueColor = "#3d4ed7";

export const CartSidebarContainer = styled.div`
  #sidebar {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }

  main {
    display: flex;
    /* width: 60%; */
    /* gap: 20px; */
  }
  main > aside {
    width: 0px;
    /* border: 2px solid black; */
  }

  input[type^="text"] {
    /* display: block; */
    margin: 0;
    padding: 0;
    width: 100%;
    height: 40px;
    color: #36364b;
    font-size: 14px;
    text-indent: 16px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
  }

  li {
    list-style: none;
  }

  .box-gray {
    background-color: white;
    border: 1px solid ${grayColor};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${primaryColor};
    font-size: 15px;
    font-weight: 500;
    padding: 0 28px;
    text-align: center;
    width: 200px;
    height: 56px;
    line-height: 56px;
  }

  .box-blue {
    background-color: white;
    border: 1px solid ${blueColor};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${primaryColor};
    font-size: 15px;
    font-weight: 500;
    padding: 0 28px;
    text-align: center;
    width: 200px;
    height: 56px;
    line-height: 56px;
  }

  .font-blue {
    color: ${blueColor};
  }

  .pointer {
    cursor: pointer;
  }
`;
