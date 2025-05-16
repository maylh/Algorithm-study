function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = [];
    let totalWeight = 0;

    while (truck_weights.length > 0 || bridge.length > 0) {
        time++;

        // 다리에서 트럭 제거 (시간 초과된 트럭)
        if (bridge.length > 0 && bridge[0].time === time) {
            totalWeight -= bridge.shift().weight;
        }

        // 다음 트럭이 올라갈 수 있는지 체크
        if (truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {
            const truckWeight = truck_weights.shift();
            totalWeight += truckWeight;
            bridge.push({ weight: truckWeight, time: time + bridge_length });
        }
    }

    return time;
}
