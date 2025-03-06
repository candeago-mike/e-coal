    import React, { useState } from "react";
    import { NavLink, useNavigate } from "react-router-dom";
    import axios from "axios";
    import { useCookies } from "react-cookie";

    export const Alert = ({ message, type, onClose }) => {
    const bgColor = type === "success" ? "bg-green-100 border-green-500 text-green-700" : 
                    type === "error" ? "bg-red-100 border-red-500 text-red-700" : 
                    "bg-blue-100 border-blue-500 text-blue-700";
    
    return (
        <div className={`${bgColor} px-4 py-3 rounded relative border-l-4 mb-4`} role="alert">
        <span className="block sm:inline">{message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
            <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
        </span>
        </div>
    );
    };

    export const Login = () => {
        const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);
        const [formErrors, setFormErrors] = useState({});
        const [alert, setAlert] = useState({ show: false, message: "", type: "" });

        const showAlert = (message, type) => {
            setAlert({ show: true, message, type });
            
            if (type === "success") {
                setTimeout(() => {
                    setAlert({ show: false, message: "", type: "" });
                }, 3000);
            }
        };

        const closeAlert = () => {
            setAlert({ show: false, message: "", type: "" });
        };

        async function handleLogin(event) {
            event.preventDefault();
            setLoading(true);
            setFormErrors({});
            closeAlert();

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
                    const token = loginResponse.data.access_token;
                    
                    try {
                        const usersResponse = await axios.get("http://localhost:8000/api/users", {
                            headers: { Authorization: `Bearer ${token}` },
                        });

                        if (usersResponse.status === 200) {
                            const users = usersResponse.data;
                            const user = users.find(user => user.email === email);
                            
                            if (user) {
                                setCookie("accessToken", token, { path: "/", maxAge: 3600 });
                                
                                showAlert(`Welcome back, ${user.name}!`, "success");
                                
                                // Short delay to allow the alert to be seen
                                setTimeout(() => {
                                    navigate("/");
                                }, 1500);
                            } else {
                                showAlert("User not found in system. Please contact support.", "error");
                            }
                        } else {
                            showAlert("Failed to fetch user details. Please try again later.", "error");
                        }
                    } catch (userError) {
                        console.error("User fetch error:", userError);
                        showAlert("Error retrieving user profile. Please try again later.", "error");
                    }
                } else {
                    showAlert(loginResponse.data.message || "Login failed. Please check your credentials.", "error");
                }
            } catch (error) {
                console.error("Login error:", error);
                
                if (error.response?.status === 401) {
                    showAlert("Invalid email or password. Please try again.", "error");
                    setFormErrors({ password: "Invalid credentials" });
                } else if (error.response?.status === 429) {
                    showAlert("Too many login attempts. Please try again later.", "error");
                } else if (error.message === "Network Error") {
                    showAlert("Network error. Please check your connection and try again.", "error");
                } else {
                    showAlert(error.response?.data?.message || "An unexpected error occurred. Please try again later.", "error");
                }
            } finally {
                setLoading(false);
            }
        }

        return (
            <div className="h-screen w-screen flex items-center justify-center bg-[#E8D1C1]">
                <div className="w-full max-w-xs">
                    {alert.show && (
                        <Alert 
                            message={alert.message} 
                            type={alert.type} 
                            onClose={closeAlert} 
                        />
                    )}
                    
                    <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <img
                            src="/src/images/LogoBlack.png"
                            alt="AnyTrip" className="mb-8 mt-4"
                        />
                        <div className="mb-4">
                            <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className={`shadow appearance-none border ${formErrors.email ? 'border-red-500' : 'border-[#C7AE96]'} rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]`}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                            {formErrors.email && <p className="text-red-500 text-xs italic mt-1">{formErrors.email}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className={`shadow appearance-none border ${formErrors.password ? 'border-red-500' : 'border-[#C7AE96]'} rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]`}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="******"
                                required
                            />
                            {formErrors.password && <p className="text-red-500 text-xs italic mt-1">{formErrors.password}</p>}
                        </div>

                        <div className="flex justify-center">
                            <button
                                className="bg-[#131373] hover:bg-[#090920] p-3 rounded-lg text-white font-bold py-2 px-6 mt-2 w-full mb-4 flex items-center justify-center"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Logging in...
                                    </>
                                ) : "Login"}
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