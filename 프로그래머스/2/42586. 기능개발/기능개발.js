function solution(progresses, speeds) {
    // 각 기능이 완료되기까지 걸리는 일수 계산
    const days = progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]));

    let answer = [];
    let count = 1; // 현재 배포 묶음에 포함된 기능 수
    let maxDay = days[0]; // 기준일

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            // 아직 기준일 안 넘었으면 같은 배포
            count++;
        } else {
            // 기준일 넘었으면 새 배포 시작
            answer.push(count);
            count = 1;
            maxDay = days[i];
        }
    }

    answer.push(count);

    return answer;
}
