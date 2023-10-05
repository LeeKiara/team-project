import { Link, Outlet } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { SidebarContainer } from "./styles";

const BookSidebar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <SidebarContainer>
      <div id="sidebar">
        <main>
          {/* <aside>
            <h1>도서검색</h1>
            <div
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
              onClick={handleShowSearch}
            >
              search
            </div>
            {showSearch && <input type="text" />}
          </aside> */}
          <aside>
            <ul>
              <h3>베스트도서</h3>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
              <li>사전</li>
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
