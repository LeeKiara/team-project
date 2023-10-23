import styled from "@emotion/styled";

export const CommnetListContainer = styled.div`
  .commentList > div {
    border-top: 1px solid black;
    width: 70%;
    padding: 20px;
    background-color: #f8f8f8;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .commentList > div > span:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 0.97;
  }
  .commentList > div > span:nth-of-type(1) > p {
    /* border: 1px solid black; */
    padding-top: 5px;
    padding-left: 10px;
    height: 50px;
  }
  .commentList > div > span:nth-of-type(1) > h5 > svg {
    color: black;
    font-size: 20px;
  }
  .commentList > div > span:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .commentList > div > span:nth-of-type(2) > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .commentList > div > span:nth-of-type(2) > div > button {
    background-color: #fafafa;
    /* border-radius: 5px; */
    font-size: 16px;
  }
`;
