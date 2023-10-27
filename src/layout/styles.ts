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
  header > div > aside button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  /* header > div > aside > a > button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  } */
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
    font-size: 16px;
    font-weight: bold;
  }
  #searchForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }
  #searchForm > h1 {
    display: flex;
    justify-content: center;
  }
  #searchForm > h1 > a {
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
    height: 27px;
    border: none;
    border-right: 1.5px solid #fdbebe;
    vertical-align: top;
    margin-left: 20px;
    margin-top: 7px;
    font-size: 16px;
    color: #767676;
  }
  #searchForm > form > label > input {
    width: 45%;
    height: 27px;
    border: none;
    vertical-align: top;
    margin-left: 18px;
    margin-top: 7px;
  }
  #searchForm > form > label > button {
    margin-left: 2px;
    background-color: white;
    border-radius: 30px;
    border: none;
  }
  .material-symbols-outlined {
    color: #fdbebe;
    font-size: 40px;
    font-style: normal;
    cursor: pointer;
  }
  .cite {
    padding: 30px 0px;
    background-color: #253a42;
    color: #6e7376;
    border-top: 1px solid black;
    font-weight: 100;
  }
  .cite > div {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .cite > div > h1 {
    font-size: 30px;
    font-weight: bold;
  }
  .cite > div > h2 {
    font-size: 25px;
    font-weight: bold;
  }
  .cite > div > address {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cite > div > address > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  @media (min-width: 55rem) {
    .header-nav li {
      font-size: 20px;
    }
    #searchForm {
      flex-direction: row;
      gap: 30px;
      justify-content: center;
      margin-bottom: 20px;
    }
    #searchForm > h1 > a {
      vertical-align: middle;
      font-size: 30px;
    }
    #searchForm > form > label > select {
      height: 75%;
      margin-top: 5px;
    }
    #searchForm > form > label > input {
      width: 45%;
      height: 60%;
    }
  }
  @media (min-width: 100rem) {
    .cite > div > address > div {
      flex-direction: row;
      gap: 20px;
    }
  }
`;
