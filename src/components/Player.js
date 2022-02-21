import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { audioPlay } from "../utils";

const Player = ({songInfo, setSongInfo ,audioRef, currentSong,setCurrentSong, isPlaying, setIsPlaying ,songs, setSongs}) => {
  useEffect(()=>{
    console.info(isPlaying);
    const newSong = songs.map( (song)=>{
      if(song.id === currentSong.id){
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
  },[currentSong])
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
        setCurrentSong(songs[(songIndex+1)%songs.length]);
      }
      if(direction ==='skip-back'){
        if(songIndex){
          setCurrentSong(songs[songIndex-1]);
        }else{
          songIndex = songs.length;
          setCurrentSong(songs[songIndex-1]);
        }
      }
      audioPlay(isPlaying,audioRef);
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range"></input>
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
