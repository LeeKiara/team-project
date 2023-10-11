import styled from "@emotion/styled";

export const BookBestContainer = styled.div`
  dl {
    display: flex;
    gap: 20px;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  section > article {
    display: flex;
    flex-direction: column;
    border: 1px solid olive;
  }
  section > article > div {
    flex: 1.5;
    display: flex;
    flex-direction: column;
  }
  section > article > div > figure {
    border: 1px solid salmon;
    margin: 16px;
  }
  section > article > div > figure > a > img {
    width: 200px;
    height: 300px;
    cursor: pointer;
  }
  section > article > div > div {
    flex: 1;
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  section > article > div > div > h3 {
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
  }
  section > article > div > div > p {
    font-size: 18px;
  }
  section > article > ul {
    border: 3px solid red;
    margin: 16px;
    display: flex;
    justify-content: space-between;
    flex: 0.2;
  }

  @media (min-width: 55rem) {
    section > article > div {
      flex-direction: row;
    }
  }
  @media (min-width: 85rem) {
    section > article {
      flex-direction: row;
    }
    section > article > ul {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
