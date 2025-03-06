import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "./login";

export const Register = () => {
    const navigate = useNavigate();
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });
    const [loading, setLoading] = useState(false);

    const showAlert = (message, type) => {
        setAlert({ show: true, message, type });
        if (type === "success") {
            setTimeout(() => {
                setAlert({ show: false, message: "", type: "" });
                navigate("/");
            }, 2000);
        }
    };

    const closeAlert = () => {
        setAlert({ show: false, message: "", type: "" });
    };

    async function handleRegister(event) {
        event.preventDefault();
        setLoading(true);
        closeAlert();

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");

        if (password !== confirmPassword) {
            showAlert("Passwords do not match", "error");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/register",
                { name, email, password },
                { headers: { "Content-Type": "application/json", Accept: "application/json" } }
            );

            if (response.status === 200) {
                showAlert("Registration successful. Redirecting...", "success");
            } else {
                showAlert(response.data.error || "Registration failed.", "error");
            }
        } catch (error) {
            console.error("Server response:", error);
            showAlert(
                error.response?.data?.message || "An error occurred during registration.",
                "error"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#E8D1C1]">
            <div className="w-full max-w-xs">
                {alert.show && <Alert message={alert.message} type={alert.type} onClose={closeAlert} />}
                <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <img src="/src/images/LogoBlack.png" alt="AnyTrip" className="mb-8 mt-4" />
                    <div className="mb-4">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow border border-[#C7AE96] rounded w-full py-2 px-3" id="name" name="name" type="text" placeholder="Full Name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow border border-[#C7AE96] rounded w-full py-2 px-3" id="email" name="email" type="email" placeholder="Email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow border border-[#C7AE96] rounded w-full py-2 px-3" id="password" name="password" type="password" placeholder="******" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input className="shadow border border-[#C7AE96] rounded w-full py-2 px-3" id="confirm-password" name="confirm-password" type="password" placeholder="******" required />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#131373] hover:bg-[#090920] p-3 rounded-lg text-white font-bold py-2 px-6 w-full" type="submit" disabled={loading}>
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </div>
                </form>
                <p className="text-center text-[#090920] text-sm mt-4">
                    Already have an account? <NavLink to="/" className="text-[#851515] font-bold hover:underline">Login</NavLink>
                </p>
                <p className="text-center text-[#090920] text-xs mt-4">&copy;2025 AnyTrip Corp. All rights reserved.</p>
            </div>
        </div>
    );
};
