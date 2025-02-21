// # Convert Hours and Minutes into Seconds
// Problem-20: Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function convert(hours, minutes) {
	return (hours * 60 * 60) + (minutes * 60);
}