import styled from "@emotion/styled";

export const BookContainer = styled.div`
  article:nth-of-type(1) > span {
    display: flex;
    justify-content: space-around;
  }
  article:nth-of-type(3) > ul {
    display: flex;
    justify-content: space-evenly;
  }
  article:nth-of-type(3) > ul > li {
    list-style: none;
  }
`;
