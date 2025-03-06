import { NavLink } from "react-router-dom"
import React from "react";

export const Header = () => {
    return (
        <header className="w-full flex justify-between bg-[#090920] items-center py-4 text-[#E8D1C1] px-6">
            <NavLink to="/anytrip" className="text-[#E8D1C1] font-semibold hover:text-[#ffffff]">
               <img
                   src="/src/images/Logo.png"
                   alt="AnyTrip" className="w-35"
               />
            </NavLink>
            <nav className="flex gap-6">
                <NavLink to="/anytrip" className="text-[#E8D1C1] font-semibold hover:text-[#ffffff]">
                    Home
                </NavLink>
                <NavLink to="/about" className="text-[#E8D1C1] hover:text-[#ffffff] font-semibold">
                    About
                </NavLink>
                <NavLink to="/" className="text-[#E8D1C1] hover:text-[#ffffff] font-semibold">
                    Logout
                </NavLink>
            </nav>
        </header>
    )
}
