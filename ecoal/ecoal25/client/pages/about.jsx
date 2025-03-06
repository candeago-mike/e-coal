import React from "react"
import { NavLink } from "react-router-dom"
import {Header} from "../src/shared/Header.jsx";
import {Footer} from "../src/shared/Footer.jsx";

export const About = () => {
    return (
        <>
            <Header />
            {/* Top Section with Image */}
            <div className="relative w-full h-[500px]">
                <img
                    src="src/images/AboutUs.jpg"
                    alt="Team AnyTrip"
                    className="w-full h-full object-cover opacity-65"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-2xl text-[#090920] font-bold">ABOUT US</h1>
                    {/*<h2 className="font-bold text-2xl md:text-3xl text-[#090920]">By Team AnyTrip</h2>*/}
                    <i><h2 className="font-bold text-4xl text-[#090920]">Team AnyTrip</h2></i>
                </div>
            </div>

            <div className="relative flex flex-col items-center bg-[#ffffff] min-h-screen p-6 text-[#090920]">
                {/* Background Section */}
                <div className="w-4/5 bg-[#FAF0E6] p-8 rounded-lg shadow-lg relative mt-10">
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
                    <div className="px-2">
                        <strong><p className="text-xl text-[#131373] mb-4">A Postcard From AnyTrip</p></strong>
                        <p className="text-justify text-[#090920] mb-4">
                            We are Carlos, Cheryl, Clea, Mike, Hanna, and Fabio – a group of travel enthusiasts from different corners of the world, united by our passion for discovering new places and sharing our experiences.
                        </p>
                        <p className="text-justify text-[#090920] mb-4">
                            As part of our Erasmus project, we created AnyTrip, a mobile app designed to make travel planning easier, faster, and more personal.
                        </p>
                        <p className="text-justify text-[#090920] mb-10">
                            Join us on AnyTrip and let’s make travel planning effortless and inspiring—one trip at a time!
                        </p>
                        <div className="flex flex-col items-center">
                        <img
                            src="src/images/GroupPic.jpeg"
                            alt="Team AnyTrip"
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <NavLink to={"/anytrip"}>
                            <button className="bg-[#851515] mt-10 text-white p-3 rounded-lg hover:bg-[#6a0f0f] w-full max-w-70 mb-2">
                                Try it - it's free.
                            </button>
                        </NavLink>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
