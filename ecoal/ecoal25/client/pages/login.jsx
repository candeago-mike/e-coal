import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import axios from "axios";
import { useCookies } from "react-cookie";

export const Login = () => {
    const [cookies, setCookie] = useCookies(["user"]); 
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);

    async function handleLogin(event) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            // Step 1: Login Request
            const loginResponse = await axios.post(
                "http://localhost:8000/api/login",
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            if (loginResponse.status === 200) {
                const token = loginResponse.data.token;

                // Step 2: Fetch Users List
                const usersResponse = await axios.get("http://localhost:8000/api/users", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (usersResponse.status === 200) {
                    const users = usersResponse.data; 
                    console.log(users)
                    
                    const user = users.find(user => user.email === email);

                    if (user) {
                        setCookie("user", { name: user.name, token }, { path: "/anytrip", maxAge: 3600 });
                        alert(`Welcome, ${user.name}!`);
                        navigate("/anytrip");
                    } else {
                        alert("User not found.");
                    }
                } else {
                    alert("Failed to fetch user details.");
                }
            } else {
                alert(loginResponse.data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error);
            alert(error.response?.data?.message || "An error occurred during login");
        } finally {
            setLoading(false);
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
                            name="email" 
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
                            name="password" 
                            type="password"
                            placeholder="******"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-[#131373] hover:bg-[#090920] text-white font-bold py-2 px-6 mt-2 rounded"
                            type="submit"
                            disabled={loading} 
                        >
                            {loading ? "Logging in..." : "Login"}
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
