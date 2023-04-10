import React from "react";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  AuthWrapper,
} from "./pages";
import PrivateRoute from "./pages/PrivateRoute";

//layout
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
}

export default App;
