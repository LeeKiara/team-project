import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  div > article:nth-of-type(1) {
    background-color: aliceblue;
    height: 300px;
  }
  div > section {
    width: 65vw;
    margin: auto;
  }
  div > section > article:nth-of-type(1) {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 3px solid green;
  }
  div > section > article:nth-of-type(1) > h3 {
    display: flex;
    gap: 40px;
    margin: 0;
  }
  div > section > article:nth-of-type(1) > h3 > span {
    display: flex;
    gap: 20px;
  }
  div > section > article:nth-of-type(1) > div {
    display: flex;
    gap: 20px;
  }
  div > section > article:nth-of-type(1) > div > span {
    width: 100px;
    border: 3px solid blue;
    margin: 16px;
  }
  div > section > article:nth-of-type(1) > div:nth-of-type(2) {
    display: flex;
    justify-content: flex-end;
  }
  div > section > article:nth-of-type(2) {
    margin: auto;
    border: 2px solid crimson;
  }
  div > section > article:nth-of-type(2) > h3 {
    margin-left: 60px;
  }
  div > section > article:nth-of-type(2) > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
  }
  div > section > article:nth-of-type(2) > ul > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  div > section > article:nth-of-type(2) > ul > div > span {
    display: flex;
    justify-content: space-evenly;
  }
  div > section > article:nth-of-type(2) > ul > div > span > li {
    width: 200px;
    height: 300px;
    list-style: none;
    border: 3px solid salmon;
  }
  @media (min-width: 85rem) {
    div > section > article:nth-of-type(2) > ul {
      gap: 40px;
    }
    div > section > article:nth-of-type(2) > ul > div {
      flex-direction: row;
      justify-content: space-evenly;
    }
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 50px;
    }
  }
  @media (min-width: 100rem) {
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 80px;
    }
  }
  @media (min-width: 120rem) {
    div > section > article:nth-of-type(2) > ul {
      gap: 80px;
    }
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 120px;
    }
  }
`;
