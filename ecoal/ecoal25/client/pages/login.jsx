import React from "react";
import { NavLink } from "react-router-dom"; // ✅ Fixed import
import axios from "axios";

export const Login = () => {
    async function handleLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                alert("Login successful");
                window.location.href = "/anytrip"; 
            } else {
                alert(response.data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error);
            alert(error.response?.data?.message || "An error occurred during login");
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#E8D1C1]">
            <div className="w-full max-w-xs">
                <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold text-center text-[#090920] mt-2 mb-4">Login</h2>

                    <div className="mb-4">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="email"
                            name="email" // ✅ Added name
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="password"
                            name="password" // ✅ Added name
                            type="password"
                            placeholder="******"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-[#131373] hover:bg-[#090920] text-white font-bold py-2 px-6 mt-2 rounded"
                            type="submit" 
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="text-center text-[#090920] text-sm mt-4">
                    Don't have an account?{" "}
                    <NavLink to="/register" className="text-[#851515] font-bold hover:underline">
                        Register
                    </NavLink>
                </p>

                <p className="text-center text-[#090920] text-xs mt-4">
                    &copy;2025 AnyTrip Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};
