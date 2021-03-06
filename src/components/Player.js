import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";



const Player = ({songInfo, setSongInfo ,audioRef, currentSong,setCurrentSong, isPlaying, setIsPlaying ,songs, setSongs}) => {
  const activeLibHandler =(nextPrev)=> {
    const newSong = songs.map( (song)=>{
      if(song.id === nextPrev.id){
        return {
          ...song,
          active:true,
        }
      }else {
        return {
          ...song,
          active:false,
        }
      }
    } );
    setSongs(newSong);
  }
  const playSongHandler = () => {

    if (isPlaying) {
      audioRef.current.pause();

      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();

      setIsPlaying(!isPlaying);
    }
  };
  const getTime = (time)=> {
    return (
      Math.floor(time/60)+':'+('0'+Math.floor(time%60)).slice(-2)
    )
  }
  // state


  //handlers
  const dragHandler = (e)=> {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime:e.target.value})
  }
  const  skipTrackHandler = async(direction)=> {
      let songIndex = songs.findIndex((song)=> song.id === currentSong.id);
      //setCurrentSong(songs[songIndex]);
      if(direction ==='skip-forward'){
        await setCurrentSong(songs[(songIndex+1)%songs.length]);
        activeLibHandler(songs[(songIndex+1)%songs.length]);
      }
      if(direction ==='skip-back'){
        if(songIndex){
          await setCurrentSong(songs[songIndex-1]);
          activeLibHandler(songs[songIndex-1]);
          if(isPlaying) audioRef.current.play();
        }else{
          songIndex = songs.length;
          await setCurrentSong(songs[songIndex-1]);
          activeLibHandler(songs[songIndex-1]);
          if(isPlaying) audioRef.current.play();
        }
      }
    if(isPlaying) audioRef.current.play();
      
  }
  const styleTrack = {
    transform : `translateX(${songInfo.animationPercentage}%)`
    
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{
          background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`,
        }} className="track">
          <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range"></input>
          <div style={styleTrack} className="track-progress"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "00:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon onClick={()=> {skipTrackHandler('skip-back')}} className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
            onClick={playSongHandler}
            className="play"
            size="2x"
            icon={isPlaying ? faPause : faPlay}
          />
        <FontAwesomeIcon
          onClick={()=> {skipTrackHandler('skip-forward')}}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      
    </div>
  );
};
export default Player;
