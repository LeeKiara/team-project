import { Route } from "react-router-dom";
import { lazy } from "react";
import CartList from "./CartList";
import Order from "./Order";
import CartSidebar from "./CartSidebar";
import CartListDonga from "./CartList/indexdonga";

const AddCart = lazy(() => import("@/modules/cart/AddCart"));

export const cartRoutes = [
  <Route key="cart" path="cart" element={<CartSidebar />}>
    ,
    <Route element={<CartList />} index />,
    <Route key="cart/add" path="cart/add" element={<AddCart />} />,
    <Route key="order" path="order" element={<Order />} />,
  </Route>,
  <Route key="cartdonga" path="cartdonga" element={<CartListDonga />} />,
  <Route key="order" path="order" element={<CartSidebar />}>
    ,
    <Route element={<Order />} index />,
  </Route>,
  // {/* <Route path="order" element={<OrderSidebar />}>
  //           <Route element={<OrderList />} index />
  //           <Route path="cart" element={<Cart />} />
  //         </Route> */}
];
