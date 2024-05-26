import React, { useState, useRef, useEffect } from 'react';
import TextInputComponent from './components/TextInputComponent';
import BackgroundSelectionComponent from './components/BackgroundSelectionComponent';
import CanvasComponent from './components/CanvasComponent';
import DownloadButtonComponent from './components/DownloadButtonComponent';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [date, setDate] = useState('');
  const [background, setBackground] = useState('#FFFFFF'); // Default to white background
  const [fontColor, setFontColor] = useState('#000000'); // Default to black font color

  const canvasRef = useRef(null);


  return (
    <div className="app-container">
      <h1>Custom Text Background Generator</h1>
      <TextInputComponent
        setText={setText}
        setTitle={setTitle}
        setSubtitle={setSubtitle}
        setDate={setDate}
        setFontColor={setFontColor}
      />
      <BackgroundSelectionComponent selectBackground={setBackground} />
      <CanvasComponent
        text={text}
        title={title}
        subtitle={subtitle}
        date={date}
        background={background}
        fontColor={fontColor}
        ref={canvasRef}
      />
      <DownloadButtonComponent canvas={canvasRef} />
    </div>
  );
}

export default App;
