
/**
 * @param {string} input
 * @return {number}
 */
var scoreOfParentheses = function (input) {

    const size = input.length;
    let balance = 0;
    let totalScore = 0;

    for (let i = 0; i < size; i++) {
        if (input.charAt(i) === '(') {
            balance++;
            continue;
        }
        balance--;

        // (i-1)>=0 is not necessary because all parentheses are balanced.
        if (input.charAt(i - 1) === '(') {
            totalScore += (1 << balance);
        }
    }
    return totalScore;
};
