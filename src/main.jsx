import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./Component/Redux/Store";

import Homepage from "./Component/HomePage/Homepage";
import Login from "./Component/Login/Login";
import About from "./Component/About/About";
import Faqs from "./Component/FAQs/Faqs";
import Combos from "./Component/Combos/Combos";
import Recipes from "./Component/Recipes/Recipes";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import ShopAll from "./Component/ShopAll/ShopAll";
import CartPage from "./Component/CartPage/CartPage";
import { closeCart } from "./Component/Redux/CartSlice";
import ContactUs from "./Component/ContactUs/ContactUs";
import PrivacyPolicy from "./Component/Footer/PrivacyPolicy";
import ReturnRefundPolicy from "./Component/Footer/ReturnRefundPolicy";
import ShippingPolicy from "./Component/Footer/ShippingPolicy";
import TermsConditions from "./Component/Footer/TermsConditions";

/* 👇 APP WRAPPER */
function AppLayout() {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/shopall" element={<ShopAll />} />
        <Route path="/productdtl/:id" element={<ProductDetail />} />
        <Route path="/contctUs" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/return" element={<ReturnRefundPolicy />} />
        <Route path="/shiping" element={<ShippingPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />

      </Routes>

      {/* 🔥 CART SIDEBAR */}
      {isCartOpen && (
        <CartPage closeCart={() => dispatch(closeCart())} />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
