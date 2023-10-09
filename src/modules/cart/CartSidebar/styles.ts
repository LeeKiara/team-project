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

  /*
  main > aside > ul {
    margin: 0;
    padding: 0;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  main > aside > h3 {
    margin: 0;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: antiquewhite;
  }
  main > section {
    width: 100%;
  } */

  li {
    list-style: none;
  }
`;
