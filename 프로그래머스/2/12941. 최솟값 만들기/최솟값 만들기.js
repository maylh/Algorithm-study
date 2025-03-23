function solution(A,B){
    let answer = 0;

    const a = A.sort((x, y) => x - y);
    const b = B.sort((x, y) => y - x);
    
    for( let i = 0 ; i < A.length; i++ ){
     answer += a[i]*b[i]
}


    return answer;
}