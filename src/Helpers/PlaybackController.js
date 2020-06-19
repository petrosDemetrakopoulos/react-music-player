import { useContext } from 'react'
import { Store } from '../Context/Store'

export default function PlaybackController() {
	const {state, dispatch} =  useContext(Store);
	const {song, playlist} = state;
	const audio = document.getElementById('audio');

	function play() {
		if(song){
			dispatch({type:'CHANGE_PLAYBACK_STATUS', payload: 'playing'})
		}
	}

	function pause() {
		dispatch({type:'CHANGE_PLAYBACK_STATUS', payload: 'paused'})
	}

	function nextSong() {
		if(song){
			let crnSongIndex = playlist.indexOf(song);
			if(crnSongIndex!== (playlist.length -1)){
				dispatch({type:'PICK_SONG', payload: playlist[crnSongIndex+1]})
			}
		}
	}

	function previousSong() {
		if(song){
			let crnSongIndex = playlist.indexOf(song);
			if(crnSongIndex!== 0){
				dispatch({type:'PICK_SONG', payload: playlist[crnSongIndex-1]})
			}
		}
	}

	function songProgress() {
		dispatch({
			type: 'SONG_PROGRESS',
			payload: audio.currentTime
		})
	}

	return {play, pause, nextSong, previousSong, songProgress}
}