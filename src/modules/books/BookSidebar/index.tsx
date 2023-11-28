import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { SidebarContainer } from "./styles";
import CategoryButton from "@/components/CategoryButton";

const BookSidebar = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  //구분별 사이드값
  const [option, setOption] = useState<"베스트도서" | "신간도서" | "국내도서" | "외국도서">("국내도서");
  const [categorys, setCategorys] = useState([]);

  // const [selectedCategory, setSelectedCategory] = useState({});

  //국내도서 카테고리 키워드
  const keywords = [
    "소설/시/희곡",
    "사회과학",
    "에세이",
    "여행",
    "역사",
    "예술/대중문화",
    "어린이",
    "외국어",
    "요리/살림",
    "유아",
    "인문학",
    "자기계발",
    "종교/역학",
    "과학",
    "경제경영",
    "건강/취미",
    "만화",
  ];

  //외국도서 카테고리 키워드
  const foreignKeywords = [
    "소설/시/희곡",
    "해외잡지",
    "인문/사회",
    "어린이",
    "자기계발",
    "컴퓨터",
    "교육/자료",
    "종교/명상/점술",
    "전기/자서전",
  ];

  // const handleSelect = (index) => {
  //   setSelectedCategory((prevStates) => ({
  //     ...prevStates,
  //     [index]: !prevStates[index],
  //   }));
  // };

  //각 구분별 사이드바 상태 변화
  useEffect(() => {
    if (path === "best") {
      setOption("베스트도서");
      setCategorys(keywords);
    } else if (path === "new") {
      setOption("신간도서");
      setCategorys(keywords);
    } else if (path === "foreign") {
      setOption("외국도서");
      setCategorys(foreignKeywords);
    } else {
      setOption("국내도서");
      setCategorys(keywords);
    }
  }, [path]);

  return (
    <SidebarContainer>
      <div id="sidebar">
        <main>
          <aside>
            <Sidebar group={`${option}`} />
            <ul>
              {categorys.map((category, index) => (
                <li
                  key={category}
                  // onClick={() => {
                  //   handleSelect(index);
                  // }}
                  // className={selectedCategory[index] ? "selectedCategory" : ""}
                >
                  <CategoryButton path={path} option={`${option}>${category}`}>
                    {category}
                  </CategoryButton>
                </li>
              ))}
              {/* <li>
                {path !== "books" ? (
                  <Link to={`/books/${path}?option=${option}&keyword=사전`}>사전</Link>
                ) : (
                  <Link to={`/${path}?option=${option}&keyword=사전`}>사전</Link>
                )}
              </li>
              <li>
                <Link to={`/${path}?keyword=문학`}>문학</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=학습`}>학습</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=아동`}>아동</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=취미/실용`}>취미/실용</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=예체능`}>예체능</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=종교`}>종교</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=잡지`}>잡지</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=정치.법률`}>정치.법률</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=경제.경영`}>경제.경영</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=인문`}>인문</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=외국어`}>외국어</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=정부간행물`}>정부간행물</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=컴퓨터`}>컴퓨터</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=공학`}>공학</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=자연`}>자연</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=의학`}>의학</Link>
              </li>
              <li>
                <Link to={`/${path}?keyword=수험서`}>수험서</Link>
              </li> */}
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
      backgroundColor: "#3D4ED7",
      color: "white",
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

const SideTeb = () => {
  return;
};
