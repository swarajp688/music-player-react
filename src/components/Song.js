
const Song = ({currentSong}) => {
    const {name , cover ,artist} = currentSong;
  return (
    <div className="song-container">
        <img src={cover} />
        <h2>{name}</h2>
        <h3>{artist}</h3>
    </div>
  )
}
export default Song;