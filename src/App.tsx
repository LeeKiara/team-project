import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BookSidebar from "./modules/mall/books/BookSidebar";
import BookList from "./modules/books/BookList";
import OrderList from "./modules/order/OrderList";
import BookSearch from "./modules/books/BookSearch";
import Layout from "./layout/Layout";
import { lazy } from "react";
import Cart from "./modules/order/cart";
import { cartRoutes } from "./modules/cart/routes";

const BookSidebar = lazy(() => import("./modules/books/BookSidebar"));
const OrderSidebar = lazy(() => import("./modules/order/OrderSidebar"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index: 해당경로의 기본 화면 */}
          <Route element={<Home />} index />

          <Route path="books" element={<BookSidebar />}>
            <Route element={<BookList />} index />
            <Route path="search" element={<BookSearch />} />
          </Route>

          {/* 장바구니/주문 Route */}
          {cartRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
