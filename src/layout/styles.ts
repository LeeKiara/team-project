import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  #center {
    border: 10px solid black;
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
    width: 70vw;
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
