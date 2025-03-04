import { NavLink } from "react-router";
import React from "react";

export const Login = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******"
                        />
                        <p className="text-red-500 text-xs italic">
                            Please enter a password.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <NavLink to="/anytryp">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Login
                            </button>
                        </NavLink>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs mt-4">
                    Don't have an account? <NavLink to="/register" className="text-blue-500">Register</NavLink>
                </p>
                <p className="text-center text-gray-500 text-xs mt-4">
                    &copy;2025 AnyTrip Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};
