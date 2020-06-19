export default function reducer(state, action) {
	switch (action.type) {
		case 'FETCH_ALBUMS': {
			return {
				...state,
				albums: action.payload,
				playlist: action.payload.map(el => el.songs).flat(),
				album: {}
			};
		}
		case 'FETCH_ALBUM' : {
			return {
				...state,
				album: action.payload.album,
				playlist: action.payload.playlist
			};
		}
		case 'PICK_SONG' : {
			return {
				...state,
				song: action.payload,
				playbackStatus: 'playing'
			};
		}
		case 'CHANGE_PLAYBACK_STATUS' : {
			return {
				...state,
				playbackStatus: action.payload
			};
		}
		case 'SONG_PROGRESS': {
			return {
				...state, 
				songProgress: action.payload 
			};
		}
		default: return state
	}
}