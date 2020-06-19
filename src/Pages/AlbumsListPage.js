import React, { useContext, useEffect, useState } from 'react';
import AlbumsList from '../Components/Albums/AlbumsList';
import { Store } from '../Context/Store'
//A custom component representing the Albums list page
const AlbumsListPage = () => {
	const {state, dispatch} = useContext(Store);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const albums = [{_id:1, name: "The Beatles", cover: "https://www.whizzpast.com/wp-content/uploads/2013/10/Abbey+Road.jpg", songs: [{name: "A beatles song", cover: "https://www.whizzpast.com/wp-content/uploads/2013/10/Abbey+Road.jpg", artist: "The beatles"}]}]
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
		<h2 style={{marginTop: '1rem'}}>Albums</h2>
		<AlbumsList albums={state.albums} />
		</div>
		);
};

export default AlbumsListPage;