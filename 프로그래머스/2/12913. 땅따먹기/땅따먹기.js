function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            // 현재 행의 j번째 칸에는 이전 행에서 j를 제외한 최댓값을 더함
            land[i][j] += Math.max(...land[i - 1].filter((_, idx) => idx !== j));
        }
    }
    return Math.max(...land[land.length - 1]);
}
