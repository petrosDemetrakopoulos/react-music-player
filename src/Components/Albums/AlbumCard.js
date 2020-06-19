import React from 'react';
import { Link } from "react-router-dom";
//A custom component representing the card of an album in the album list
export default function AlbumCard({ album }) {
  return (
    <div className="card album-card">
      <div className="card-body text-center">
        <h5 className="card-title">{album.name}</h5>
        <img src={album.cover} className="album-img" alt={album.name}/>
                <br/>
        <Link to={`/album/${album._id}`}>
          <button className="btn btn-primary">
             View songs
          </button>
        </Link>
      </div>
      </div>
  );
}