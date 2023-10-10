import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LayoutContainer } from "./styles";

const Layout = () => {
  return (
    <LayoutContainer>
      <div id="center">
        <header>
          <div>
            <aside>
              <button>
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </button>
              <button>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </aside>
            <div id="searchForm">
              <h1>
                <Link to="/">Bruch Story</Link>
              </h1>
              <form>
                <label>
                  <input type="text" />
                  <span className="material-symbols-outlined">search</span>
                </label>
              </form>
            </div>
          </div>
          <nav className="header-nav">
              <ul>
                <li>
                  <Link to="/books">베스트도서</Link>
                </li>
                <li>
                  <Link to="/books">신간도서</Link>
                </li>
                <li>
                  <Link to="/books">국내도서</Link>
                </li>
                <li>
                  <Link to="/books">외국도서</Link>
                </li>
                <li>
                  <Link to="/cart">장바구니</Link>
                </li>
              </ul>
            </nav>
        </header>

        <main>
          {/* 세부경로의 컴포넌트들이 로딩위치 */}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </LayoutContainer>
  );
};

export default Layout;
