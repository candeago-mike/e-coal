import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Alert } from "./../../pages/login"; // Ensure correct path

export const Logout = () => {
    const navigate = useNavigate();
    const [cookies, , removeCookie] = useCookies(["accessToken"]);
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });

    const showAlert = (message, type) => {
        setAlert({ show: true, message, type });

        if (type === "success") {
            setTimeout(() => {
                setAlert({ show: false, message: "", type: "" });
                navigate("/anytrip"); 
            }, 5000);
        }
    };

    const closeAlert = () => {
        setAlert({ show: false, message: "", type: "" });
    };

    async function handleLogout() {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/logout",
                {
                    headers: {
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );

            removeCookie("accessToken");
            showAlert("Logout Successful!", "success");
            
        } catch (error) {
            console.error("Logout failed:", error);
            showAlert("Error logging out. Please try again.", "error");
        }
    }

    return (
        <>
            {alert.show && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[400px] p-4 z-50">
                    <Alert
                        message={alert.message}
                        type={alert.type}
                        onClose={closeAlert}
                    />
                </div>
            )}
            <button 
                onClick={handleLogout} 
                className="cursor-pointer"
            >
                Logout
            </button>
        </>
    );
};
