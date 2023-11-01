import styled from "@emotion/styled";

export const PageContainer = styled.div`
  hr {
    width: 100%;
    color: black;
  }
  p {
    font-size: 18px;
  }
  main {
    width: 60%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  main > article {
    display: flex;
  }
  main > article > figure {
    border: 1px solid #dddddd;
    width: 350px;
    height: 420px;
    display: flex;
    justify-content: center;
  }
  main > article > figure > img {
    width: 300px;
    height: 370px;
    margin: auto;
  }
  main > article > aside {
    flex: 1;
    padding: 25px;
    display: flex;
    flex-direction: column;
  }
  main > article > aside > div:nth-of-type(1) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  main > article > aside > div:nth-of-type(1) > dl:nth-of-type(3) > p {
    width: 395px;
  }
  main > article > aside > div:nth-of-type(1) > dl:nth-of-type(7) > dt {
    margin-top: 3px;
  }
  main > article > aside > div:nth-of-type(1) > dl:nth-of-type(7) > p {
    font-size: 23px;
    vertical-align: top;
    color: crimson;
  }
  #amount {
    flex: 0.1;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    font-size: 20px;
    line-height: 2;
  }
  #amount > input {
    vertical-align: middle;
    height: 38px;
    padding-left: 8px;
  }
  #amount > div {
    margin-left: -9px;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  #amount > div > img {
    cursor: pointer;
  }
  main > article > aside > div dl:nth-of-type(4) > dt {
    width: 48px;
  }
  main > article > aside > div dl:nth-of-type(5) > dt {
    width: 48px;
  }
  main > article > aside > div dl:nth-of-type(6) > dt {
    width: 48px;
  }
  main > article > aside > div dl {
    display: flex;
    gap: 10px;
  }
  main > article > aside > div > div {
    display: flex;
    gap: 10px;
  }
  main > article > nav {
    flex: 0.5;
    padding: 25px;
    border-left: 2px solid #dddddd;
  }
  main > article > aside > h2 {
    font-size: 30px;
  }
  article > nav > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
    padding-left: 30px;
    margin: auto;
  }
  button {
    font-size: 20px;
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
  .heart {
    color: red;
  }
  section {
    width: 90%;
    margin: auto;
    margin-top: 20px;
  }
  section > h2 {
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  section > article {
    margin: 40px;
    width: 90%;
    margin-bottom: 60px;
  }
  section > article div {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  section > article > div h3 {
    font-size: 23px;
    width: 30%;
  }
  section > article > div p {
    width: 60%;
    line-height: 1.5;
  }
  section > article > div > a {
    width: 60%;
  }
  section > article > div > a > p {
    line-height: 1.5;
  }
  /* footer {
    border: 1px solid cadetblue;
  } */
  .input-comment > form {
    width: 70%;
    gap: 10px;
    margin: auto;
    padding: 20px;
    background-color: #f8f8f8;
    padding-bottom: 30px;
  }
  .input-comment > form > h4 {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: 5px;
  }
  .input-comment > form > h4 > sub {
    font-size: small;
    margin-left: 5px;
    font-weight: lighter;
  }
  .input-comment > form > label {
    display: flex;
    justify-content: center;
  }
  .input-comment > form > label > textarea {
    padding: 8px;
    line-height: 1.5;
    height: 80px;
    resize: none;
    overflow: hidden;
  }
  .input-comment > form > label > button {
    font-size: 16px;
    background-color: #fafafa;
  }
`;
