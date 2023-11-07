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
    margin-bottom: 50px;
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
    width: 140px;
    height: 180px;
    cursor: pointer;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
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
  section > article > div > div > dl {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  section > article > ul {
    margin: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 0.2;
  }
  section > article > ul li {
    display: flex;
    gap: 2px;
    cursor: auto;
  }
  .heart {
    color: red;
  }
  .btn {
    display: inline-block;
    padding: 12px 15px;
    margin-bottom: 0;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 4px;
    width: 180px;
    background-color: #708b95;
    color: #fff;
    font-size: 18px;
  }
  button > svg {
    vertical-align: middle;
    font-size: 20px;
    margin-right: 5px;
  }
  .bell {
    background-color: #ae7ac2;
  }
  .winner-cup {
    display: flex;
  }
  .winner-cup > svg {
    vertical-align: top;
    margin-top: -3px;
  }

  @media (min-width: 80rem) {
    section > article {
      flex-direction: row;
    }
    section > article > div {
      flex-direction: row;
    }
    section > article > div > div > dl {
      flex-direction: row;
    }
    section > article > ul {
      gap: 0px;
    }
    section > article > ul {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
  /* @media (min-width: 85rem) {
    section > article {
      flex-direction: row;
    }
  } */
`;
