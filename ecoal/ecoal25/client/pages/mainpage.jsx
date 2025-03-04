import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Postcard } from "../src/shared/postcard";
import axios from "axios";


export const MainPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
 

  const fetchTrips = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/articles");
      setTrips(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  }, []);
  
  useEffect(() => {
    fetchTrips();
  }, []);

  const filteredTrips = trips.filter(trip =>
    trip.title.toLowerCase().includes(search.toLowerCase()) ||
    trip.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#ffffff] min-h-screen p-4 text-[#131373] flex flex-col items-center">
      <header className="w-full flex justify-between items-center py-4 border-b border-[#851515]">
        <h1 className="text-xl font-bold">Welcome to AnyTrip!</h1>
        <NavLink to="/" className="text-[#851515] font-semibold">Logout</NavLink>
      </header>
      
      <div className="w-full my-4">
        <input 
          type="text" 
          placeholder="Search trips..."
          className="w-full p-2 border border-[#851515] rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      <div className="w-full flex flex-col gap-4">
        {filteredTrips.map((trip) => (
          <Postcard key={trip.id} trip={trip} onClick={() => navigate(`/article/${trip.id}`, { state: { trip } })} />
        ))}
      </div>
      <footer className="w-full mt-6 py-4 border-t border-[#851515] text-center">
        <NavLink to="/about" className="text-[#851515] font-semibold">About</NavLink>
      </footer>
    </div>
  );
};
