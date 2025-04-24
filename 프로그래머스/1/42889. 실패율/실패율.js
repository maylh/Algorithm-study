function solution(N, stages) {
    let total = stages.length;
    
    const result = Array.from({ length: N }, (_, i) => {
        const stageNum = i + 1;
        const count = stages.reduce((acc, cur) => acc + (cur === stageNum ? 1 : 0), 0);
        const failRate = count / total || 0;
        total -= count;
        return { stage: stageNum, fail: failRate };
    });

    return result
        .sort((a, b) => b.fail - a.fail)
        .map(obj => obj.stage);
}
