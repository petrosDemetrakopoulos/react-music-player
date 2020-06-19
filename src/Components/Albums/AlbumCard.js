import React from 'react';

//A custom component representing the card of an album in the album list
export default function AlbumCard({ album }) {
  return (
    <div className="card album-card">
      <div className="card-body text-center">
        <h5 className="card-title">{album.name}</h5>
        <img src={album.cover} className="album-img" alr={album.name}/>
        <br/>
      </div>
      </div>
  );
}