import { NavLink } from "react-router";
import React from "react";

export const Logout = () => {
    return (
        <div>
            <NavLink to="/">
                <button className="bg-blue-500 border b-1 border-black">
                    logout
                </button>
            </NavLink>
        </div>
    );
};
