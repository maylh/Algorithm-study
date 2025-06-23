function solution(l, r) {
    var answer = [];
    
    for (let i=l; i<=r; i++) {
        if (i.toString().includes("5") || i.toString().includes("0")) answer.push(i);
       
    }
    
    const result = answer.filter((x) =>
        x.toString().split('').every((ch) => ch === '5' || ch === '0')
    );
    
    return result.length === 0 ? [-1] : result;
}