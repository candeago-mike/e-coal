import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <header className="w-full flex justify-between bg-[#851515] items-center py-4 text-[#E8D1C1] px-6">
                <NavLink
                    to="/anytrip"
                    className="text-[#E8D1C1] font-semibold hover:text-[#ffffff]"
                >
                    <h1 className="text-xl font-bold">AnyTrip</h1>
                </NavLink>
                <nav className="flex gap-6">
                    <NavLink
                        to="/anytrip"
                        className="text-[#E8D1C1] font-semibold hover:text-[#ffffff]"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="text-[#E8D1C1] hover:text-[#ffffff] font-semibold"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/"
                        className="text-[#E8D1C1] hover:text-[#ffffff] font-semibold"
                    >
                        Logout
                    </NavLink>
                </nav>
            </header>

            {/* Top Section with Image */}
            <div className="relative w-full h-[400px]">
                <img
                    src="/src/images/AboutUs.jpg"
                    alt="Team AnyTrip"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-3xl text-white font-bold">
                        Add New Article
                    </h1>
                </div>
            </div>

            {/* Form Section */}
            <div className="relative flex flex-col items-center bg-[#ffffff] min-h-screen p-6 text-[#090920]">
                <div className="w-4/5 bg-[#F8E6D4] p-8 rounded-lg shadow-lg relative">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Create a New Post
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
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
                        <button
                            type="submit"
                            className="bg-[#851515] text-white p-3 rounded-lg hover:bg-[#6a0f0f]"
                        >
                            Submit Article
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
