//import components
import { useState } from "react";
import {Player , Song} from "./components"
//import styles
import "./styles/app.scss"

//IMPORT util
import data from './util';
function App() {
  const [songs,setSongs]=useState(data());
  const [currentSong , setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player />
    </div>
  );
}

export default App;
