import styled from "@emotion/styled";

export const CartListContainer = styled.div`
  @media (min-width: 85rem) {
    div > section > article:nth-of-type(2) > ul {
      gap: 40px;
    }
    div > section > article:nth-of-type(2) > ul > div {
      flex-direction: row;
      justify-content: space-evenly;
    }
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 50px;
    }
  }
  @media (min-width: 100rem) {
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 80px;
    }
  }
  @media (min-width: 120rem) {
    div > section > article:nth-of-type(2) > ul {
      gap: 80px;
    }
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 120px;
    }
  }

  div > article:nth-of-type(1) {
    background-color: aliceblue;
    height: 300px;
  }
  div > section {
    width: 65vw;
    margin: auto;
  }

  /* 장바구니 상품 리스트 Box */
  /* 주문합계 Box */
  div > section > article {
    /* width: 80%; */
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px dotted gray;
  }

  div > section > article > h3,
  div > section > article > ul {
    display: flex;
    gap: 40px;
  }

  div > section > article > ul > li {
    list-style: none;
  }
`;
