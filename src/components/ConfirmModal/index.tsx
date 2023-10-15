import { MutableRefObject, useRef, useState } from "react";
import { ConfirmModalStyle } from "./styles";
import OrderButton from "../OrderButton";

interface SampleProps {
  title: string;
  children: React.ReactNode;
}

const handleButtonClick = () => {};

// ConfirmModal 컴포넌트
const ConfirmModal = ({ isVisible, message, onConfirm, onCancel }) => {
  if (!isVisible) return null;

  return (
    <ConfirmModalStyle>
      <div className="modal-container">
        <p> {message} </p>
        <div className="modal-box-layer">
          <button className="modal-box-confirm" onClick={onConfirm}>
            확인
          </button>
          <button onClick={onCancel}>취소</button>
        </div>
        {/* <OrderButton cartBooks={stateCartData} /> */}
      </div>
    </ConfirmModalStyle>
  );
};

// export default App;
export default ConfirmModal;
