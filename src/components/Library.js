import React from 'react'
import LibrarySong from './LibrarySong';

const Library = ({songs , setCurrentSong , setIsPlaying,audioRef , isPlaying}) => {
  return (
    <div className='library'>
        <h2>Library</h2>
        <div className='library-songs'>
            {songs.map((song) => <LibrarySong isPlaying={isPlaying} audioRef={audioRef} setIsPlaying={setIsPlaying} setCurrentSong={setCurrentSong} key={song.id} song={song}/>)}
        </div>
    </div>
  )
}
export default Library;