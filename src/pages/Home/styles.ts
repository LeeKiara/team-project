import styled from "@emotion/styled";

export const HomeContainer = styled.div`
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
`;
