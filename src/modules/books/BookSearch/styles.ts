import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  hr {
    width: 100%;
    color: black;
  }
  .heart {
    color: red;
  }
  section {
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table > thead {
    border: 2px solid #dddddd;
    border-left: 1px solid white;
    border-right: 1px solid white;
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
  table > tbody > tr > td:nth-of-type(1) {
    padding: 10px;
  }
  table > tbody > tr > td:nth-of-type(2) {
    font-size: 18px;
  }
  table > tbody > tr > td > a > img {
    width: 180px;
    height: 230px;
  }
  table > tbody > tr > td > div > dl {
    margin: 20px 0;
    cursor: pointer;
  }
  table > tbody > tr > td:nth-of-type(4) {
    width: 7%;
  }
  table > tbody > tr > td:nth-of-type(9) {
    width: 4%;
  }
  table > tbody > tr > td:last-child {
    width: 7%;
    padding: 20px;
    vertical-align: middle;
    text-align: left;
  }
`;
