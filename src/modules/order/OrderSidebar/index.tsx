import Home from "@/pages/Home";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

const BookSidebar = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* <Home /> */}
      {/* <BookList /> */}
      <aside style={{ width: "200px" }}>
        <ul>
          <li>
            <Link to="/mall/order">주문목록</Link>
          </li>
          <li>
            <Link to="/mall/order/cart">장바구니</Link>
          </li>
        </ul>
      </aside>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default BookSidebar;
