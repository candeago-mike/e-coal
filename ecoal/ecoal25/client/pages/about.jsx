import React from "react"
import { NavLink } from "react-router-dom"
import {Header} from "../src/shared/Header.jsx";

export const About = () => {
    return (
        <>
            <Header />
            {/* Top Section with Image */}
            <div className="relative w-full h-[500px]">
                <img
                    src="src/images/AboutUs.jpg"
                    alt="Team AnyTrip"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-2xl text-[#090920] font-bold">ABOUT US</h1>
                    {/*<h2 className="font-bold text-2xl md:text-3xl text-[#090920]">By Team AnyTrip</h2>*/}
                    <i><h2 className="font-bold text-4xl text-[#090920]">Team AnyTrip</h2></i>
                </div>
            </div>

            <div className="relative flex flex-col items-center bg-[#ffffff] min-h-screen p-6 text-[#090920]">
                {/* Background Section */}
                <div className="w-4/5 bg-[#F8E6D4] p-8 rounded-lg shadow-lg relative mt-10">
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

                    {/* Text Content */}
                    <div className="px-8">
                        <strong><p className="text-xl text-[#090920] mb-4">A Postcard From AnyTrip</p></strong>
                        <p className="text-justify text-[#090920] mb-4">
                            We are Carlos, Cheryl, Clea, Mike, Hanna, and Fabio – a group of travel enthusiasts from different corners of the world, united by our passion for discovering new places and sharing our experiences.
                        </p>
                        <p className="text-justify text-[#090920] mb-4">
                            As part of our Erasmus project, we created AnyTrip, a mobile app designed to make travel planning easier, faster, and more personal.
                        </p>
                        <p className="text-justify text-[#090920]">
                            Join us on AnyTrip and let’s make travel planning effortless and inspiring—one trip at a time!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
