import React from "react";
import postcard from "./../assets/postage-stamp.png";

export const Postcard = ({ trip, onClick }) => {
    return (
        <>
            <div
                className="relative w-full mb-2 mt-2 p-4 bg-[#FAF0E6] rounded-lg shadow-lg cursor-pointer flex justify-between items-center"
                onClick={onClick}
            >
                {/* Left Border */}
                <div className="absolute inset-y-0 left-0 w-[12px]"
                     style={{
                         background: "repeating-linear-gradient(to bottom, #851515 0px, #851515 30px, transparent 30px, transparent 40px, #131373 40px, #131373 70px, transparent 70px, transparent 80px)",
                         backgroundSize: "100% 80px"
                     }}
                ></div>

                {/* Right Border */}
                <div className="absolute inset-y-0 right-0 w-[12px]"
                     style={{
                         background: "repeating-linear-gradient(to bottom, #851515 0px, #851515 30px, transparent 30px, transparent 40px, #131373 40px, #131373 70px, transparent 70px, transparent 80px)",
                         backgroundSize: "100% 80px"
                     }}
                ></div>

                {/* Left side - Text content */}
                <div className="flex-1 pl-6">
                    <h2 className="text-lg font-bold text-[#131373]">{trip.title}</h2>
                    <p className="text-[#851515]">{trip.location}</p>
                    <p className="text-sm text-[#090920]">{trip.description}</p>
                </div>

                {/* Right side - Image */}
                <div className="flex-shrink-0 pl-2 mr-4">
                    <img
                        src={postcard}
                        alt="Postcard stamp"
                        className="w-16 h-16"
                    />
                </div>
            </div>

        </>
    );
};
