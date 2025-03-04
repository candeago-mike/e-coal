import { NavLink } from "react-router"
import React from "react"

export const Login = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold text-center text-[#090920] mb-4 mt-2">Login</h2> {/* Dark Blue Title */}

                    <div className="mb-4">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="email" type="text" placeholder="Email"/> {/* Dark blue text, Beige border */}
                    </div>

                    <div className="mb-6">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="password" type="password" placeholder="******"/>
                        {/*<p className="text-[#851515] text-xs italic">Please enter a password.</p> /!* Red Error Message *!/*/}
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-[#131373] hover:bg-[#090920] text-white font-bold py-2 px-6 rounded"
                            type="button">
                            Login
                        </button> {/* Blue button, Dark Blue hover, Red focus */}
                    </div>
                </form>

                <p className="text-center text-[#090920] text-sm mt-4">
                    Don't have an account? <NavLink to="/register" className="text-[#851515] font-bold hover:underline">Register</NavLink>
                </p> {/* Red Register Link */}

                <p className="text-center text-[#090920] text-xs mt-4">
                    &copy;2025 AnyTrip Corp. All rights reserved.
                </p> {/* Dark Blue Footer */}
            </div>
        </div>
    )
}
