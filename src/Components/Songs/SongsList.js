import React from "react";
import SongCard from "./SongCard";
export default function SongsList({ album }) {
  const cards = () => {
    return album.songs.map((song) => {
      return <SongCard key={song.name} crnSong={song} />;
    });
  };
  return <div className="row">{cards()}</div>;
}
