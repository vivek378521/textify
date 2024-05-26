import React from 'react';
import { saveAs } from 'file-saver';
import '../styles/components/DownloadButtonComponent.css';

function DownloadButtonComponent({ canvasRef }) {
    const downloadImage = (format) => {
        const canvas = canvasRef.current;

        // Ensure canvasRef.current is not null before accessing its properties
        if (canvas) {
            canvas.toBlob((blob) => {
                saveAs(blob, `download.${format}`);
            });
        } else {
            console.error('Canvas reference is null');
        }
    };

    return (
        <div className="download-buttons">
            <button onClick={() => downloadImage('png')}>Download PNG</button>
            <button onClick={() => downloadImage('jpeg')}>Download JPEG</button>
        </div>
    );
}

export default DownloadButtonComponent;
