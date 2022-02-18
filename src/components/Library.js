import React from 'react'
import LibrarySong from './LibrarySong';

const Library = ({libStatus,songs , setCurrentSong , setIsPlaying,audioRef , isPlaying , setSongs}) => {
  return (
    <div className={`library ${libStatus ? 'active-library' : ''}`}>
        <h2>Library</h2>
        <div className='library-songs'>
            {songs.map((song) => <LibrarySong songs={songs} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setIsPlaying={setIsPlaying} setCurrentSong={setCurrentSong} key={song.id} song={song}/>)}
        </div>
    </div>
  )
}
export default Library;