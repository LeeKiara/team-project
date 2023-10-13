import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  div > article:nth-of-type(1) {
    /* background-color: #dff5ff; */
    background-color: #ffebed;
    height: 400px;
  }
  div > article:nth-of-type(1) > figure {
    display: flex;
    justify-content: center;
  }
  div > section {
    width: 65vw;
    margin: auto;
  }
  div > section > article:nth-of-type(1) {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #f1f3f2;
    padding: 20px;
    border-radius: 10px;
  }
  div > section > article:nth-of-type(1) > h3 {
    display: flex;
    gap: 80px;
    margin-left: 12px;
    font-size: 18px;
    font-weight: bold;
    color: #575757;
    padding-bottom: 8px;
  }
  div > section > article:nth-of-type(1) > div {
    display: flex;
    gap: 20px;
    margin: 10px;
  }
  div > section > article:nth-of-type(1) > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  div > section > article:nth-of-type(1) > div > img {
    width: 160px;
    margin-bottom: 0;
    box-shadow: 2px 5px 6px rgba(0, 0, 0, 0.2);
  }
  div > section > article:nth-of-type(1) > div > div > p {
    line-height: 1.5;
  }
  div > section > article:nth-of-type(2) {
    width: 400px;
    margin: auto;
    background-color: #e3f0f8;
    border-radius: 10px;
  }
  div > section > article:nth-of-type(2) > a > h3 {
    margin-left: 55px;
    font-size: 20px;
    font-weight: bold;
    color: #575757;
    padding-top: 35px;
  }
  div > section > article:nth-of-type(2) > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    height: auto;
    display: flex;
    flex-wrap: wrap; /* 요소들이 넘칠 때 다음 줄로 넘어가도록 설정 */
    justify-content: space-evenly; /* 요소들을 가로로 균등하게 배치 */
    white-space: nowrap; /* 내용을 한 줄로 유지 */
  }
  div > section > article:nth-of-type(2) > ul > li {
    width: 230px;
    height: 333px;
    padding: 15px;
    margin-bottom: 30px; /* 간격 설정 */
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  div > section > article:nth-of-type(2) > ul > li > h5 {
    font-weight: bold;
  }
  div > section > article:nth-of-type(2) > ul > li > span {
    font-weight: bold;
  }
  div > section > article:nth-of-type(2) > ul > li > a > img {
    margin: auto;
    width: 230px;
    height: 270px;
    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 55rem) {
    div > section > article:nth-of-type(2) {
      width: 90%;
    }
    div > section > article:nth-of-type(2) > ul {
      flex-direction: row;
    }
  }
  @media (min-width: 85rem) {
    div > section > article:nth-of-type(2) > ul {
      padding: 10px;
    }
  }
  @media (min-width: 120rem) {
    div > section > article:nth-of-type(2) > ul {
      padding: 20px;
    }
  }
`;
