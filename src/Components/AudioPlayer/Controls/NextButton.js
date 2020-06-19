import React from 'react';
import { SkipEndFill } from 'react-bootstrap-icons';

export default function Next(props) {
  const { handleClick } = props;
  
  return (
    <button className="player_button player_button btn btn-primary btn-circle btn-lg next" onClick={() => handleClick()}>
      <SkipEndFill />
    </button>
  );
}
