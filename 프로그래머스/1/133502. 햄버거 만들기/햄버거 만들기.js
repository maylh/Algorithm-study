function solution(ingredient) {
    let arr = [];
    let count = 0;
    
    for (let i=0; i<ingredient.length; i++) {
        arr.push(ingredient[i]);
        
        if (arr.slice(-4).join('') == '1231') {
            for (let j = 0; j < 4; j++) arr.pop();
            count++;
        }

    }
    return count;
}
