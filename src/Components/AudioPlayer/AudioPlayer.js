import React, {useContext, useEffect} from 'react';
import SongDetails from './SongDetails';
import { Store } from '../../Context/Store'
import Play from './PlayButton'
import Pause from './PauseButton'

function AudioPlayer() {
  const {state, dispatch} =  useContext(Store);
  const {playbackStatus, song} = state;

  useEffect(() => {
    const audio = document.getElementById("audio");
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


  return(
    <div className="player">
    <audio id="audio" src={song && song.file}>
    Your browser does not support the <code>audio</code> element.
    </audio>
    <SongDetails name={song ? song.name: ""} artist={song ? song.artist: ""}/>
          <div className="controls">
        {playbackStatus === 'playing'? 
          <Pause handleClick={() => pause()} /> :
          <Play handleClick={() => play()} />
        }
        </div>
    </div>
    )
}

export default AudioPlayer;