import { NavLink } from "react-router-dom";
import React from "react";
import { Logout } from "./logout";
import { Cookies, CookiesProvider } from "react-cookie";

export const Header = () => {
    function getCookieValue(name) {
        const regex = new RegExp(`(^| )${name}=([^;]+)`);
        const match = document.cookie.match(regex);
        if (match) {
            return match[2];
        }
    }

    const getAccessToken = () => {
        return getCookieValue("accessToken") != undefined;
    };

    const isAuthenticated = () => {
        return !!getAccessToken();
    };
    return (
        <header className="w-full flex justify-between bg-[#090920] items-center py-4 text-[#E8D1C1] px-6">
            <NavLink
                to="/anytrip"
                className="text-[#E8D1C1] font-semibold hover:text-[#ffffff]"
            >
                <img
                    src="/src/images/Logo.png"
                    alt="AnyTrip"
                    className="w-35"
                />
            </NavLink>
            <nav className="flex gap-6">
                <NavLink
                    to="/anytrip"
                    className="text-[#E8D1C1] font-semibold hover:text-[#ffffff]"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className="text-[#E8D1C1] hover:text-[#ffffff] font-semibold"
                >
                    About
                </NavLink>
                {getAccessToken() ? <Logout /> : <div><a href="/">Login</a></div>}
            </nav>
        </header>
    );
};
