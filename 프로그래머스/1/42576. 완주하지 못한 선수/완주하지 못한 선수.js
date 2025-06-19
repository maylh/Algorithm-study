function solution(participant, completion) {
    let count = {};
    
    for (let name of participant) {
        count[name] = (count[name] || 0) + 1;
    }
    
    for (let name of completion) {
        count[name] -= 1
    }
    
    return Object.keys(count).find(key => count[key] > 0);
}