import { Route } from "react-router-dom";
import { lazy } from "react";
// import CartList from "./CartList";
// import Order from "./Order";
import CartSidebar from "./CartSidebar";
// import OrderDone from "./Order/OrderDone";
import PaymentInfo from "./Order/PaymentInfo";

const AddCart = lazy(() => import("@/modules/cart/AddCart"));
const Order = lazy(() => import("@/modules/cart/Order"));
const CartList = lazy(() => import("@/modules/cart/CartList"));
const OrderDone = lazy(() => import("@/modules/cart/Order/OrderDone"));

export const cartRoutes = [
  <Route key="cart" path="cart" element={<CartSidebar />}>
    ,
    <Route element={<CartList />} index />,
    <Route key="cart/add" path="cart/add" element={<AddCart />} />,
    <Route key="order" path="order" element={<Order />} />,
    <Route key="order/done" path="order/done" element={<OrderDone />} />,
  </Route>,
  <Route key="order" path="order" element={<CartSidebar />}>
    ,
    <Route element={<Order />} index />,
  </Route>,
  <Route key="addcart" path="addcart" element={<CartSidebar />}>
    ,
    <Route element={<AddCart />} index />,
  </Route>,
];
