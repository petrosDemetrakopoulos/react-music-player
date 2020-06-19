import React, {useContext, useEffect} from 'react';
import SongDetails from './SongDetails';
import { Store } from '../../Context/Store'

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


  return(
    <div className="player">
    <audio id="audio" src={song && song.file}>
    Your browser does not support the <code>audio</code> element.
    </audio>
    <SongDetails name={song ? song.name: ""} artist={song ? song.artist: ""}/>
    </div>
    )
}

export default AudioPlayer;