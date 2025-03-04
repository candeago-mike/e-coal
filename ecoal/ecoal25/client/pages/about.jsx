import { Logout } from "../src/shared/logout";
import { GoBack } from "../src/shared/back";
import React from "react";

export const About = () => {
    return (
        <div className="flex flex-col items-center bg-[#ffffff] min-h-screen p-6 text-[#090920]">
            <div className="w-full flex justify-between mb-4">
                <GoBack />
                <Logout />
            </div>
            
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-[#851515]">Team AnyTrip</h1>
            </div>

            <div className="w-4/5 bg-[#f5f5f5] p-6 rounded-lg shadow-lg">
                <p className="text-justify text-[#090920] mb-4">
                    <strong>About us:</strong> We are André, Cheryl, Clea, Mickey, Hanna, and Fabio – a group of travel enthusiasts from different corners of the world, united by our passion for discovering new places and sharing our experiences. 
                </p>
                <p className="text-justify text-[#090920] mb-4">
                    As part of our Erasmus project, we created AnyTrip, a mobile app designed to make travel planning easier, faster, and more personal. We believe that the best travel tips come from real experiences. That’s why AnyTrip allows users to share their short travel entries, recommending places to visit, where to stay, and what to eat based on their own adventures.
                </p>
                <p className="text-justify text-[#090920] mb-4">
                    Whether you’re looking for a hidden gem in a bustling city or the best street food spot in a remote village, our app helps you find genuine recommendations from fellow travelers.
                </p>
                <p className="text-justify text-[#090920]">
                    Our goal is to create a community-driven travel guide that saves time and provides honest insights, making it easier for everyone to explore the world with confidence. Join us on AnyTrip and let’s make travel planning effortless and inspiring—one trip at a time!
                </p>
            </div>
        </div>
    );
};