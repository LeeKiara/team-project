import styled from "@emotion/styled";

export const BookNewContainer = styled.div`
  section > ul {
    height: auto;
    border: 2px solid salmon;
    display: flex;
    flex-wrap: wrap; /* 요소들이 넘칠 때 다음 줄로 넘어가도록 설정 */
    justify-content: space-evenly; /* 요소들을 가로로 균등하게 배치 */
    white-space: nowrap; /* 내용을 한 줄로 유지 */
  }
  section > ul > li {
    border: 5px solid saddlebrown;
    width: 200px; /* 각 요소의 가로 너비를 설정 */
    height: 300px;
    margin-right: 10px; /* 간격 설정 */
    margin-bottom: 40px; /* 간격 설정 */
  }
  section > ul > li > figure > a > img {
    width: 100%; /* 각 요소의 가로 너비를 설정 */
    height: 200px;
  }
  section > ul > li > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
