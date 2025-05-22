function solution(n) {
    let answer = 0;

    while (n > 0) {
        answer += n % 2; // 홀수면 점프 (1 추가), 짝수면 0
        n = Math.floor(n / 2); // 순간이동 (2로 나누기)
    }

    return answer;
}
