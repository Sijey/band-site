import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  return (
    <ReactAudioPlayer
      src='https://github.com/Sijey/band-site/tree/master/public/audio/in_my_eyes.mp3'
      autoPlay
      controls
    />
  );
}

export default App;
