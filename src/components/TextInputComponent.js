import React from 'react';
import '../styles/components/TextInputComponent.css';

function TextInputComponent({ setText, setTitle, setSubtitle, setDate, setFontColor }) {
    return (
        <div className="text-input-container">
            <textarea
                className="text-input"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text"
            />
            <input
                type="text"
                className="title-input"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                className="subtitle-input"
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Subtitle"
            />
            <input
                type="date"
                className="date-input"
                onChange={(e) => setDate(e.target.value)}
            />
            <div className="color-picker-container">
                <label htmlFor="font-color-picker" className="color-picker-label">Font Color:</label>
                <input
                    type="color"
                    id="font-color-picker"
                    className="color-input"
                    onChange={(e) => setFontColor(e.target.value)}
                />
            </div>
        </div>
    );
}

export default TextInputComponent;
