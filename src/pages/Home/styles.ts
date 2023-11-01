import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  .banner-background0 {
    background-color: #fffadd;
    height: 400px;
  }
  .banner-background1 {
    background-color: #dff5ff;
    height: 400px;
  }
  .banner-background2 {
    background-color: #7b306b;
    height: 400px;
  }
  .banner-background3 {
    background-color: #ffebed;
    height: 400px;
  }
  .banner-background4 {
    background-color: #fff1da;
    height: 400px;
  }
  div > article:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }
  div > article:nth-of-type(1) > figure {
    display: flex;
    justify-content: center;
  }
  div > article:nth-of-type(1) > figure > img {
    margin: 0 10px;
  }
  div > section {
    width: 65vw;
    margin: auto;
  }
  div > section > article:nth-of-type(1) {
    width: 468px;
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
    margin-left: 25px;
    font-size: 18px;
    font-weight: bold;
    color: #575757;
    padding-bottom: 8px;
  }
  .today-book {
    display: flex;
    gap: 20px;
    margin: 10px;
  }
  .today-book > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .today-book > img {
    width: 210px;
    margin-bottom: 0;
    box-shadow: 2px 5px 6px rgba(0, 0, 0, 0.2);
  }
  .today-book > div > h4:nth-of-type(1) {
    font-size: 18px;
    font-weight: bold;
  }
  .today-book > div > span {
    display: flex;
  }
  .today-book > div > span > small {
    margin-top: 3px;
    margin-right: 5px;
    font-size: small;
  }
  .today-book > div > span > h4 {
    font-size: 17px;
    color: crimson;
  }
  .today-book > div > p {
    line-height: 1.5;
  }
  div > section > article:nth-of-type(2) {
    width: 510px;
    margin: auto;
    background-color: #f8edeb;
    border-radius: 10px;
    padding-bottom: 50px;
    margin-bottom: 50px;
  }
  div > section > article:nth-of-type(2) > a > h3 {
    margin-left: 51px;
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
    width: 200px;
    height: 360px;
    padding: 15px;
    margin-bottom: 30px; /* 간격 설정 */
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  div > section > article:nth-of-type(2) > ul > li > a {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  div > section > article:nth-of-type(2) > ul > li > a > h5 {
    font-weight: bold;
  }
  div > section > article:nth-of-type(2) > ul > li > a > span:nth-of-type(1) {
    font-size: small;
  }
  div > section > article:nth-of-type(2) > ul > li > a > span:nth-of-type(2) {
    font-weight: bold;
    color: crimson;
  }
  div > section > article:nth-of-type(2) > ul > li > a > img {
    margin: auto;
    width: 200px;
    height: 270px;
    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.2);
  }
  div > article > figure > button {
    background-color: #ffebed;
    border: 1px solid white;
    height: 65px;
    border-radius: 50px;
    margin-top: 170px;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  div > article > figure > button > svg {
    font-size: 50px;
    color: white;
  }
  .banner-container {
    display: flex;
    overflow: hidden;
    width: 958px;
  }
  .banner-container img {
    width: 100%;
    transition: transform 0.5s;
  }

  @media (min-width: 55rem) {
    div > section > article:nth-of-type(1) {
      width: 80%;
    }
    div > section > article:nth-of-type(2) {
      width: 83%;
    }
    div > section > article:nth-of-type(2) > ul {
      flex-direction: row;
      gap: 0;
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
