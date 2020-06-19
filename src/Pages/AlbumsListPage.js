import React, { useContext, useEffect, useState } from 'react';
import AlbumsList from '../Components/Albums/AlbumsList';
import { Store } from '../Context/Store'
import data from '../data/data.json'
//A custom component representing the Albums list page
const AlbumsListPage = () => {
	const {state, dispatch} = useContext(Store);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const albums = data;
		dispatch({
			type: 'FETCH_ALBUMS',
			payload: albums,
		})
		setLoading(false);
	}, [dispatch]);
	if (loading) {
		return <p>Please wait...</p>;
	}
	return (
		<div>
		<h2 className="albumsHeader">Albums</h2>
		<AlbumsList albums={state.albums} />
		</div>
		);
};

export default AlbumsListPage;