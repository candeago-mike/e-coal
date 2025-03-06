import React from "react";

export const Postcard = ({ trip, onClick }) => {
    return (
        <>
        <div
            className="w-full p-4 bg-[#ffffff] border-4 border-dashed border-red-600 rounded-lg shadow-lg cursor-pointer"
            onClick={onClick}
        >
            <h2 className="text-lg font-bold text-[#131373]">{trip.title}</h2>
            <p className="text-[#851515]">{trip.location}</p>
            <p className="text-sm text-[#090920]">{trip.description}</p>
            <div className="mt-2">
            {trip.tags && trip.tags.map((tag, index) => (
    <span
        key={index}
        className="inline-block bg-[#e0e0e0] text-[#333] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
    >
        {typeof tag === 'string' ? tag : tag.name} 
        {/* Si `tag` est un objet, on affiche `tag.name` */}
    </span>
))}

            </div>
        </div>
        </>
    );
};
