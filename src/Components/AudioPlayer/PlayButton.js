import React from 'react';
import { PlayFill } from 'react-bootstrap-icons';

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player_button btn btn-primary btn-circle btn-lg" onClick={() => handleClick()}>
      <PlayFill />
    </button>
  );
}
