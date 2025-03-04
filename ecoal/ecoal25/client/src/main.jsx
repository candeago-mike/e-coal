import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../pages/login.jsx";
import { MainPage } from "../pages/mainpage.jsx";
import { Register } from "../pages/register.jsx";
import { About } from "../pages/about.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/anytrip" element={<MainPage />} />
      <Route path="/about" element ={<About />} />
    </Routes>
  </BrowserRouter>
);