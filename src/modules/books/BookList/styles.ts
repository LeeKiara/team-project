import styled from "@emotion/styled";

export const BookContainer = styled.div`
  hr {
    border-color: #fff;
    width: 100%;
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
    flex: 2;
    display: flex;
    flex-direction: column;
  }
  /* section > article > div > figure {

  } */
  section > article > div > figure > a > img {
    width: 150px;
    height: 180px;
    margin-right: 16px;
  }
  section > article > div > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  section > article > div > div > h3 {
    font-size: 20px;
  }
  section > article > div > div > p {
    font-size: 16px;
  }
  section > article > div > div > p:nth-of-type(1) {
    font-size: 14px;
  }

  section > article > ul {
    /* border: 3px solid red; */
    margin: 16px;
    display: flex;
    justify-content: space-between;
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
