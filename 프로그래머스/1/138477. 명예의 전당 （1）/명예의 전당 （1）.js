function solution(k, score) {
    let hof = []; // 명예의 전당
    let lowest = [] // 최하위 점수
    
    for (let i=0; i<score.length; i++){
        hof.push(score[i]);
        hof.sort((a,b) => b-a);
        
        if (hof.length > k) {
            hof.pop();
            hof.join(score[i]);
            hof.sort((a,b) => b-a);
        }
        
        lowest.push(hof[hof.length-1]);
    }
    return lowest;
}