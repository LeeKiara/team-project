import styled from "@emotion/styled";

// import deleteButtonImage from "@/modules/cart/assets/icon_delete_order.png";

export const OrderDoneContainer = styled.div`
  .box-order-done {
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: 200px;
    text-align: center;
    /* border: 1px solid black; */

    .text1 {
      font-size: 18px;
      font-weight: 600;
    }

    .text2 {
      font-size: 34px;
      font-weight: 800;
    }

    .orderno {
      font-size: 20px;
      width: 400px;
    }
  }

  .box-pagemove {
    display: flex;
    gap: 10px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9990;
  background-color: rgba(0, 0, 0, 0.7);
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
