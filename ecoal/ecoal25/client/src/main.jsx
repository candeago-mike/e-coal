import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cookies, CookiesProvider } from "react-cookie";
import { Login } from "../pages/login.jsx";
import { MainPage } from "../pages/mainpage.jsx";
import { Register } from "../pages/register.jsx";
import { About } from "../pages/about.jsx";
import { ArticlePage } from "../src/shared/articlePage";
import ProtectedRoute from "./shared/protectedRoute.jsx";
import { AddArticle } from "../pages/addArticle.jsx";
import { ErrorPage } from "../pages/errorPage";


export function getCookieValue(name) {
    const regex = new RegExp(`(^| )${name}=([^;]+)`);
    const match = document.cookie.match(regex);
    if (match) {
        return match[2];
    }
}

const root = document.getElementById("root");
export const getAccessToken = () => {
    return getCookieValue("accessToken") != undefined;
};

export const isAuthenticated = () => {
    return !!getAccessToken();
};
ReactDOM.createRoot(root).render(
    <CookiesProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* {isAuthenticated() ? ( */}
                <Route path="/" element={<MainPage />} />
                {/* ) : null} */}
                {/* {isAuthenticated() ? ( */}
                <Route path="/about" element={<About />} />
                {/* ) : null} */}
                {/* {isAuthenticated() ? ( */}
                <Route path="/article/:id" element={<ArticlePage />} />
                {/* ) : null} */}
                {isAuthenticated() ? (
                    <Route path="/addarticle" element={<AddArticle />} />
                ) : null}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </CookiesProvider>
);
