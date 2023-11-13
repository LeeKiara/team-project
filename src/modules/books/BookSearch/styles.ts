import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  hr {
    width: 100%;
    color: black;
  }
  section {
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
  }
  section > span {
    display: flex;
    gap: 10px;
  }
  .web {
    display: none;
  }

  table {
    border-collapse: collapse;
    width: 350px;
    font-family: "Noto Sans KR", sans-serif;
  }
  table > thead {
    border: 2px solid #dddddd;
    /* box-shadow: 3px 3px 5px #dddddd; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }
  table > tbody > tr {
    border: 2px solid #dddddd;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
  table > thead > tr th {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    vertical-align: middle;
  }
  table > tbody > tr > a {
    vertical-align: top;
  }
  table > tbody > tr td {
    padding: 20px;
    vertical-align: top;
    text-align: center;
    font-size: 18px;
  }
  table > tbody > tr > td:nth-of-type(6) > a {
    color: blue;
    font-size: 14px;
  }
  table > tbody > tr > td:nth-of-type(1) {
    padding: 0;
  }
  table > tbody > tr > td:nth-of-type(2) > a {
    font-size: 16px;
    font-weight: bolder;
  }
  table > tbody > tr > td:nth-of-type(2) > a:hover {
    color: #e97171;
  }
  table > tbody > tr > td > div > dl {
    margin: 5px 0;
    cursor: pointer;
  }
  table > tbody > tr > td:nth-of-type(2) {
    width: 12%;
  }
  table > tbody > tr > td:nth-of-type(3) {
    width: 7%;
    font-size: 16px;
  }
  table > tbody > tr > td:nth-of-type(4) {
    width: 7%;
    font-size: 16px;
  }
  table > tbody > tr > td:nth-of-type(5) {
    font-size: 14px;
  }
  table > tbody > tr > td:nth-of-type(6) > a:hover {
    text-decoration: underline;
  }
  table > tbody > tr > td:nth-of-type(7) {
    width: 6%;
  }
  table > tbody > tr > td:nth-of-type(8) {
    width: 7%;
    color: crimson;
    font-weight: bold;
  }
  table > tbody > tr > td:nth-of-type(9) {
    width: 7%;
  }
  table > tbody > tr > td:nth-of-type(9) > a:hover {
    color: crimson;
  }
  .mobile {
    display: block;
  }
  .mobile > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .mobile > div > span {
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mobile > div > span > figure > a {
    display: flex;
    justify-content: center;
  }
  .mobile > div > span > figure > a > img {
    width: 200px;
    margin: auto;
  }
  .mobile > div > span > h4 > a {
    font-size: 16px;
    font-weight: bold;
  }
  .mobile > div > span > p:nth-of-type(1) {
    text-align: end;
    color: crimson;
    font-weight: bold;
    margin: 10px;
  }
  .mobile > div > span > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mobile > div > span > div > p:nth-of-type(1) {
    font-weight: bold;
    color: #767676;
  }
  @media (min-width: 55rem) {
    .web {
      display: block;
    }
    .mobile {
      display: none;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    table > tbody > tr > td:nth-of-type(1) {
      padding: 10px;
    }
    table > tbody > tr > td:nth-of-type(2) {
      font-size: 18px;
    }
    table > tbody > tr > td > a > img {
      width: 120px;
      height: 150px;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    }
  }
  /* @media (min-width: 100rem) {
    table {
      width: 100%;
      margin: auto;
    }
  } */
`;
