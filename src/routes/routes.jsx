import * as React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import { PlanProvider } from "../context/PlanContext";
import CreatePlanPage from "../pages/CreatePlanPage";
import PlanPage from "../pages/PlanPage";
import PdfViewerPage from "../pages/PdfViewerPage";
import ReportPdfButton from "../components/ReportPdfButton";

const MyRoutes = () => {
  return (
    <HashRouter>
      <PlanProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/createPlan"
            element={
              <Layout>
                <CreatePlanPage />
              </Layout>
            }
          />
          <Route
            path="/plan/:id"
            element={
              <Layout>
                <PlanPage />
              </Layout>
            }
          />
          <Route
            path="/pdf"
            element={
              <Layout>
                <PdfViewerPage />
              </Layout>
            }
          />
        </Routes>
        <ReportPdfButton />
        <ToastContainer />
      </PlanProvider>
    </HashRouter>
  );
};

export default MyRoutes;
