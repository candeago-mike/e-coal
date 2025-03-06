import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../src/shared/Header";
export const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [content, setContent] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("location", location);
        formData.append("content", content);
        if (imageFile) {
            formData.append("image", imageFile);
        } else {
            formData.append("imageURL", imageURL);
        }

        console.log("Article Submitted", {
            title,
            location,
            imageURL,
            content,
        });
    };

    return (
        <>

            <Header/>
            {/* Top Section with Image */}
            <div className="relative w-full h-[400px]">
                <img
                    src="/src/images/AboutUs.jpg"
                    alt="Team AnyTrip"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-3xl text-[#090920] font-bold">
                        Add New Article
                    </h1>
                </div>
            </div>

            {/* Form Section */}
            <div className="relative flex flex-col items-center bg-[#ffffff] min-h-screen p-6 text-[#090920]">
                <div className="w-[90%] bg-[#FAF0E6] p-8 rounded-lg shadow-lg relative mt-10">
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

                    <div className="px-2">
                        <h2 className="text-2xl font-bold text-center mb-10 mt-2">
                            Share A Digital Postcard With The World!
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-8"
                        >
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="p-3 border rounded-lg w-full"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="p-3 border rounded-lg w-full"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Image URL (optional)"
                                value={imageURL}
                                onChange={(e) => setImageURL(e.target.value)}
                                className="p-3 border rounded-lg w-full"
                            />
                            <input
                                type="file"
                                onChange={(e) => setImageFile(e.target.files[0])}
                                className="p-3 border rounded-lg w-full"
                            />
                            <textarea
                                placeholder="Content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="p-3 border rounded-lg w-full h-40"
                                required
                            ></textarea>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-[#851515] text-white p-3 rounded-lg hover:bg-[#6a0f0f] w-full max-w-70"
                                >
                                    Submit Article
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
