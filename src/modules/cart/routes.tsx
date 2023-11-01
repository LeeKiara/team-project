import { Route } from "react-router-dom";
import { lazy } from "react";
import CartSidebar from "./CartSidebar";

import OrderForm from "@/modules/cart/Order/OrderForm";
import AddressSearch from "./AddressSearch/Search";
import AddressSucceed from "./AddressSearch/Success";
import Example from "./test/ImageBanner/example";
import PublisherBook from "./PublisherBook";

const CartForm = lazy(() => import("@/modules/cart/CartForm"));
const Payment = lazy(() => import("@/modules/cart/Order/Payment"));
const OrderDone = lazy(() => import("@/modules/cart/Order/OrderDone"));
const OrderList = lazy(() => import("@/modules/cart/OrderList"));
const OrderDetail = lazy(() => import("@/modules/cart/OrderDetail"));

export const cartRoutes = [
  <Route key="cart" path="cart" element={<CartSidebar />}>
    ,
    <Route element={<CartForm />} index />,
  </Route>,
  <Route key="order" path="order" element={<CartSidebar />}>
    ,
    <Route element={<OrderForm />} index />,
    <Route key="payment" path="payment" element={<Payment />} />,
    <Route key="done" path="done" element={<OrderDone />} />,
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
  <Route key="test" path="test" element={<OrderDone />} />,
  <Route key="test2" path="test2" element={<PublisherBook />} />,
];
