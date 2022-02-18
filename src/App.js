//import components
import { useState } from "react";
import { Player , Song , Library} from "./components"

//import styles
import "./styles/app.scss"

//IMPORT util
import data from './util';
function App() {
  const [songs,setSongs]=useState(data());
  const [currentSong , setCurrentSong] = useState(songs[0]);
  const [isPlaying , setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Library songs={songs}/>
    </div>
  );
}

export default App;
