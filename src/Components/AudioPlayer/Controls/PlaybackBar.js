import React from 'react';
import Bar from './Bar'
import {formatDuration} from '../../../Helpers/barHelpers'

export default function PlaybackBar(props) {
  const { duration, curTime, onTimeUpdate } = props;
  const curPercentage = (curTime / duration) * 100;

  return (
    <div className="bar">
    <span className="bar_time">{formatDuration(curTime)}</span>
    <Bar percentage={curPercentage} onTimeUpdate={onTimeUpdate} duration={duration}/>
    <span className="bar_time">{formatDuration(duration)}</span>
    </div>
    );
}
