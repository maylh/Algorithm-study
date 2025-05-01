function solution(elements) {
    const len = elements.length;
    const extended = elements.concat(elements);
    const sums = new Set();

    for (let size = 1; size <= len; size++) {
        for (let start = 0; start < len; start++) {
            let subSum = 0;
            for (let k = 0; k < size; k++) {
                subSum += extended[start + k];
            }
            sums.add(subSum);
        }
    }

    return sums.size;
}
