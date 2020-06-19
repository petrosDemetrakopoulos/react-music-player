  import { useState, useEffect, useContext } from "react";
  import { Store } from './Store'
  function useAudioPlayer() {
  const {state} =  useContext(Store);
  const {playbackStatus} = state;
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [clickedTime, setClickedTime] = useState();


  useEffect(() => {
    const audio = document.getElementById("audio");
    setCurTime(audio.currentTime)
    setDuration(audio.duration)

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    } 
    if(playbackStatus === 'playing'){
      audio.play();
    } else {
      audio.pause();
    }

  })
return {
    curTime,
    duration,
    setClickedTime
  }
}

export default useAudioPlayer;