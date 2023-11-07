import styled from "@emotion/styled";

export const BookNewContainer = styled.div`
  section {
    padding-bottom: 20px;
  }
  section > ul {
    height: auto;
    display: flex;
    flex-wrap: wrap; /* 요소들이 넘칠 때 다음 줄로 넘어가도록 설정 */
    justify-content: space-evenly; /* 요소들을 가로로 균등하게 배치 */
    white-space: nowrap; /* 내용을 한 줄로 유지 */
  }
  section > ul > li {
    padding: 15px;
    border: 2px solid #dddddd;
    background-color: #fafafa;
    /* width: 200px;
    height: 400px; */
    width: 180px;
    height: 380px;
    margin-bottom: 40px; /* 간격 설정 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
  }
  section > ul > li p {
    font-size: small;
  }
  section > ul > li > div > dl:nth-of-type(2) {
    font-size: 18px;
    font-weight: bold;
    color: crimson;
  }
  section > ul > li > figure > a > img {
    width: 150px; /* 각 요소의 가로 너비를 설정 */
    height: 200px;
    /* width: 200px;
    height: 247px; */
    display: flex;
    justify-content: center;
    margin: auto;
  }
  section > ul > li > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  section > ul > li > div > a > h3 {
    font-size: 18px;
    font-weight: bold;
  }

  section > ul > li > div > dl:nth-of-type(3) {
    display: flex;
    justify-content: flex-end;
  }
  .bell {
    display: inline-block;
    padding: 12px 15px;
    margin-bottom: 0;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 180px;
    background-color: #c0d6d8;
    color: #333333;
    font-size: 18px;
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;
  }
  .bell > svg {
    vertical-align: top;
    font-size: 20px;
    margin-right: 5px;
    margin-top: 3px;
  }
`;
