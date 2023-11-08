import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../app/pages";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};
