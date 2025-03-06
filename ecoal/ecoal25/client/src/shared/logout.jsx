import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export const Logout = () => {
    const navigate = useNavigate();
    const [cookies,setCookie, removeCookie] = useCookies(["accessToken"]);

    async function handleLogout() {
        try {
            if (!cookies.accessToken) {
                alert("You are already logged out.");
                return;
            }
           
            const response = await axios.get(
                "http://localhost:8000/api/logout",
                {
                    headers: {
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );

            removeCookie("accessToken");
            

            alert("Logout Successful!");
            navigate("/");

            return response;
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Error logging out. Please try again.");
        }
    }

    return (
        <button
            onClick={handleLogout}
            className="cursor-pointer"
        >
            Logout
        </button>
    );
};
