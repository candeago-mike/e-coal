import { NavLink } from "react-router";
import React from "react";
import {Logout} from "../src/shared/logout";
export const MainPage = () => {
    return (
        <div>
            <div id="mainPage" className="flex flex-row justify-between">
                <div className="flex flex-col items-center justify-between">
                    <h1>Welcome to AnyTrip ! </h1>
                </div>
                <Logout />
            </div>
            <div id="searchBar">
                <h1>Search bar</h1>
            </div>
            <div id="tripCard">
                <div className="flex flex-col">
                    <h1>Trip card title</h1>
                </div>

            </div>
            <div id="footer">
                <h1>Footer</h1>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
};
