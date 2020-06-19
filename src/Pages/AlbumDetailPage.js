import React, { useContext, useEffect, useState } from 'react';
import SongsList from '../Components/Songs/SongsList';
import { Store } from '../Context/Store'
import data from '../data/data.json'
//A custom component representing the details page of an album
const AlbumDetailPage = ({match}) => {
	const {state, dispatch} = useContext(Store);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const {_id} = match.params;
		const album = data.filter(el => el._id === _id)[0] //getting the album selected from the _id param
		dispatch({
			type: 'FETCH_ALBUM',
			payload: state.playlist.length > 0 ? {album: album, playlist: state.playlist}: {album: album, playlist: album.songs}
		})
		setLoading(false);
	}, [dispatch]);
	if (loading) {
		return <p>Please wait...</p>;
	}
	return (
		<div>
		<h2 style={{marginTop: '1rem'}}>{state.album.name}</h2>
		<SongsList album={state.album} />
		</div>
		);
};

export default AlbumDetailPage;