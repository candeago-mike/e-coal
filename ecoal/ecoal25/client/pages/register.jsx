import React from "react"
import { NavLink } from "react-router"

export const Register = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#E8D1C1]">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold text-center text-[#090920] mt-2 mb-4">Register</h2> {/* Dark Blue Title */}

                    <div className="mb-4">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="name" type="text" placeholder="Full Name"/> {/* Beige border, Dark Blue text */}
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="email" type="email" placeholder="Email"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="password" type="password" placeholder="******"/>
                    </div>

                    <div className="mb-6">
                        <label className="block text-[#090920] text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border border-[#C7AE96] rounded w-full py-2 px-3 text-[#090920] leading-tight focus:outline-none focus:ring-1 focus:ring-[#851515]"
                            id="confirm-password" type="password" placeholder="******"/>
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-[#131373] hover:bg-[#090920] text-white font-bold py-2 px-6 mt-2 rounded"
                            type="button">
                            Register
                        </button> {/* Blue button, Dark Blue hover */}
                    </div>
                </form>

                <p className="text-center text-[#090920] text-sm mt-4">
                    Already have an account? <NavLink to="/" className="text-[#851515] font-bold hover:underline">Login</NavLink>
                </p> {/* Red Login Link */}

                <p className="text-center text-[#090920] text-xs mt-4">
                    &copy;2025 AnyTrip Corp. All rights reserved.
                </p> {/* Dark Blue Footer */}
            </div>
        </div>
    )
}
