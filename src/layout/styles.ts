import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    color: black;
  }
  li {
    cursor: pointer;
  }
  #center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /* header {
    display: flex;
    flex-direction: column;
  } */
  header > div {
    margin: auto;
    width: 65vw;
  }
  header > div > aside {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 5px;
  }
  header > div > aside > a > button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  header > div > aside > button > span {
  }
  .header-nav {
    /* border: 1px solid #97a5ac; */
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    padding: 5px;
  }
  .header-nav ul {
    width: 65vw;
    margin: auto;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
  }
  .header-nav li {
    list-style: none;
    font-size: 20px;
    font-weight: bold;
  }
  #searchForm {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 20px;
  }
  #searchForm > h1 > a {
    vertical-align: middle;
    font-size: 30px;
  }
  #searchForm > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #searchForm > form > label {
    height: 100%;
    border: 3.5px solid #fdbebe;
    border-radius: 30px;
  }
  #searchForm > form > label > select {
    height: 80%;
    border: none;
    border-right: 2px solid #fdbebe;
    vertical-align: top;
    margin-left: 20px;
    margin-top: 5px;
    font-size: 16px;
    color: #767676;
  }
  #searchForm > form > label > input {
    width: 45%;
    height: 60%;
    border: none;
    vertical-align: top;
    margin-left: 18px;
    margin-top: 7px;
  }
  .material-symbols-outlined {
    color: #fdbebe;
    font-size: 40px;
    font-style: normal;
  }
`;
