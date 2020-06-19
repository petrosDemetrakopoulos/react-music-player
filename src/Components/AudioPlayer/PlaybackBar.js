import React from 'react';
import Bar from './Bar'
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

export default function PlaybackBar(props) {
  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
	return moment
	.duration(duration, "seconds")
	.format("mm:ss", { trim: false });
}

  return (
    <div className="bar">
    <span className="bar_time">{formatDuration(curTime)}</span>
    <Bar percentage={curPercentage} onTimeUpdate={onTimeUpdate} duration={duration}/>
    <span className="bar_time">{formatDuration(duration)}</span>
    </div>
    );
}
