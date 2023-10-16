import { Route } from "react-router-dom";
import { lazy } from "react";
// import CartList from "./CartList";
// import Order from "./Order";
import CartSidebar from "./CartSidebar";
// import OrderDone from "./Order/OrderDone";
import PaymentInfo from "./Order/PaymentInfo";
import AddOrder from "./test/AddOrder";
import ComponentA from "./test/ComponentA";
import ComponentB from "./test/ComponentB";
import OrderForm from "@/modules/cart/Order/OrderForm";

const AddCart = lazy(() => import("@/modules/cart/test/AddCart"));
const Order = lazy(() => import("@/modules/cart/Order/OrderForm"));
const CartForm = lazy(() => import("@/modules/cart/CartForm"));
const OrderDone = lazy(() => import("@/modules/cart/Order/OrderDone"));
const OrderList = lazy(() => import("@/modules/cart/OrderList"));
const OrderDetail = lazy(() => import("@/modules/cart/OrderDetail"));

export const cartRoutes = [
  <Route key="cart" path="cart" element={<CartSidebar />}>
    ,
    <Route element={<CartForm />} index />,
    {/* <Route key="order" path="order" element={<Order />} />, */}
    {/* <Route key="order/done" path="order/done" element={<OrderDone />} />, */}
  </Route>,
  <Route key="order" path="order" element={<CartSidebar />}>
    ,
    <Route element={<OrderForm />} index />,
    <Route key="done" path="done" element={<OrderDone />} />,
    <Route key="list" path="list" element={<OrderList />} />,
    <Route key="detail" path="detail" element={<OrderDetail />} />,
  </Route>,
  <Route key="test" path="test" element={<CartSidebar />}>
    ,
    <Route element={<AddCart />} index />,
    <Route key="orderdetail" path="orderdetail" element={<OrderDetail />} />,
  </Route>,
  <Route key="test3" path="test3" element={<ComponentA />} />,
  <Route key="ComponentB" path="ComponentB" element={<ComponentB />} />,
];
