import React from "react";
import { NavLink } from "react-router";

export const Register = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl">Register for Any Trip</h1>
            <label>email</label>
            <input className="border b-1 border-black" type="email" />
            <label>password</label>
            <input className="border b-1 border-black" type="password" />
            <label>confirm password</label>
            <input className="border b-1 border-black" type="password" />

            <NavLink to="/">
                <button className="bg-blue-500 border b-1 border-black">create account</button>
            </NavLink>
        </div>
    );
};
