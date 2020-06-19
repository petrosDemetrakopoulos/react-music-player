import React, {useContext, useEffect, useState} from 'react';
import SongDetails from './SongDetails';
import { Store } from '../../Context/Store'
import Play from './PlayButton'
import Pause from './PauseButton'
import PlaybackBar from './PlaybackBar'
import Previous from './PreviousButton';
import Next from './NextButton'
import PlaybackController from '../../Helpers/PlaybackController'

function AudioPlayer() {
  const {state, dispatch} =  useContext(Store);
  const {playbackStatus, song, playlist} = state;
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [clickedTime, setClickedTime] = useState();
  const {play, pause, nextSong, previousSong, songProgress} = PlaybackController()

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

  return(
    <div className="player">
    <audio id="audio" src={song && song.file} onTimeUpdate={() => songProgress()} onEnded={() => nextSong()}>
    Your browser does not support the <code>audio</code> element.
    </audio>
    <SongDetails name={song ? song.name: ""} artist={song ? song.artist: ""}/>
    <div className="controls">
     <Previous handleClick={() => previousSong()}/>
    {playbackStatus === 'playing'? 
    <Pause handleClick={() => pause()} /> :
    <Play handleClick={() => play()} />
  }
  <Next handleClick={() => nextSong()}/>
  <PlaybackBar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
  </div>
  </div>
  )
}

export default AudioPlayer;