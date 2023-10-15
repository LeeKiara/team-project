import { Link, Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { SidebarContainer } from "./styles";

const BookSidebar = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  //구분별 사이드값
  const [group, setGroup] = useState<
    "베스트도서" | "신간도서" | "국내도서" | "외국도서"
  >("국내도서");

  //각 구분별 사이드바 상태 변화
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
            <Sidebar group={`${group}`} />
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

const Sidebar = ({ group }: { group: string }) => {
  let sidebarStyle: React.CSSProperties = {
    paddingLeft: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontSize: "18px",
  }; // 초기화

  if (group === "외국도서") {
    sidebarStyle = {
      ...sidebarStyle,
      backgroundColor: "blue",
    };
  } else if (group === "신간도서") {
    sidebarStyle = {
      ...sidebarStyle,
      backgroundColor: "lightgray",
    };
  } else if (group === "베스트도서") {
    sidebarStyle = {
      ...sidebarStyle,
      backgroundColor: "black",
      color: "white",
    };
  } else {
    sidebarStyle = {
      ...sidebarStyle,
      backgroundColor: "#fde7e7",
    };
  }

  return (
    <div style={sidebarStyle}>
      <h3>{group}</h3>
    </div>
  );
};

export default BookSidebar;
