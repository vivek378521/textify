import React, { useLayoutEffect, useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { fabric } from 'fabric';
import '../styles/components/CanvasComponent.css';

import DownloadButtonComponent from './DownloadButtonComponent';

const CanvasComponent = forwardRef(({ text, title, subtitle, date, background, fontColor }, ref) => {
    const canvasRef = useRef(null);
    const [canvasLoaded, setCanvasLoaded] = useState(false);

    let canvas;

    useLayoutEffect(() => {
        canvas = new fabric.Canvas(canvasRef.current);

        canvas.setBackgroundColor(background, canvas.renderAll.bind(canvas));

        const titleText = new fabric.Text(title, { top: 50, left: 50, fontSize: 30, fill: fontColor });
        const subtitleText = new fabric.Text(subtitle, { top: titleText.top + titleText.height + 10, left: 50, fontSize: 20, fill: fontColor });
        const mainText = new fabric.Text(text, { top: subtitleText.top + subtitleText.height + 10, left: 50, fontSize: 16, fill: fontColor });
        const dateText = new fabric.Text(date, { top: mainText.top + mainText.height + 10, left: 50, fontSize: 14, fill: fontColor });

        canvas.add(titleText, subtitleText, mainText, dateText);

        setCanvasLoaded(true);

        return () => {
            canvas.dispose();
        };
    }, [text, title, subtitle, date, background, fontColor]);

    useImperativeHandle(ref, () => ({
        getCanvas: () => canvas
    }));

    useEffect(() => {
        console.log("Canvas loaded:", canvasLoaded); // Log canvas loaded status
    }, [canvasLoaded]);

    return (
        <React.Fragment>
            <div>
                <canvas ref={canvasRef} width="800" height="600" style={{ display: canvasLoaded ? 'block' : 'none' }}></canvas>
            </div>
            <DownloadButtonComponent canvasRef={canvasRef} />
        </React.Fragment>
    );
});

export default CanvasComponent;