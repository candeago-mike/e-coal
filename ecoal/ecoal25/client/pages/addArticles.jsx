import React, { useState } from 'react';

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
