import styled from "@emotion/styled";

export const PageContainer = styled.div`
  #amount {
    display: flex;
  }
  #amount > div {
    display: flex;
    flex-direction: column;
  }
  section {
    width: 60%;
    margin: auto;
  }
  section > article {
    display: flex;
  }
  section > article > figure {
    border: 1px solid #dddddd;
    width: 350px;
    height: 420px;
    display: flex;
    justify-content: center;
  }
  section > article > figure > img {
    width: 300px;
    height: 370px;
    margin: auto;
  }
  section > article > aside {
    flex: 1;
    padding: 25px;
    border: 2px solid cadetblue;
  }
  section > article > aside > div:nth-of-type(1) {
    border: 2px solid olive;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  section > article > aside > div dl {
    display: flex;
    gap: 10px;
  }
  section > article > aside > div > div {
    display: flex;
    gap: 10px;
  }
  section > article > nav {
    flex: 0.5;
    padding: 25px;
    border: 2px solid crimson;
  }
  section > article > aside > h2 {
    font-size: 30px;
  }
`;
