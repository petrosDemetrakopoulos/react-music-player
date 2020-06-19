import React from 'react';
import {handleTimeDrag} from '../../../Helpers/barHelpers'
export default function Bar(props) {
	const {percentage, onTimeUpdate, duration} = props;
	return (
		<div className="bar_progress" style={{background: `linear-gradient(to right, gray ${percentage}%, white 0)`}}
		onMouseDown={e => handleTimeDrag(e, onTimeUpdate, duration)}>
		<span
		className="bar_progress_knob"
		style={{ left: `${percentage - 1}%` }}
		/>
		</div>
		);
}