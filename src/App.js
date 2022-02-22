//import components
import { useState, useRef } from "react";
import { Player, Song, Library, Nav } from "./components";

//import styles
import "./styles/app.scss";

//IMPORT util
import data from "./data";
function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libStatus, setLibStatus] = useState(false);
  
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  //handlers
  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const calPerc = (current * 100) / duration;
    console.log(calPerc);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: calPerc,
    });
  };

  const songEndHandler = async() => {
    let songIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(songIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libStatus ? 'library-active' : ''}`}>
      <Nav libStatus={libStatus} setLibStatus={setLibStatus} />
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        songs={songs}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        libStatus={libStatus}
        isPlaying={isPlaying}
        setSongs={setSongs}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
      <audio
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
