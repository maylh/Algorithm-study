function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a - b);

    while(score.length >= m){
        const box = score.splice(score.length - m, m);
        const prize = m * Math.min(...box);
        answer += prize;
    }
    
    return answer;

}