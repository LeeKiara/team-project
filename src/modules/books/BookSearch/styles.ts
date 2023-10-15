import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  hr {
    width: 100%;
    color: black;
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
    width: 200px;
    background-color: #708b95;
    color: #fff;
    font-size: 18px;
  }
  button > svg {
    vertical-align: middle;
    font-size: 20px;
    margin-right: 5px;
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
    width: 1700px;
  }
  table > thead {
    border: 2px solid #dddddd;
    /* box-shadow: 3px 3px 5px #dddddd; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 -2px 4px rgba(0, 0, 0, 0.2);
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
  table > tbody > tr > td:nth-of-type(9) {
    width: 4%;
  }
  table > tbody > tr > td:last-child {
    width: 7%;
    padding: 20px;
    vertical-align: middle;
    text-align: left;
  }

  @media (min-width: 100rem) {
    table {
      width: 100%;
      margin: auto;
    }
  }
`;
