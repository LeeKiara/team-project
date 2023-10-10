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
                <Link to={`/books/${path}?keyword=사전`}>사전</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=문학`}>문학</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=학습`}>학습</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=아동`}>아동</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=취미/실용`}>취미/실용</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=예체능`}>예체능</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=종교`}>종교</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=잡지`}>잡지</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=정치.법률`}>정치.법률</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=경제.경영`}>경제.경영</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=인문`}>인문</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=외국어`}>외국어</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=정부간행물`}>정부간행물</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=컴퓨터`}>컴퓨터</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=공학`}>공학</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=자연`}>자연</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=의학`}>의학</Link>
              </li>
              <li>
                <Link to={`/books/${path}?keyword=수험서`}>수험서</Link>
              </li>
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
