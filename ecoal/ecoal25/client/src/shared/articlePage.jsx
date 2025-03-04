import React from "react";
import { useLocation } from "react-router-dom";
import { GoBack } from "./back";
import { Logout } from "./logout";

export const ArticlePage = () => {
  const location = useLocation();
  const trip = location.state?.trip;

  if (!trip) {
    return <p className="text-center text-xl text-[#851515]">Loading...</p>;
  }

  return (
    <div className="bg-[#ffffff] min-h-screen p-4 text-[#131373] flex flex-col items-center">
      <header className="w-full flex justify-between items-center py-4 border-b border-[#851515]">
        <GoBack />
        <h1 className="text-xl font-bold">{trip.title}</h1>
        <Logout />
      </header>

      {trip.mediaURL && (
        <img
          src={trip.mediaURL}
          alt={trip.title}
          className="w-full max-w-2xl h-auto rounded-lg shadow-lg my-4"
        />
      )}

      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md border border-[#851515] text-justify">
        <div
          className="text-base text-[#333]"
          dangerouslySetInnerHTML={{ __html: trip.content }}
        />
        <p className="text-sm text-gray-600 mt-4">Published: {trip.created_at}</p>
        <p className="text-sm text-gray-600">Location: {trip.location}</p>
      </div>
    </div>
  );
};