import React, {useContext} from 'react';
import SongDetails from './SongDetails';
import { Store } from '../../Context/Store'

function AudioPlayer() {
  const {state, dispatch} =  useContext(Store);
  const {song} = state;

  return(
  <SongDetails name={song ? song.name: ""} artist={song ? song.artist: ""}/>
  )
}

export default AudioPlayer;