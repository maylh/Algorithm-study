function solution(rank, attendance) {
    
    let arr = rank.filter((x, i) => attendance[i] === true).sort((a,b) => a-b).slice(0,3);
    
    let a = rank.indexOf(arr[0]);
    let b = rank.indexOf(arr[1]);
    let c = rank.indexOf(arr[2]);
    
    return 10000*a + 100*b + c;
}