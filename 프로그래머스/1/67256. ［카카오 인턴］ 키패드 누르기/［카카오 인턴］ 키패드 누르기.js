function solution(numbers, hand) {
    let answer = '';
    let leftPos = 10; 
    let rightPos = 12;

    const getDistance = (from, to) => {
        const [x1, y1] = [(from - 1) % 3, Math.floor((from - 1) / 3)];
        const [x2, y2] = [(to - 1) % 3, Math.floor((to - 1) / 3)];
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    for (const num of numbers) {
        let target = num === 0 ? 11 : num;

        if ([1,4,7].includes(num)) {
            answer += 'L';
            leftPos = target;
        } else if ([3,6,9].includes(num)) {
            answer += 'R';
            rightPos = target;
        } else {
            const leftDist = getDistance(leftPos, target);
            const rightDist = getDistance(rightPos, target);

            if (leftDist === rightDist) {
                if (hand === 'right') {
                    answer += 'R';
                    rightPos = target;
                } else {
                    answer += 'L';
                    leftPos = target;
                }
            } else if (leftDist < rightDist) {
                answer += 'L';
                leftPos = target;
            } else {
                answer += 'R';
                rightPos = target;
            }
        }
    }

    return answer;
}
