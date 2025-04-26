function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    const zeroCount = lottos.filter(num => num === 0).length;
    const matchCount = lottos.filter(num => win_nums.includes(num)).length;
    
    const maxMatch = matchCount + zeroCount;
    const minMatch = matchCount;

    return [rank[maxMatch], rank[minMatch]];
}