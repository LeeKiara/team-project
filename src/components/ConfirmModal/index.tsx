import { MutableRefObject, useRef, useState } from "react";
import { ConfirmModalStyle } from "./styles";
import OrderButton from "../OrderButton";

interface SampleProps {
  title: string;
  children: React.ReactNode;
}

const handleButtonClick = () => {};

// ConfirmModal 컴포넌트
const ConfirmModal = ({ isVisible, onConfirm, onCancel }) => {
  if (!isVisible) return null;

  return (
    <ConfirmModalStyle>
      <div>
        <p> 개의 상품을 주문하시겠습니까?</p>
        <button onClick={onConfirm}>확인</button>&nbsp;&nbsp;
        <button onClick={onCancel}>취소</button>
        {/* <OrderButton cartBooks={stateCartData} /> */}
      </div>
    </ConfirmModalStyle>
  );
};

// export default App;
export default ConfirmModal;
