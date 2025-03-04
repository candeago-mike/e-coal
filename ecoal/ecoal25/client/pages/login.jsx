import { NavLink } from "react-router";
import React from "react";
export const Login = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl">Login for Any Trip</h1>
            <label>email</label>
            <input className="border b-1 border-black" type="email" />
            <label >password</label>
            <input className="border b-1 border-black" type="password" />
            <NavLink to="/register">
                <button>register</button>
            </NavLink>

            <NavLink to="/anytrypage">
                <button className="bg-blue-500 border b-1 border-black">login</button>
            </NavLink>
        </div>
    );
};
