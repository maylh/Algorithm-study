function solution(n, lost, reserve) {
    let lostSet = new Set(lost.filter(l => !reserve.includes(l)));
    let reserveSet = new Set(reserve.filter(r => !lost.includes(r)));

    for (let r of [...reserveSet].sort((a, b) => a - b)) {
        if (lostSet.has(r - 1)) {
            lostSet.delete(r - 1);
        } else if (lostSet.has(r + 1)) {
            lostSet.delete(r + 1);
        }
    }

    return n - lostSet.size;
}
