import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  #center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  header {
    border: 3px solid blue;
    display: flex;
    justify-content: center;
  }
  header > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 65vw;
  }
  header > div > aside {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 5px;
  }
  header > div > aside > button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  header > div > aside > button > span {
  }
  .header-nav ul {
    padding: 10px;
    background-color: beige;
    display: flex;
    justify-content: space-evenly;
  }
  .header-nav li {
    list-style: none;
  }
  #searchForm {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  header > div > div > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  header > div > div > form > label {
    height: 50%;
    border: 3.5px solid #fdbebe;
    border-radius: 30px;
  }
  header > div > div > form > label > input {
    width: 60%;
    height: 90%;
    border: white;
    vertical-align: top;
  }
  .material-symbols-outlined {
    color: #fdbebe;
    font-size: 40px;
  }
`;
