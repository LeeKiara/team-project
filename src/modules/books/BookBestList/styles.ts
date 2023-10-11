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
    padding: 5px;
    display: flex;
    flex-direction: column;
    border: 2px solid #dddddd;
  }
  section > article > div {
    flex: 1.5;
    display: flex;
    flex-direction: column;
  }
  section > article > div > figure {
    margin: 16px;
  }
  section > article > div > figure > a > img {
    width: 150px;
    height: 180px;
    cursor: pointer;
  }
  section > article > div > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  section > article > div > div > h3 {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  section > article > div > div > p {
    font-size: 18px;
  }
  section > article > ul {
    margin: 16px;
    display: flex;
    justify-content: space-between;
    flex: 0.2;
  }
  section > article > ul li {
    /* border: 1px solid #dddddd; */
    /* padding: 3px; */
    display: flex;
    gap: 2px;
    cursor: auto;
  }
  button {
    cursor: pointer;
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
