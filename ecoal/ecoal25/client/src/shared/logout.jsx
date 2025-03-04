import { NavLink } from "react-router";
import React from "react";

export const Logout = () => {
  return (
      <div>
          <NavLink to="/">
              <button className="bg-[#851515] text-white px-4 py-2 rounded-lg border-2 border-[#131373] shadow-md hover:bg-[#090920] transition">
                  Logout
              </button>
          </NavLink>
      </div>
  );
};