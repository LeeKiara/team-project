import { useCallback, useEffect, useState } from "react";
import Alert from "./Alert";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  // useCallback(함수블록, 의존변수배열)
  const handleAlertClosed = () => {
    if (showAlert) {
      setShowAlert(false);
    }
  };

  // useEffect(함수블럭, 의존변수배열) : 상태값 변경이나 컴포넌트 라이프사이클 변동에 따른 처리
  useEffect(() => {
    if (count != 0) {
      // console.log("--얼럿박스  표시--");
      if (!showAlert) {
        setShowAlert(true);
      }
    }
  }, [count, showAlert]);

  return (
    <>
      {/* 조건부 렌더링 */}
      {/* {showAlert && (
        <Alert message={"증가되었습니다."} onClose={handleAlertClosed} />
      )} */}
      <div>
        <p>현재 카운트: {count}</p>
        <button onClick={handleIncrement}>증가</button>
      </div>
    </>
  );
};

export default Counter;
