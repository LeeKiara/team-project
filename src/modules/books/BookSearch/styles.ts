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
  }
  section > span {
    display: flex;
    gap: 10px;
  }
  table {
    border-collapse: collapse;
    width: 1700px;
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
  }
  table > tbody > tr > td:nth-of-type(1) {
    padding: 10px;
  }
  table > tbody > tr > td:nth-of-type(2) {
    font-size: 18px;
  }
  table > tbody > tr > td:nth-of-type(2) > a:hover {
    color: #e97171;
  }
  table > tbody > tr > td > a > img {
    width: 180px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
  table > tbody > tr > td > div > dl {
    margin: 5px 0;
    cursor: pointer;
  }
  table > tbody > tr > td:nth-of-type(4) {
    width: 7%;
  }
  table > tbody > tr > td:nth-of-type(5) {
    width: 20%;
  }
  table > tbody > tr > td:nth-of-type(6) {
    width: 7%;
  }
  table > tbody > tr > td:nth-of-type(6) > a:hover {
    text-decoration: underline;
  }
  table > tbody > tr > td:nth-of-type(7) {
    width: 7%;
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

  @media (min-width: 100rem) {
    table {
      width: 100%;
      margin: auto;
    }
  }
`;
