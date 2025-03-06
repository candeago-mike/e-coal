import React from "react";
import { NavLink } from "react-router-dom"; // Fix incorrect import
import axios from "axios";
export const Register = () => {
    async function handleRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/register",
                { name: name, email: email, password: password },
                { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
            );

            if (response.status == 200 ) {
                alert("Registration successful");
                window.location.href = "/";
            } else {
                const errorData = await response.json();
                alert(errorData.error);
            }
        } catch (error) {
            
            console.error("Server response:", error);

            alert("An error occurred during registration");
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#E8D1C1]">
            <div className="w-full max-w-xs">
                <form
                    onSubmit={handleRegister}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <img
                        src="/src/images/LogoBlack.png"
                        alt="AnyTrip" className="mb-8 mt-4"
                    />
                    <div className="mb-4">
                        <label
                            className="block text-[#090920] text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Full Name"

                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-[#090920] text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"

                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-[#090920] text-sm font-bold mb-2"
                            htmlFor="password"
                        >
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

                    <div className="mb-6">
                        <label
                            className="block text-[#090920] text-sm font-bold mb-2"
                            htmlFor="confirm-password"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            placeholder="******"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-[#131373] hover:bg-[#090920] p-3 rounded-lg text-white font-bold py-2 px-6 mt-2 w-full mb-4"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <p className="text-center text-[#090920] text-sm mt-4">
                    Already have an account?{" "}
                    <NavLink
                        to="/"
                        className="text-[#851515] font-bold hover:underline"
                    >
                        Login
                    </NavLink>
                </p>

                <p className="text-center text-[#090920] text-xs mt-4">
                    &copy;2025 AnyTrip Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};
