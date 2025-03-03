import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import { Login } from "../pages/login.jsx";
import { MainPage } from "../pages/mainpage.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/anytrypage" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);