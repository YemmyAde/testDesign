import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Landing from "../app/pages/landing";

export const AppRoute = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
  );
};


const ProtectedRoute = () => {
  const user = localStorage.getItem("token")
  return !user ? <Outlet/> : <Navigate to="/login" />
}