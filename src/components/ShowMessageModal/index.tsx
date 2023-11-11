import { MutableRefObject, useRef } from "react";
import { ShowMessageModalStyle } from "./styles";

interface ShowMessageModalProps {
  message: string;
  messageTag?: React.ReactNode;
  onCancel?: () => void;
}

const ShowMessageModal = ({ message, messageTag, onCancel }: ShowMessageModalProps) => {
  return (
    // <div
    //   style={{
    //     position: "fixed",
    //     top: "50%",
    //     left: "50%",
    //     transform: "translate(-50%, -50%)",
    //     backgroundColor: "white",
    //     padding: "20px",
    //     boxShadow: "0px 0px 10px gray",
    //   }}>
    //   <div style={{ width: "300px", height: "150px", padding: 20, backgroundColor: "white" }}>
    //     <p>{message}</p>
    //     <div style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
    //       <button onClick={onCancel} className="box-gray">
    //         확인
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <ShowMessageModalStyle>
      <div className="dialog_contents_layout">
        <div className="ui-dialog-content">
          <div className="dialog_contents">
            <p className="alert_text_sm">{message}</p>
            {messageTag}
          </div>
          <div className="dialog_footer">
            <span className="text" onClick={onCancel}>
              확인
            </span>
            {/* <button onClick={onCancel} className="btn-confirm">
              확인
            </button> */}
          </div>
        </div>
      </div>
    </ShowMessageModalStyle>
  );
};

export default ShowMessageModal;
