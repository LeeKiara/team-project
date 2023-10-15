import styled from "@emotion/styled";

export const BookListContainer = styled.div`
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
    margin: 16px;
    display: flex;
    justify-content: space-between;
  }
  section > article > ul li {
    display: flex;
    gap: 2px;
    cursor: auto;
  }
  section > article > ul > li:nth-of-type(3) {
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  section > article > ul > li:nth-of-type(3) > span:nth-of-type(1) {
    font-size: 16px;
    padding-top: 3px;
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
    width: 130px;
    background-color: #708b95;
    color: #fff;
    font-size: 16px;
  }
  .last {
    background-color: #e97171;
  }
  button > svg {
    vertical-align: middle;
    font-size: 20px;
    margin-right: 5px;
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
