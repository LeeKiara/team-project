import React, { useEffect, useState } from "react";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { TestForm } from "./styles";

const Test: React.FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const [isLoading, setIsLoading] = useState(true);
  const [blinkCount, setBlinkCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    };
  }, []);

  const handleBlinkEnd = () => {
    setBlinkCount(blinkCount + 1);
    if (blinkCount >= 4) {
      setIsLoading(false); // 3번 깜빡인 후 아이콘을 숨깁니다.
    }
  };

  return (
    <TestForm>
      <div className="container">
        <div style={{ height: "1200px" }}>
          {/* 여러 개의 .wrap_book 요소를 렌더링합니다. */}
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} onClick={scrollToBottom}>
              <h3 className="title_book">Item {item}</h3>
              {/* 아이템 내용 */}
            </div>
          ))}
          <br />
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus natus ipsa sequi vel ullam incidunt,
          </div>
          <br />

          {/* <div className="loading-container" style={{ display: isLoading ? "block" : "none" }}>
            <HourglassEmptyIcon sx={{ color: "pink", fontSize: "100px" }}></HourglassEmptyIcon>
          </div> */}

          {/* <div className={`loading-container ${isLoading ? "blink" : ""}`} onAnimationEnd={handleBlinkEnd}>
            <HourglassEmptyIcon sx={{ color: "pink", fontSize: "100px" }} />
          </div> */}

          <div className={`loading-container ${isLoading ? "blink" : ""}`} onAnimationEnd={handleBlinkEnd}>
            {isLoading && <HourglassEmptyIcon sx={{ color: "pink", fontSize: "100px" }} />}
          </div>
        </div>
      </div>
    </TestForm>
  );
};

export default Test;
