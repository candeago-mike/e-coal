import React from "react";

export const Postcard = ({ trip, onClick }) => {
    return (
        <div
            className="w-full p-4 bg-[#ffffff] border-4 border-dashed border-red-600 rounded-lg shadow-lg cursor-pointer"
            onClick={onClick}
        >
            <h2 className="text-lg font-bold text-[#131373]">{trip.title}</h2>
            <p className="text-[#851515]">{trip.location}</p>
            <p className="text-sm text-[#090920]">{trip.description}</p>
        </div>
    );
};
