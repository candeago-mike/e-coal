import React, { useState } from 'react';
import { NavLink } from "react-router-dom"

export const AddArticle = () => {
    const [formData, setFormData] = useState({
        title: '',
        thumbnailURL: '',
        content: '',
        mediaType: 'video',
        mediaURL: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div>
                        <header className="w-full flex justify-between bg-[#851515] items-center py-4 text-[#E8D1C1] px-6">
                <NavLink to="/anytrip" className="text-[#E8D1C1] font-semibold hover:text-[#ffffff]">
                    <h1 className="text-xl font-bold">AnyTrip</h1>
                </NavLink>
                <nav className="flex gap-6">
                    <NavLink to="/anytrip" className="text-[#E8D1C1] font-semibold hover:text-[#ffffff]">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="text-[#E8D1C1] hover:text-[#ffffff] font-semibold">
                        About Us
                    </NavLink>
                    <NavLink to="/" className="text-[#E8D1C1] hover:text-[#ffffff] font-semibold">
                        Logout
                    </NavLink>
                </nav>
            </header>
            <h1>Add Article</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Thumbnail URL:</label>
                    <input
                        type="text"
                        name="thumbnailURL"
                        value={formData.thumbnailURL}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Media Type:</label>
                    <select
                        name="mediaType"
                        value={formData.mediaType}
                        onChange={handleChange}
                        required
                    >
                        <option value="video">Video</option>
                        <option value="image">Image</option>
                        <option value="audio">Audio</option>
                    </select>
                </div>
                <div>
                    <label>Media URL:</label>
                    <input
                        type="text"
                        name="mediaURL"
                        value={formData.mediaURL}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Article</button>
            </form>
        </div>
    );
};
