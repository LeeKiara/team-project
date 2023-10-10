import styled from "@emotion/styled";

export const BookBestContainer = styled.div`
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
    flex: 2;
    display: flex;
    flex-direction: column;
  }
  section > article > div > figure {
    border: 1px solid salmon;
    width: 120px;
    height: 150px;
    margin: 16px;
  }
  section > article > div > div {
    flex: 1;
    border: 2px solid green;
  }
  section > article > div > div > p {
    font-size: small;
  }
  section > article > ul {
    border: 3px solid red;
    margin: 16px;
    display: flex;
    justify-content: space-between;
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
