import React, {useContext, useEffect, useState} from 'react';
import SongDetails from './SongDetails';
import { Store } from '../../Context/Store'
import Play from './PlayButton'
import Pause from './PauseButton'
import PlaybackBar from './PlaybackBar'
import Previous from './PreviousButton';
import Next from './NextButton'

function AudioPlayer() {
  const {state, dispatch} =  useContext(Store);
  const {playbackStatus, song} = state;
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

  function play() {
    if(song){
      dispatch({type:'CHANGE_PLAYBACK_STATUS', payload: 'playing'})
    }
  }

  function pause() {
    dispatch({type:'CHANGE_PLAYBACK_STATUS', payload: 'paused'})
  }

  function songProgress() {
    const audio = document.getElementById('audio');
    dispatch({
      type: 'SONG_PROGRESS',
      payload: audio.currentTime
    })
  }


  return(
    <div className="player">
    <audio id="audio" src={song && song.file} onTimeUpdate={() => songProgress()}>
    Your browser does not support the <code>audio</code> element.
    </audio>
    <SongDetails name={song ? song.name: ""} artist={song ? song.artist: ""}/>
    <div className="controls">
     <Previous />
    {playbackStatus === 'playing'? 
    <Pause handleClick={() => pause()} /> :
    <Play handleClick={() => play()} />
  }
  <Next/>
  <PlaybackBar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
  </div>
  </div>
  )
}

export default AudioPlayer;