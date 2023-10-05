import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BookSidebar from "./modules/mall/books/BookSidebar";
import BookList from "./modules/books/BookList";
import OrderList from "./modules/order/OrderList";
import BookSearch from "./modules/books/BookSearch";
import Layout from "./Layout";
import { lazy } from "react";
import Cart from "./modules/order/cart";

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
          <Route path="order" element={<OrderSidebar />}>
            <Route element={<OrderList />} index />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
