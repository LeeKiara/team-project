import { Route } from "react-router-dom";
import { lazy } from "react";
import CartList from "./CartList";

const AddCart = lazy(() => import("@/modules/cart/AddCart"));

export const cartRoutes = [
  <Route key="cart" path="cart" element={<CartList />} />,
  <Route key="cart/add" path="cart/add" element={<AddCart />} />,
  // {/* <Route path="order" element={<OrderSidebar />}>
  //           <Route element={<OrderList />} index />
  //           <Route path="cart" element={<Cart />} />
  //         </Route> */}
];
