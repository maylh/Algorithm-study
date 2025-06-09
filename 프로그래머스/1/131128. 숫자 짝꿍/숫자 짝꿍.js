function solution(X, Y) {
    const xCount = Array(10).fill(0);
    const yCount = Array(10).fill(0);
    
    for (let ch of X) {
        xCount[Number(ch)]++;
    }
    for (let ch of Y) {
        yCount[Number(ch)]++;
    }

    let result = "";
    for (let i = 9; i >= 0; i--) {
        result += String(i).repeat(Math.min(xCount[i], yCount[i]));
    }

    if (result === "") return "-1";
    if (result[0] === '0') return "0";
    return result;
}
