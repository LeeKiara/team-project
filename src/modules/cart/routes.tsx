import { Route } from "react-router-dom";
import { lazy } from "react";
import CartSidebar from "./CartSidebar";

import AddressSearch from "./AddressSearch/Search";
import AddressSucceed from "./AddressSearch/Success";
import PublisherBook from "./PublisherBook";

const AddCart = lazy(() => import("@/modules/cart/AddCart"));
const Payment = lazy(() => import("@/modules/cart/Order/Payment"));
const OrderDone = lazy(() => import("@/modules/cart/Order/OrderDone"));
const OrderList = lazy(() => import("@/modules/cart/OrderList"));
const OrderDetail = lazy(() => import("@/modules/cart/OrderDetail"));
const OrderForm = lazy(() => import("@/modules/cart/Order/OrderForm"));

export const cartRoutes = [
  <Route key="cart" path="cart" element={<CartSidebar />}>
    ,
    <Route element={<AddCart />} index />,
  </Route>,
  <Route key="order" path="order" element={<CartSidebar />}>
    ,
    <Route element={<OrderForm />} index />,
    <Route key="payment" path="payment" element={<Payment />} />,
    <Route key="done" path="done" element={<OrderDone />} />,
    <Route key="list" path="list" element={<OrderList />} />,
    <Route key="detail" path="detail/:orderId" element={<OrderDetail />} />,
  </Route>,
  <Route key="address" path="address" element={<CartSidebar />}>
    ,
    <Route key="search" path="search" element={<AddressSearch />} />,
    <Route key="succeed" path="succeed" element={<AddressSucceed />} />,
  </Route>,
  <Route key="detail" path="detail" element={<OrderDetail />} />,
  // <Route key="test" path="test" element={<ConfirmModalEx />} />,
  <Route key="eventbook" path="eventbook" element={<PublisherBook />} />,
];
