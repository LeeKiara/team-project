import styled from "@emotion/styled";

export const PageContainer = styled.div`
  hr {
    width: 100%;
    color: black;
  }
  p {
    font-size: 18px;
  }
  section {
    width: 60%;
    margin: auto;
    margin-top: 20px;
  }
  section > article {
    display: flex;
  }
  section > article > figure {
    border: 1px solid #dddddd;
    width: 350px;
    height: 420px;
    display: flex;
    justify-content: center;
  }
  section > article > figure > img {
    width: 300px;
    height: 370px;
    margin: auto;
  }
  section > article > aside {
    flex: 1;
    padding: 25px;
    display: flex;
    flex-direction: column;
  }
  section > article > aside > div:nth-of-type(1) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
  section > article > aside > div dl {
    display: flex;
    gap: 10px;
  }
  section > article > aside > div > div {
    display: flex;
    gap: 10px;
  }
  section > article > nav {
    flex: 0.5;
    padding: 25px;
    border-left: 2px solid #dddddd;
  }
  section > article > aside > h2 {
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
  .heart {
    color: red;
  }
  footer {
    width: 90%;
    margin: auto;
    margin-top: 20px;
    height: 500px;
  }
  footer > h2 {
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  footer > section {
    margin: 40px;
    width: 90%;
    margin-bottom: 60px;
  }
  footer > section div {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  footer > section > div h3 {
    font-size: 23px;
    width: 30%;
  }
  footer > section > div p {
    width: 60%;
    line-height: 1.5;
  }
  footer > section > div > a {
    width: 60%;
  }
  footer > section > div > a > p {
    line-height: 1.5;
  }
  footer > form {
    width: 70%;
    gap: 10px;
    margin: auto;
    padding: 20px;
    background-color: #f8f8f8;
    padding-bottom: 30px;
  }
  footer > form > h4 {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: 5px;
  }
  footer > form > h4 > sub {
    font-size: small;
    margin-left: 5px;
    font-weight: lighter;
  }
  footer > form > label {
    display: flex;
    justify-content: center;
  }
  footer > form > label > textarea {
    padding: 8px;
    line-height: 1.5;
    height: 80px;
    resize: none;
    overflow: hidden;
  }
  footer > form > label > button {
    font-size: 16px;
    background-color: #fafafa;
  }
`;
