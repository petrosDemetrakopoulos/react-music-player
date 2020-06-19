import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

export function handleTimeDrag(e, onTimeUpdate, duration) {
	onTimeUpdate(calcClickedTime(e, duration));

	const updateTimeOnMove = eMove => {
		onTimeUpdate(calcClickedTime(eMove, duration));
	};

	document.addEventListener('mousemove', updateTimeOnMove);

	document.addEventListener('mouseup', () => {
		document.removeEventListener('mousemove', updateTimeOnMove);
	});
}

export function calcClickedTime(e, duration) { //calculate the time based on the point of the bar clicked
	const clickPositionInPage = e.pageX;
	const bar = document.querySelector('.bar_progress');
	const barStart = bar.getBoundingClientRect().left + window.scrollX;
	const barWidth = bar.offsetWidth;
	const clickPositionInBar = clickPositionInPage - barStart;
	const timePerPixel = duration / barWidth;
	return timePerPixel * clickPositionInBar;
}

export function formatDuration(duration) {
	return moment
	.duration(duration, 'seconds')
	.format('mm:ss', { trim: false });
}