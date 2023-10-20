import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import { LayoutContainer } from "./styles";
import ResetStyle from "@/styles/reset";
import { getCookie } from "@/utils/cookie";
import {
  AccountCircle,
  AccountCircleOutlined,
  ExitToApp,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Layout = () => {
  const navigate = useNavigate();
  const searchRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [selectedOption, setSelectedOption] = useState("");
  const [cookie, SetCookie] = useState("");

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?option=${selectedOption}&keyword=${searchRef.current.value}`);
    setSelectedOption("");
    searchRef.current.value = "";
  };

  const handleChange = (event) => {
    console.log(event.target.value + "옵션 선택 결과");
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    SetCookie(getCookie("token"));
  }, [getCookie("token")]);

  return (
    <LayoutContainer>
      <ResetStyle />
      <div id="center">
        <header>
          <div>
            <aside>
              {!cookie ? (
                <Link to="/login">
                  <button>
                    <AccountCircleOutlined className="material-symbols-outlined" />
                  </button>
                </Link>
              ) : (
                <button onClick={handleLogout}>
                  <ExitToApp className="material-symbols-outlined" />
                </button>
              )}
              <Link to="/order/list">
                <button>
                  <ShoppingCartOutlined className="material-symbols-outlined" />
                </button>
              </Link>
            </aside>
            <div id="searchForm">
              <h1>
                <Link to="/">Bruch Story</Link>
              </h1>
              <form onSubmit={handleSearch}>
                <label>
                  <select value={selectedOption} onChange={handleChange}>
                    <option value="">통합검색</option>
                    <option value="국내도서">국내도서</option>
                    <option value="외국도서">외국도서</option>
                    {/* <option value="리뷰">리뷰</option> */}
                  </select>
                  <input ref={searchRef} />
                  <button type="submit" className="material-symbols-outlined">
                    search
                  </button>
                </label>
              </form>
            </div>
          </div>
          <nav className="header-nav">
            <ul>
              <li>
                <Link to="/books/best">베스트도서</Link>
              </li>
              <li>
                <Link to="/books/new">신간도서</Link>
              </li>
              <li>
                <Link to="/books">국내도서</Link>
              </li>
              <li>
                <Link to="/books/foreign">외국도서</Link>
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
