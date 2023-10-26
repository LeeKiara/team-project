import { Route } from "react-router-dom";
import { lazy } from "react";
import CartSidebar from "./CartSidebar";

import OrderForm from "@/modules/cart/Order/OrderForm";
import AddressSearch from "./AddressSearch/Search";
import AddressSucceed from "./AddressSearch/Success";
import Test from "./test/Test";
// import AddCart2 from "./test/AddCart2";

const AddCart2 = lazy(() => import("@/modules/cart/test/AddCart2"));
const Order = lazy(() => import("@/modules/cart/Order/OrderForm"));
const CartForm = lazy(() => import("@/modules/cart/CartForm"));
const Payment = lazy(() => import("@/modules/cart/Order/Payment"));
const OrderDone = lazy(() => import("@/modules/cart/Order/OrderDone"));
const OrderList = lazy(() => import("@/modules/cart/OrderList"));
const OrderDetail = lazy(() => import("@/modules/cart/OrderDetail"));
const Test = lazy(() => import("@/modules/cart/test/Test"));

export const cartRoutes = [
  <Route key="cart" path="cart" element={<CartSidebar />}>
    ,
    <Route element={<CartForm />} index />,
  </Route>,
  <Route key="order" path="order" element={<CartSidebar />}>
    ,
    <Route element={<OrderForm />} index />,
    <Route key="payment" path="payment" element={<Payment />} />,
    <Route key="done" path="done/:orderId" element={<OrderDone />} />,
    <Route key="list" path="list" element={<OrderList />} />,
    <Route key="detail" path="detail/:orderId" element={<OrderDetail />} />,
  </Route>,
  // <Route key="test" path="test" element={<CartSidebar />}>
  //   ,
  //   <Route element={<AddCart2 />} index />,
  //   <Route key="detail" path="detail/:orderId" element={<OrderDetail />} />,
  // </Route>,
  <Route key="address" path="address" element={<CartSidebar />}>
    ,
    <Route key="search" path="search" element={<AddressSearch />} />,
    <Route key="succeed" path="succeed" element={<AddressSucceed />} />,
  </Route>,
  <Route key="detail" path="detail" element={<OrderDetail />} />,
  <Route key="test" path="test" element={<OrderList />} />,
];
