import React from "react";
import { NavLink } from "react-router-dom";
export const GoBack = () => {
  return (
      <div>
          <NavLink to="/">
              <button className="bg-[#131373] text-white px-4 py-2 rounded-lg border-2 border-[#851515] shadow-md hover:bg-[#090920] transition">
                  Go Back
              </button>
          </NavLink>
      </div>
  );
};