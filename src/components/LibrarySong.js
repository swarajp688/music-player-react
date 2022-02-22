import React from 'react'

const LibrarySong = ({song ,songs ,setCurrentSong  , audioRef , isPlaying , setSongs }) => {
  const selectSongHandler = async ()=> {
    
    await setCurrentSong(song);
    const crSong =song;
    
    const newSong = songs.map( (song)=>{
      if(song.id === crSong.id){
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
    if(isPlaying) audioRef.current.play();
    
    
  }
  return (
    <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
        <img src={song.cover} alt={song.name}></img>
        <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
    </div>
  )
}
export default LibrarySong;