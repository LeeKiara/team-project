import styled from "@emotion/styled";

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

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #36364b;
  }

  input[type^="text"] {
    display: block;
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
`;
