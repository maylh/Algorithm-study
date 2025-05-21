function solution(clothes) {
    const typeMap = new Map();

    clothes.forEach(([item, type]) => {
        typeMap.set(type, (typeMap.get(type) || 0) + 1);
    });

    let combinations = 1;
    for (let count of typeMap.values()) {
        combinations *= (count + 1); // 입지 않는 경우 포함
    }

    return combinations - 1; // 아무것도 입지 않는 경우 제외
}
