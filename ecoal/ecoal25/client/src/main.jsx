import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { Login } from "../pages/login.jsx";
import { MainPage } from "../pages/mainpage.jsx";
import { Register } from "../pages/register.jsx";
import { About } from "../pages/about.jsx";
import { ArticlePage } from "../src/shared/articlePage";
import { ErrorPage } from "../pages/errorPage";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/anytrip" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);
