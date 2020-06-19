import React from "react";
import { Button } from 'react-bootstrap';
import { PlayFill } from 'react-bootstrap-icons';
//A custom component representing the card of an album in the album list
export default function SongCard({ crnSong }) {

    function handleClick() {
       console.log('song play clicked')
    }

  return (
    <div className="card song_card">
      <div className="card-body text-center">
      <div className="details_container">
        <h5 className="card-title song_name_card">{crnSong.name}</h5>
        <img src={crnSong.cover} className="album-img" alt={crnSong.name}/>
         <h5 className="card-title">{crnSong.artist}</h5>
        </div>
        
         <Button variant="primary" onClick={() => handleClick()} className="cardPlay"><PlayFill /> Play </Button>
        <br/>
      </div>
      </div>
  );
}