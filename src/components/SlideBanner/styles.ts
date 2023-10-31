import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  .banner-background0 {
    background-color: #ffebed;
  }
  .banner-background1 {
    background-color: #fff1da;
  }
  .banner-background2 {
    background-color: #fffadd;
  }
  .banner-background3 {
    background-color: #dff5ff;
  }
  .banner-background4 {
    background-color: #7b306b;
  }
  .banner-center > img {
    margin: 0 10px;
  }
  .banner-center {
    display: flex;
    justify-content: center;
  }
  button {
    background-color: #ffebed;
    border: 1px solid white;
    height: 65px;
    border-radius: 50px;
    margin-top: 170px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  button > svg {
    font-size: 50px;
    color: white;
  }
  .banner-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    /* 슬라이더의 너비 설정 */
    width: 958px;
  }
  .banner-container img {
    /* 이미지의 너비 설정 */
    width: 100%;
    /* 슬라이딩 효과 설정 */
    transition: transform 0.5s;
  }
`;
