import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { cartRoutes } from "./modules/cart/routes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { bookRoutes } from "./modules/books/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          {bookRoutes}
          {cartRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
