import React, {useContext} from 'react';
import SongDetails from './SongDetails';
import { Store } from '../../Context/Store'
import Play from './Controls/PlayButton'
import Pause from './Controls/PauseButton'
import PlaybackBar from './Controls/PlaybackBar'
import Previous from './Controls/PreviousButton';
import Next from './Controls/NextButton'
import PlaybackController from '../../Helpers/PlaybackController'
import useAudioPlayer from '../../Context/useAudioPlayer'

function AudioPlayer() {
  const {state} =  useContext(Store);
  const {playbackStatus, song} = state;
  const {curTime, duration, setClickedTime} = useAudioPlayer();
  const {play, pause, nextSong, previousSong, songProgress} = PlaybackController()

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