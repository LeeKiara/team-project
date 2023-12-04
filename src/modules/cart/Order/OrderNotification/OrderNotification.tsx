import { useEffect, useState } from "react";
import { Container, ItemContainer, Wrapper } from "./styles";
import { getDomain } from "@/utils/http";

const OrderNotification = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // 컴포넌트가 처음 로딩될 때 응답 대기
    // content-type: text/event-stream

    // 배송상태 알림 이벤트소스
    const domain = getDomain();
    const eventSource = new EventSource(domain + "/delivery/notifications");

    // 메시지가 오면 실행
    eventSource.onmessage = (event) => {
      console.log("event.data ===> " + event.data);
      if (event.data != "[create-order]connected") {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      }
    };

    // useEffect 훅에서 함수를 return하면
    // 컴포넌트가 없어질때(unmount) 반환 함수가 실행됨

    // 클린업
    // clearTimeout(id), clearInterval(id)
    // 서버에 응답대기: close()..
    return () => {
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    console.log("messages ===> " + messages);
  }, [messages]);

  return (
    <Wrapper>
      <article>
        {/* <ul>
        {messages.map((message, index) => (
          <li key={index}>* 배송이 완료 되었습니다. 주문번호 : [{message}]</li>
        ))}
      </ul> */}

        {messages.length > 0 && (
          <div className="order-notification">
            <div className="icon-bookgubun">
              <p>알림</p>
            </div>

            <ul className="icon-message">
              배송이 시작 되었습니다.
              {messages.map((message, index) => (
                <li key={index}>주문번호 : [{message}]</li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </Wrapper>
  );
};

export default OrderNotification;
