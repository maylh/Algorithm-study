function solution(storey) {
    let digits = ('0' + storey).split('').map(Number);

    for (let i = digits.length - 1; i > 0; i--) {
        let curr = digits[i];
        let prev = digits[i - 1];

        if (curr > 5 || (curr === 5 && prev >= 5)) {
            digits[i] = 10 - curr;
            digits[i - 1]++;
        }
    }

    return digits.reduce((sum, n) => sum + n, 0);
}
