import styled from "@emotion/styled";

// import deleteButtonImage from "@/modules/cart/assets/icon_delete_order.png";

export const PaymentInfoContainer = styled.div`
  width: 700px;
  height: 300px;
  padding: 20px;
  background-color: white;

  div:nth-of-type(1) {
    margin-bottom: 20px;

    h1 {
      font-size: 20px;
    }
  }

  .box-payment-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 30px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #eaeaea;
    box-sizing: border-box;
    margin-bottom: 30px;

    div {
      /* border: 1px solid red; */
      width: 80%;
      padding-right: 80px;
    }
    div dl {
      /* border: 1px dotted gray; */
      display: flex;
      flex-direction: row;
      gap: 30px;
      justify-content: space-between;
      height: 30px;
    }
  }

  .box-payment-button {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9990;
  background-color: rgba(0, 0, 0, 0.7);
  /* padding: 20px; */ /* 이 부분은 제거 */
`;

export const Container = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
