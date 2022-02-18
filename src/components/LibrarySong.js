import React from 'react'

const LibrarySong = ({song ,setCurrentSong  , audioRef , isPlaying}) => {
  const selectSongHandler = ()=> {
    setCurrentSong(song);
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        playPromise.then(()=>{
          audioRef.current.play();
        })
      }
    }
    audioRef.current.song.play();
    
  }
  return (
    <div onClick={selectSongHandler} className='library-song'>
        <img src={song.cover} alt={song.name}></img>
        <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
    </div>
  )
}
export default LibrarySong;