import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import ControlPage from "../pages/ControlPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact={true} />
        <Route path="/control" element={<ControlPage />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
