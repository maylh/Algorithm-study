function solution(n) {
    let answer = 0;
    // n을 2진수로 변환 후 1의 갯수 카운트
    let curr = n.toString(2).split('').reduce((acc, curr) => acc + (curr === '1' ? 1 : 0), 0);
    
    while (true) {
        n++; // 조건 1
        let next = n.toString(2).split('').reduce((acc, curr) => acc + (curr === '1' ? 1 : 0), 0);
        
        if (curr === next) {
            answer = n;
            break; // 조건이 충족되면 루프 종료
        }
    }
    
    return answer;
}
