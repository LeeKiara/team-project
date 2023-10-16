import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { cartRoutes } from "./modules/cart/routes";
import { booksRouts } from "./modules/books/routes";
import Login from "./pages/Login";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          {/* index: 해당경로의 기본 화면 */}
          <Route element={<Home />} index />
          {booksRouts}
          {/* 장바구니/주문 Route */}
          {cartRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
