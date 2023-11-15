import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { cartRoutes } from "./modules/cart/routes";
import { booksRouts } from "./modules/books/routes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          {booksRouts}
          {cartRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
