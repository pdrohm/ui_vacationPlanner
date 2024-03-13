import * as React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";

const MyRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer />
    </HashRouter>
  );
};

export default MyRoutes;
