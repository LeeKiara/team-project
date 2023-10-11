import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  hr {
    width: 100%;
    color: black;
  }
  section {
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
  section > article {
    display: flex;
    gap: 20px;
  }
  section > article > div:nth-of-type(1) {
    display: flex;
    gap: 20px;
    flex: 5;
  }
  section > article > div:nth-of-type(1) > figure {
    width: 220px;
    height: 200px;
    border: 2px solid salmon;
  }
  section > article > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 0.5;
  }
  dl {
    display: flex;
    gap: 10px;
  }
  #section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #section > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  #section > div > span {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
