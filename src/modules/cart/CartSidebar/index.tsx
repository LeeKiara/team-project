import { Suspense } from "react";
import { CartSidebarContainer } from "./styles";
import { Outlet } from "react-router-dom";
import OrderNotification from "../Order/OrderNotification/OrderNotification";

const CartSidebar = () => {
  return (
    <CartSidebarContainer>
      <div id="sidebar">
        <main>
          <aside></aside>
          <section>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>

            <OrderNotification />
          </section>
        </main>
      </div>
    </CartSidebarContainer>
  );
};

export default CartSidebar;
