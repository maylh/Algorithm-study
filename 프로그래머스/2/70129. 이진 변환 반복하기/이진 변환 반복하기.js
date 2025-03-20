function solution(s) {
    let answer = [0,0];

    while(s.length>1){
        let len = s.length;
        s = s.replaceAll('0', '');
        answer[1] += len - s.length;
        s = s.length.toString(2);
        answer[0]++;
    }    
    
    return answer;
}