function solution(n, m, section) {
    let answer = 0;
    for(let i=1; i<n+1; i++){
        if(section.includes(i)){
            answer += 1
            i = i +m-1
            continue;
        }
    }
    return answer;
}