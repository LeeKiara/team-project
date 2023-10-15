import styled from "@emotion/styled";

export const BookNewContainer = styled.div`
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
    width: 200px; /* 각 요소의 가로 너비를 설정 */
    height: 400px;
    margin-bottom: 40px; /* 간격 설정 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    width: 200px; /* 각 요소의 가로 너비를 설정 */
    height: 247px;
    margin: auto;
  }
  section > ul > li > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  section > ul > li > div > h3 {
    font-size: 20px;
    font-weight: bold;
  }

  section > ul > li > div > dl:nth-of-type(3) {
    display: flex;
    justify-content: flex-end;
  }
`;
