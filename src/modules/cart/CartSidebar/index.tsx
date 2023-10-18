import { Suspense } from "react";
import { CartSidebarContainer } from "./styles";
import { Outlet } from "react-router-dom";

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
          </section>
        </main>
      </div>
    </CartSidebarContainer>
  );
};

export default CartSidebar;
