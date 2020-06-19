export default function reducer(state, action) {
	switch (action.type) {
		case 'FETCH_ALBUMS': {
			return {
				...state,
				albums: action.payload,
				album: {}
			};
		}
		case 'FETCH_ALBUM' : {
			return {
				...state,
				album: action.payload
			};
		}
		case 'PICK_SONG' : {
			return {
				...state,
				song: action.payload,
				playbackStatus: 'playing'
			};
		}
		default: return state
	}
}