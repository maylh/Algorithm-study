function solution(s) {
    let answer = 0;
    const pairs = { '(': ')', '{': '}', '[': ']' };

    const isValid = (str) => {
        const stack = [];
        for (const ch of str) {
            if (pairs[ch]) {
                stack.push(ch);
            } else {
                if (stack.length === 0 || pairs[stack.pop()] !== ch) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    };

    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isValid(rotated)) answer++;
    }

    return answer;
}
