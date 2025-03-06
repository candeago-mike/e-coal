import React from "react";
import postcard from "./../assets/postage-stamp.png";

export const Postcard = ({ trip, onClick }) => {
    return (
        <div
            className="w-full p-4 bg-white border-4 border-dashed border-red-600 rounded-lg shadow-lg cursor-pointer flex justify-between items-center"
            onClick={onClick}
        >
            {/* Left side - Text content */}
            <div className="flex-1">
                <h2 className="text-lg font-bold text-[#131373]">
                    {trip.title}
                </h2>
                <p className="text-[#851515]">{trip.location}</p>
                <p className="text-sm text-[#090920]">{trip.description}</p>
            </div>

            {/* Right side - Image */}
            <div className="flex-shrink-0 pl-2">
                <img
                    src={postcard}
                    alt="Postcard stamp"
                    className="w-16 h-16"
                />
            </div>
        </div>
    );
};
