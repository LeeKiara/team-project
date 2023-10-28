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
  .comment-list > div > span:nth-of-type(1) > h5 > svg {
    color: black;
    font-size: 20px;
  }
  .comment-list > div > span:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    border: 3px solid crimson;
  }
  .comment-list > div > span:nth-of-type(2) > input {
    /* height: 55px; */
    padding-left: 10px;
    width: 90%;
    margin: auto;
    line-height: 55px;
    vertical-align: top;
  }
  .comment-list > div > span:nth-of-type(2) > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: auto;
    border: 2px solid cadetblue;
  }
  .comment-list > div > span:nth-of-type(2) > div:nth-of-type(1) {
    width: 90%;
  }
  .comment-list > div > span:nth-of-type(2) > div > p {
    /* border: 1px solid black; */
    text-align: start;
    padding-top: 5px;
    padding-left: 10px;
  }
  .modify-btn {
    background-color: #fafafa;
    /* border-radius: 5px; */
    font-size: 16px;
    cursor: pointer;
  }
  #reply-comment {
    /* width: 60%; */
    display: flex;
    justify-content: center;
  }
  #reply-comment > textarea {
    padding: 8px;
    line-height: 1.5;
    height: 80px;
    resize: none;
    overflow: hidden;
  }
  #reply-comment > div {
    display: flex;
    flex-direction: column;
  }
`;
