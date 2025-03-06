import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Header } from "../src/shared/Header";
import { Footer } from "../src/shared/Footer";
import { Postcard } from "../src/shared/postcard";
import axios from "axios";
import { getAccessToken, isAuthenticated } from "../src/main";

export const MainPage = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [trips, setTrips] = useState([]);
    const [tripText, setTripText] = useState("Any");
    const [isVisible, setIsVisible] = useState(true); // Controls fade effect

    // const [username, setUsername] = useState("");

    // async function getUsername() {
    //     try {
    //         const user = await axios.get("http://localhost:8000/api/users");
    //         if (user.status === 200) {
    //             const users = user.data;
    //             const user = users.find((user) => user.email === email);

    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // Toggle text with fade-out and fade-in effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Start fade-out
            setTimeout(() => {
                setTripText((prevText) =>
                    prevText === "Any"
                        ? "Every"
                        : "Any"
                );
                setIsVisible(true); // Start fade-in
            }, 500); // Wait for fade-out before changing text
        }, 2000); // Runs every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const fetchTrips = useCallback(async () => {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/articles"
            );
            setTrips(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching trips:", error);
        }
    }, []);

    useEffect(() => {
        fetchTrips();
    }, [fetchTrips]);

    const filteredTrips = trips.filter(
        (trip) =>
            trip.title.toLowerCase().includes(search.toLowerCase()) ||
            (trip.tags &&
                Array.isArray(trip.tags) &&
                trip.tags.some((tag) =>
                    typeof tag === "string"
                        ? tag.toLowerCase().includes(search.toLowerCase())
                        : tag.name.toLowerCase().includes(search.toLowerCase())
                )) ||
            (trip.location &&
                trip.location.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <>
            <Header />
            {/* Top Section with Image */}
            <div className="relative w-full h-[500px]">
                <img
                    src="src/images/MainPage.jpg"
                    alt="Team AnyTrip"
                    className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-2xl text-[#090920] font-bold">
                        From AnyTrip
                    </h1>
                    <div className="flex font-bold text-4xl">
                        <div>
                            <h2>To&nbsp;</h2>
                        </div>
                        <div>
                            <h2
                                className={`text-[#851515] transition-opacity duration-500 ${
                                    isVisible ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                {tripText}
                            </h2>
                        </div>
                        <div>
                            <h2>&nbsp;Trip.</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rounded Container Spanning Full Width */}
            <div className="relative w-full bg-white p-2 rounded-t-3xl shadow-2xl shadow-gray-500/50 -top-16">
                <div className="bg-[#ffffff] min-h-screen p-4 text-[#131373] flex flex-col items-center">
                    <header className="w-full flex justify-between items-center py-4 border-b border-[#851515]">
                        <h1 className="text-xl font-bold">
                            Welcome to AnyTrip!
                        </h1>
                        {getAccessToken() ? (
                            <NavLink to={"/addarticle"} className="text-[#851515]"><b>Add Article</b></NavLink>
                        ) : (
                            null
                        )}
                    </header>

                    <div className="w-full my-4">
                        <input
                            type="text"
                            placeholder="Search trips by title or tags..."
                            className="w-full p-2 border border-[#851515] rounded-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        {filteredTrips.map((trip) => (
                            <Postcard
                                key={trip.id}
                                trip={trip}
                                onClick={() =>
                                    navigate(`/article/${trip.id}`, {
                                        state: { trip },
                                    })
                                }
                            />
                        ))}
                    </div>
                    <div className="mb-20"></div>
                </div>
            </div>
            <Footer />
        </>
    );
};
