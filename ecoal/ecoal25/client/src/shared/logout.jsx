import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

export const Logout = () => {
    const navigate = useNavigate(); 

    async function handleLogout() {
        try {
            const token = localStorage.getItem("auth_token"); 

            if (!token) {
                alert("You are already logged out.");
                return;
            }

            const response = await axios.post(
                "http://localhost:8000/api/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                }
            );

            if (response.status === 200) {
                localStorage.removeItem("auth_token"); 
                alert("Logout Successful!");
                navigate("/"); 
            }
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Error logging out. Please try again.");
        }
    }

    return (
        <button
            onClick={handleLogout}
            className="bg-[#851515] text-white px-4 py-2 rounded-lg border-2 border-[#131373] shadow-md hover:bg-[#090920] transition"
        >
            Logout
        </button>
    );
};
