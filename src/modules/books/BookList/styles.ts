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
    margin-bottom: 50px;
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
    margin-left: 12px;
  }
  section > article > div > figure > a > img {
    width: 150px;
    height: 180px;
    margin-right: 16px;
    margin-top: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
  section > article > div > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  section > article > div > div > a > h3 {
    font-weight: bold;
  }
  section > article > div > div > p {
    margin: 10px 0px;
    font-size: 16px;
  }
  section > article > div > div > p:nth-of-type(1) {
    font-size: 14px;
  }
  section > article > ul {
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  section > article > ul li {
    display: flex;
    gap: 2px;
    cursor: auto;
  }
  /* section > article > ul > li:nth-of-type(3) {
    cursor: pointer;
    display: flex;
    justify-content: center;
  } */
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
  .heart {
    color: red;
  }
  nav {
    display: flex;
    justify-content: center;
  }
  nav > ol {
    width: 238px;
    display: flex;
    font-size: 16px;
    justify-content: center;
  }
  .numberbox {
    cursor: pointer;
    width: 34px;
    text-align: center;
    border: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .numberbox:nth-of-type(1) {
    border-radius: 5px 0 0 5px;
  }
  .numberbox:last-of-type {
    border-radius: 0 5px 5px 0;
  }
  .numberbox > a {
    color: #337ab7;
  }
  .numberbox:hover {
    background-color: #dddddd;
  }
  .numberbox:nth-of-type(1):hover {
    background-color: #dddddd;
    border-radius: 5px 0 0 5px;
  }

  .numberbox > button {
    border-radius: 5px;
    border: none;
    background-color: white;
    vertical-align: top;
    font-size: 20px;
    color: #337ab7;
    height: 30px;
  }
  .numberbox > button:hover {
    background-color: #dddddd;
    border-radius: 5px;
    cursor: pointer;
  }
  .numberbox:last-of-type:hover {
    background-color: #dddddd;
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
