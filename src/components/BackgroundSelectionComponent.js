import React from 'react';
import colors from '../colors';
import '../styles/components/BackgroundSelectionComponent.css';

function BackgroundSelectionComponent({ selectBackground }) {
    return (
        <div className="background-selection">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="color-option"
                    style={{ backgroundColor: color }}
                    onClick={() => selectBackground(color)}
                ></div>
            ))}
        </div>
    );
}

export default BackgroundSelectionComponent;
