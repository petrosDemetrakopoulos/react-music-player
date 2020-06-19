import React from "react";
import AlbumCard from "../Albums/AlbumCard";
export default function AlbumsList({ albums }) {
  const cards = () => {
    return albums.map((album) => {
      return <AlbumCard key={album._id} album={album} />;
    });
  };

  return <div className="row">{cards()}</div>;
}
