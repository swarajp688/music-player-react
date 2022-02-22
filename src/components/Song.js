
const Song = ({currentSong ,isPlaying}) => {
    const {name , cover ,artist} = currentSong;
  return (
    <div className="song-container">
        <img className={`${isPlaying ? 'rotate' : ''}`} alt={currentSong.name} src={cover} />
        <h2>{name}</h2>
        <h3>{artist}</h3>
    </div>
  )
}
export default Song;