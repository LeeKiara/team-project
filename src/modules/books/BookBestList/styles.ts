import styled from "@emotion/styled";

export const BookBestContainer = styled.div`
  dl {
    display: flex;
    gap: 20px;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  section > article {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border: 2px solid #dddddd;
    border-right: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    margin-bottom: 10px;
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
    padding-right: 10px;
    border-right: 2px solid #dddddd;
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
    margin: 10px;
    display: flex;
    justify-content: space-between;
    flex: 0.2;
  }
  section > article > ul li {
    display: flex;
    gap: 2px;
    cursor: auto;
  }
  section > article > ul > li:nth-of-type(3) {
    cursor: pointer;
    display: flex;
  }
  section > article > ul > li:nth-of-type(3) > span:nth-of-type(1) {
    font-size: 16px;
    padding-top: 3px;
  }
  button {
    cursor: pointer;
  }
  .heart {
    color: red;
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
