import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { Login } from "../pages/login.jsx";
import { MainPage } from "../pages/mainpage.jsx";
import { Register } from "../pages/register.jsx";
import { About } from "../pages/about.jsx";
import { ArticlePage } from "../src/shared/articlePage";

const ProtectedRoute = ({ children }) => {
    const [cookies] = useCookies(["user"]); 
    
    return cookies.user?.token ? children : <Navigate to="/" replace />;
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/anytrip" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/article/:id" element={<ProtectedRoute><ArticlePage /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);
