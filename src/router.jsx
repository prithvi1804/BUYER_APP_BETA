import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import TestYourCatalogue from "./components/TestYourCatalogue/testYourCatalogue";
import Application from "./components/application/application";
import Login from "./components/auth/login/login";
import SignUp from "./components/auth/sign-up/signUp";
import PageNotFound from "./components/page-not-found/pageNotFound";

import Home from "./components/home/home";
import Category from "./components/category/category";
import SubCategory from "./components/product/product";
import Products from "./components/products/products";
import AppLayout from "./components/appLayout";
import RequestLogs from "./components/requestLogs/RequestLogs";

export default function OndcRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Navigate to={"/login"} replace />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/request-logs"} element={<RequestLogs />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/application/*"} element={<Application />} />
        <Route path={"/testYourCatalogue"} element={<TestYourCatalogue />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" replace />} />
      </Routes>
    </Router>
  );
}
