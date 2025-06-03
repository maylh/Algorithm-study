function solution(keymap, targets) {
    const map = new Map();

    for (const row of keymap) {
        for (let i = 0; i < row.length; i++) {
            const char = row[i];
            const press = i + 1;
            if (!map.has(char) || press < map.get(char)) {
                map.set(char, press);
            }
        }
    }

    const answer = [];
    for (const word of targets) {
        let sum = 0;
        for (const ch of word) {
            if (!map.has(ch)) {
                sum = -1;
                break;
            }
            sum += map.get(ch);
        }
        answer.push(sum);
    }
    return answer;
}
