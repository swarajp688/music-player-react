//import components
import { useState, useRef } from "react";
import { Player , Song , Library} from "./components"

//import styles
import "./styles/app.scss"

//IMPORT util
import data from './util';
function App() {
  const audioRef = useRef(null);
  const [songs,setSongs]=useState(data());
  const [currentSong , setCurrentSong] = useState(songs[0]);
  const [isPlaying , setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo , currentTime:current , duration
    })
  };


  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player audioRef={audioRef} setSongInfo={setSongInfo} songInfo={songInfo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Library isPlaying={isPlaying} audioRef={audioRef} setIsPlaying={setIsPlaying} setCurrentSong={setCurrentSong} songs={songs}/>
      <audio
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
        
      ></audio>
    </div>
  );
}

export default App;
