function solution(s) {
    let x = s[0];
    let count = 0;
    let answer = 0;
    
    for (const str of s) {
        if (!count) {
            answer++;
            x = str;
        }
        str === x ? count++ : count--;
    }
    return answer;
}