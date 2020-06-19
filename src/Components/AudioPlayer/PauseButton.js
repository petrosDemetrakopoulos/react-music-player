import React from 'react';
import { PauseFill } from 'react-bootstrap-icons';

export default function Pause(props) {
  const { handleClick } = props;
  
  return (
    <button className="player_button player_button btn btn-primary btn-circle btn-lg" onClick={() => handleClick()}>
      <PauseFill />
    </button>
  );
}
