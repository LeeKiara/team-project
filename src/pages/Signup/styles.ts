import styled from "@emotion/styled";

export const SignUpContainer = styled.div`
  section {
    width: 500px;
    margin: auto;
  }
  p {
    margin: 0;
  }
  section > a {
    display: flex;
    justify-content: center;
    padding-right: 10px;
  }
  section > a > img {
    width: 300px;
    height: 200px;
    display: flex;
  }
  section > form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 20px;
  }
  svg {
    color: #767676;
    font-size: 30px;
    margin-top: 8px;
    margin-left: 8px;
  }
  label {
    border: 1px solid #dddddd;
    border-radius: 6px;
    height: 50px;
    display: flex;
  }
  .password {
    border: 2px solid #fdbebe;
  }
  .verifiedPassword {
    border: 2px solid #03c75a;
  }
  .verify {
    border: 3px solid #fdbebe;
    color: #fdbebe;
  }
  input {
    width: 405px;
    height: 32px;
    font-size: 16px;
    border: none;
    margin-top: 8px;
    margin-left: 10px;
    font-family: "Noto Sans KR", sans-serif;
  }
  section > form > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  section > form > button {
    width: 100%;
    padding: 14px 0;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #3d4ed7;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #fff;
    cursor: pointer;
  }
  .prerequisite {
    font-size: small;
    color: crimson;
  }
  .categoryButtonList {
    margin-left: 10px;
    border: none;
    width: 100%;
    font-size: 15px;
    font-family: "Noto Sans KR", sans-serif;
    color: #767676;
    border-radius: 6px;
    height: 50px;
    display: flex;
  }
`;
