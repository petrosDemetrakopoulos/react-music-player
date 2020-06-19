import React from 'react';

function SongDetails(props) {
  const { name, artist } = props;
  
  return (
    <div className="song">
      <h2 className="song_name">{name}</h2>
      <h2 className="song_artist">{artist}</h2>
    </div>
  )
}

export default SongDetails;