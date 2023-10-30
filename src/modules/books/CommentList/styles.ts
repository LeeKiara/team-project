import styled from "@emotion/styled";

export const CommnetListContainer = styled.div`
  .comment-list {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 50px;
  }
  .comment-list > div {
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 70%;
    /* height: 90px; */
    background-color: #f8f8f8;
    margin: auto;
    padding: 20px;
  }
  .comment-list > div > span:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
  }
  sub {
    vertical-align: top;
  }
  .modify-btn {
    background-color: #fafafa;
    /* border-radius: 5px; */
    font-size: 16px;
    cursor: pointer;
  }
  .comment-list > div > span:nth-of-type(1) > h5 > svg {
    color: black;
    font-size: 20px;
  }
  .comment-main > div > span {
    display: flex;
    justify-content: space-between;
  }
  .comment-main input {
    height: 55px;
  }
  .display-none {
    height: 100%;
  }
  .reply-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .modify-buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 0px;
  }
  .minus-btn {
    margin-top: -20px;
  }
  .reply-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .reply-list > span:nth-of-type(1) {
    margin-top: 5px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
  }
  .reply-list > span:nth-of-type(1) > h5 {
    display: flex;
  }
  .reply-list > span:nth-of-type(1) > h5 > svg {
    color: black;
    font-size: 20px;
  }
  .reply-list > span:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
  }
  .reply-list > span:nth-of-type(2) > p {
    margin-left: 10px;
  }
  @media (min-width: 55rem) {
    .comment-main input {
      width: 35vw;
    }
  }
  @media (min-width: 110rem) {
    .comment-main input {
      width: 730px;
    }
  }
`;
