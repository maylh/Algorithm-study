function solution(s, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answer = '';

    for (let char of s) {
        if (char === ' ') {
            answer += ' ';
            continue;
        }

        const alphabet = lower.includes(char) ? lower : upper;
        const index = alphabet.indexOf(char);
        const shifted = (index + n) % 26;
        answer += alphabet[shifted];
    }

    return answer;
}
