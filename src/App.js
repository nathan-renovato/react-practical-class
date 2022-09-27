import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import PlayList from './components/PlayList';

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="container">
      <Header />
      <PlayList
        setCurrentSong={setCurrentSong}
      />
      <MusicPlayer
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
