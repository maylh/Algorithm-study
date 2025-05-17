function solution(k, tangerine) {
    const freq = new Map();

    tangerine.forEach(size => {
        freq.set(size, (freq.get(size) || 0) + 1);
    });

    const sorted = [...freq.values()].sort((a, b) => b - a);

    let count = 0;
    let total = 0;
    
    for (const num of sorted) {
        total += num;
        count++;
        if (total >= k) break;
    }

    return count;
}
