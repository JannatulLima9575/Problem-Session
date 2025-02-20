// # Less Than 100?
// Problem-14:Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
	let sum = a + b;
    if (sum <100) {
        return true;
    }
    else {
        return false;
    }
}