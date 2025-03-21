function getMinutes(time) {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
}

function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const inRecords = {};
    const totalTimes = {};

    function getMinutes(time) {
        const [hour, minute] = time.split(":").map(Number);
        return hour * 60 + minute;
    }

    for (const record of records) {
        const [time, carNum, status] = record.split(" ");

        if (status === "IN") {
            inRecords[carNum] = time;
        } else {
            const inTime = getMinutes(inRecords[carNum]);
            const outTime = getMinutes(time);
            const duration = outTime - inTime;

            totalTimes[carNum] = (totalTimes[carNum] || 0) + duration;
            delete inRecords[carNum];
        }
    }

    // 출차 기록 없는 차량들 처리
    for (const [carNum, inTime] of Object.entries(inRecords)) {
        const duration = getMinutes("23:59") - getMinutes(inTime);
        totalTimes[carNum] = (totalTimes[carNum] || 0) + duration;
    }

    const answer = Object.keys(totalTimes).sort().map(carNum => {
        const totalTime = totalTimes[carNum];
        if (totalTime <= baseTime) return baseFee;
        return baseFee + Math.ceil((totalTime - baseTime) / unitTime) * unitFee;
    });

    return answer;
}
