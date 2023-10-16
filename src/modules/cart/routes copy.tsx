import { Route } from "react-router-dom";
import { lazy } from "react";
// import CartList from "./CartList";
// import Order from "./Order";
import CartSidebar from "./CartSidebar";
// import OrderDone from "./Order/OrderDone";
import PaymentInfo from "./Order/PaymentInfo";
import AddOrder from "./AddOrder";

const AddCart = lazy(() => import("@/modules/cart/AddCart"));
const Order = lazy(() => import("@/modules/cart/Order"));
const CartList = lazy(() => import("@/modules/cart/CartList"));
const OrderDone = lazy(() => import("@/modules/cart/Order/OrderDone"));
const OrderList = lazy(() => import("@/modules/cart/OrderList"));
const OrderDetail = lazy(() => import("@/modules/cart/OrderDetail"));

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
    <Route key="order/done" path="order/done" element={<OrderDone />} />,
    <Route key="orderlist" path="orderlist" element={<OrderList />} />,
    <Route key="orderdetail" path="orderdetail" element={<OrderDetail />} />,
  </Route>,
  <Route key="addcart" path="addcart" element={<CartSidebar />}>
    ,
    <Route element={<AddCart />} index />,
  </Route>,
  <Route key="test" path="test" element={<CartSidebar />}>
    ,
    <Route element={<OrderDetail />} index />,
  </Route>,
];
