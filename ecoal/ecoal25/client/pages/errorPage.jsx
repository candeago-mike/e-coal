import {Header} from "../src/shared/Header.jsx";
import React from "react"


export const ErrorPage = () => {
    return (
        <>
            <Header />

            <div className="relative w-full h-[500px]">
                <img
                    src="src/images/Error.webp"
                    alt="Error"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <h1 className="text-2xl text-[#090920] font-bold">ERROR</h1>
                    <i><h2 className="font-bold text-4xl text-[#090920]">404</h2></i>
                    <p className="text-[#090920]">Oops you are in a wrong place</p>
                    <button
                        onClick={() => window.location.href = '/anytrip'}
                        className="mt-4 px-4 py-2 bg-[#090920] text-white rounded hover:bg-blue-700"
                    >
                        Go to Home Page
                    </button>
                </div>
            </div>
        </>
    )};