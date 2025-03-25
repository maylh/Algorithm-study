function solution(n) {
    let cnt = 1;
    for (let i =1; i<n ; i++) {
        let sum = i
        for (let j = i+1 ; j<n; j++) {
            sum += j
            if (sum > n) break;
            else if (sum == n) {
                cnt++
                break;
            }
        }
    }
    return cnt
}