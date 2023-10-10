import { Link, Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { SidebarContainer } from "./styles";

const BookSidebar = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const [group, setGroup] = useState("국내도서");

  useEffect(() => {
    if (path === "best") {
      setGroup("베스트도서");
    } else if (path === "new") {
      setGroup("신간도서");
    } else if (path === "foreign") {
      setGroup("외국도서");
    } else {
      setGroup("국내도서");
    }
  }, [path]);

  return (
    <SidebarContainer>
      <div id="sidebar">
        <main>
          <aside>
            <h3>{group}</h3>
            <ul>
              <li>
                <Link to="/search">사전</Link>
              </li>
              <li>문학</li>
              <li>학습</li>
              <li>아동</li>
              <li>취미/실용</li>
              <li>예체능</li>
              <li>종교</li>
              <li>잡지</li>
              <li>정치.법률</li>
              <li>경제.경영</li>
              <li>인문</li>
              <li>외국어</li>
              <li>정부간행물</li>
              <li>컴퓨터</li>
              <li>공학</li>
              <li>자연</li>
              <li>의학</li>
              <li>수험서</li>
            </ul>
          </aside>
          <section>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </section>
        </main>
      </div>
    </SidebarContainer>
  );
};

export default BookSidebar;
