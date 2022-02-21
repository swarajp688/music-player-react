export const audioPlay=(isPlaying , audioRef)=>{
    if(isPlaying){
    const playPromise = audioRef.current.play();
    if(playPromise !== undefined){
      playPromise.then(()=>{
        audioRef.current.play();
      })
    }
  }
}