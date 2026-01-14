import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AddressContextProvider } from "../../context/addressContext";
import { CartContextProvider } from "../../context/cartContext";
import { SearchContextProvider } from "../../context/searchContext";
import PrivateRoute from "../../privateRoutes";
import Cart from "./cart/cart";
// import Checkout from "./checkout/checkout";
// import Orders from "./orders/orders";
// import ProductList from "./product-list/productList";
// import Home from "../home/home";
// import Profile from "./profile/profile";
// import Support from "./support/support";
import ProductDetails from "./product-list/product-details/productDetails";
import Brand from "../brand/brand";
import OutletDetails from "../brand/outletDetails/outletDetails";
import Checkout from "../checkout/checkout";
import Orders from "../orders/orders";
import OrderDetails from "../orders/orderDetails/orderDetails";
// import InitializeOrder from "./initialize-order/initializeOrder";
import MyTickets from "./my-tickets/myTickets";

import AppLayout from "../appLayout";
import Products from "../products/products";
import BrandRoutes from "../brand/BrandRoutes";
import ProductRoutes from "./product-list/ProductRoutes";
import ComplaintDetail from "./my-tickets/complaintDetail";

export default function Application() {
  return (
    <CartContextProvider>
      <AddressContextProvider>
        <SearchContextProvider>
          <Routes>
            <Route path={"/"} element={<Navigate to={"/application/products"} replace />} />
            <Route
              path={"/products"}
              element={
                <PrivateRoute>
                  <AppLayout>
                    <ProductRoutes />
                  </AppLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={"/cart"}
              element={
                <PrivateRoute>
                  <AppLayout>
                    <Cart />
                  </AppLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={"/brand/*"}
              element={
                <PrivateRoute>
                  <AppLayout>
                    <BrandRoutes />
                  </AppLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={"/checkout"}
              element={
                <PrivateRoute>
                  <AppLayout isCheckout={true}>
                    <Checkout />
                  </AppLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={"/orders"}
              element={
                <PrivateRoute>
                  <AppLayout>
                    <Orders />
                  </AppLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={"/order/:orderId"}
              element={
                <PrivateRoute>
                  <AppLayout>
                    <OrderDetails />
                  </AppLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={"/complaints"}
              element={
                <PrivateRoute>
                  <AppLayout>
                    <MyTickets />
                  </AppLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={"/complaint/:issueId"}
              element={
                <PrivateRoute>
                  <AppLayout>
                    <ComplaintDetail />
                  </AppLayout>
                </PrivateRoute>
              }
            />
          </Routes>
        </SearchContextProvider>
      </AddressContextProvider>
    </CartContextProvider>
  );
}
