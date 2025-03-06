import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from "react-cookie";

const ProtectedRoute = () => {
    const [cookies] = useCookies(["accessToken"]);
    console.log("ici", cookies)
    if (!cookies.accessToken) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
