import React from 'react';
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  return (
    <AudioPlayer
      src='in_my_eyes.mp3'
      autoPlay
      controls
    />
  );
}

export default App;
