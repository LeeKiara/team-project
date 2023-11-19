import styled from "@emotion/styled";

const lightgrayColor = "#f5f6f9";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  .order-notification {
    display: flex;
    margin-bottom: 48px;
    padding: 20px 24px;
    border: 1px solid #999aa9;
    border-radius: 12px;
    background-color: ${lightgrayColor};
  }

  .icon-bookgubun {
    display: inline-block;
    padding: 0 8px;
    width: auto;
    height: 22px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid green;
    border-radius: 4px;
    background-color: green;

    p {
      color: white;
    }
  }

  .icon-message {
    margin-left: 10px;
    line-height: 21px;
    font-weight: 600;
  }
`;

export const Container = styled.ul`
  list-style: none;
  padding: 10px;
  background-color: white;
`;

export const ItemContainer = styled.li`
  margin: 0;
  padding: 10px;
  border: 1px solid green;
`;
