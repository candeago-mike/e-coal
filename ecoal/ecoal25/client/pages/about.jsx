import { Logout } from "../src/shared/logout";
import React from "react";
import { NavLink } from "react-router-dom";
export const About = () => {
    return (
        <div className="flex flex-col items-center gap-5 bg-orange-200">
            <div>
                <NavLink to="/anytrip">
                    <p>Go back</p>
                </NavLink>
            </div>
            <div>
                <h1>Team Any Trip</h1>
            </div>
            <div>Insert an Image of Us</div>
            <div className="w-4/5 text-justify bg--primary">
                <p>
                    About us: We are André, Cheryl, Clea, Mickey, Hanna, and
                    Fabio – a group of travel enthusiasts from different corners
                    of the world, united by our passion for discovering new
                    places and sharing our experiences. As part of our Erasmus
                    project, we created AnyTrip, a mobile app designed to make
                    travel planning easier, faster, and more personal. We
                    believe that the best travel tips come from real
                    experiences. That’s why AnyTrip allows users to share their
                    short travel entries, recommending places to visit, where to
                    stay, and what to eat based on their own adventures. Whether
                    you’re looking for a hidden gem in a bustling city or the
                    best street food spot in a remote village, our app helps you
                    find genuine recommendations from fellow travelers. Our goal
                    is to create a community-driven travel guide that saves time
                    and provides honest insights, making it easier for everyone
                    to explore the world with confidence. Join us on AnyTrip and
                    let’s make travel planning effortless and
                    inspiring—one trip at a time!
                </p>
            </div>
            <Logout />
        </div>
    );
};
