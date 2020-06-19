import React from 'react';
import { SkipStartFill } from 'react-bootstrap-icons';

export default function Previous(props) {
  const { handleClick } = props;
  
  return (
    <button className="player_button player_button btn btn-primary btn-circle btn-lg previous" onClick={() => handleClick()}>
      <SkipStartFill />
    </button>
  );
}
