import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  article {
    display: flex;
    padding-bottom: 40px;
  }
  .banner-background1 {
    background-color: #dff5ff;
  }
  .banner-background2 {
    background-color: #7b306b;
  }
  .banner-background3 {
    background-color: #ffebed;
  }
  .banner-background4 {
    background-color: #fff1da;
  }
  .banner-background0 {
    background-color: #fffadd;
  }
  .banner-background5 {
    background-color: #fffadd;
  }
  .banner-center {
    /* margin-top: 20px; */
    width: 100%;
  }
  .banner-center img {
    width: 100vw;
  }
  article > button {
    border: 1px solid white;
    height: 30px;
    border-radius: 50px;
    margin-top: 50px;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  article > button > svg {
    font-size: 16px;
    color: white;
  }

  @media (min-width: 55rem) {
    .banner-center {
      /* margin-top: 20px; */
      width: 958px;
      height: 400px;
    }
    .banner-center img {
      width: 50vw;
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
  }
`;
