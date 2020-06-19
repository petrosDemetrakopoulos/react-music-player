import React from 'react';

export default function Bar(props) {
	const {percentage, onTimeUpdate, duration} = props;
	function handleTimeDrag(e, onTimeUpdate, duration) {
		onTimeUpdate(calcClickedTime(e, duration));

		const updateTimeOnMove = eMove => {
			onTimeUpdate(calcClickedTime(eMove, duration));
		};

		document.addEventListener("mousemove", updateTimeOnMove);

		document.addEventListener("mouseup", () => {
			document.removeEventListener("mousemove", updateTimeOnMove);
		});
	}

	function calcClickedTime(e, duration) {
		const clickPositionInPage = e.pageX;
		const bar = document.querySelector(".bar_progress");
		const barStart = bar.getBoundingClientRect().left + window.scrollX;
		const barWidth = bar.offsetWidth;
		const clickPositionInBar = clickPositionInPage - barStart;
		const timePerPixel = duration / barWidth;
		return timePerPixel * clickPositionInBar;
	}
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