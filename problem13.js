// # Basketball Points
// Problem-13: You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers) {
	let totalPointers = (twoPointers * 2) + (threePointers * 3);
    return totalPointers;
}