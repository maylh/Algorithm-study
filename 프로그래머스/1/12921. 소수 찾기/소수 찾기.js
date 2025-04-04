function solution(n) {
    let answer = 0;
    const array = new Array(n+1).fill(true); 

    for(let i = 2; i <= Math.sqrt(n); ++i) {
        if(array[i] === false) continue;
        for(let j = i * i; j <= n; j += i) {
             array[j] = false;
        }
    }

    for(let i = 2; i <= n; ++i) {
        if(array[i] === true) answer++;
    }

    return answer;
}
