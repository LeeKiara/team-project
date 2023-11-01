import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  article {
    display: flex;
    padding-bottom: 40px;
  }
  .banner-background0 {
    background-color: #dff5ff;
  }
  .banner-background1 {
    background-color: #7b306b;
  }
  .banner-background2 {
    background-color: #ffebed;
  }
  .banner-background3 {
    background-color: #fff1da;
  }
  .banner-background4 {
    background-color: #fffadd;
  }
  .banner-center {
    /* margin-top: 20px; */
    width: 958px;
    height: 400px;
  }
  article > button {
    border: 1px solid white;
    height: 65px;
    border-radius: 50px;
    margin-top: 170px;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  article > button > svg {
    font-size: 50px;
    color: white;
  }
`;
