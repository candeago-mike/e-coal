import React from "react";
import { useLocation } from "react-router-dom";
import { GoBack } from "./back";
import { Header } from "./Header.jsx";
import {Footer} from "./Footer.jsx";

export const ArticlePage = () => {
    const location = useLocation();
    const trip = location.state?.trip;

    if (!trip) {
        return <p className="text-center text-xl text-[#851515]">Loading...</p>;
    }

    return (
        <>
            <Header />
            {/* Top Section with Image */}
            <div className="relative w-full h-[500px]">
                {trip.mediaURL && (
                    <img
                        src={trip.mediaURL}
                        alt={trip.title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            {/* Rounded Container Spanning Full Width */}
            <div className="relative w-full bg-white p-10 rounded-t-3xl shadow-2xl shadow-gray-500/50 -top-16">
                <h1 className="text-3xl text-[#131373] font-bold text-center">{trip.title}</h1>
                <h2 className="font-bold text-2xl text-[#851515] text-center italic">By Team AnyTrip</h2>

                {/* Content Section with Border on the Left */}
                <div className="flex mx-auto w-[90%] mt-6">
                    {/* Left Border */}
                    <div className="w-[10px] mr-6"
                         style={{
                             background: "repeating-linear-gradient(to bottom, #851515 0px, #851515 30px, transparent 30px, transparent 40px, #131373 40px, #131373 70px, transparent 70px, transparent 80px)",
                             backgroundSize: "100% 80px"
                         }}
                    ></div>

                    {/* Text Content */}
                    <div className="text-base text-justify text-[#333] flex-1"
                         dangerouslySetInnerHTML={{ __html: trip.content }} />
                </div>

                <p className="text-sm text-gray-600 mt-4 text-center">Published: {trip.created_at}</p>
                <p className="text-sm text-gray-600 text-center">Location: {trip.location}</p>
                <div className="mb-20"></div>
            </div>
            <Footer />
        </>
    );
};
