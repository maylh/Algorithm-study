function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach(([w, h]) => {
        const [maxSide, minSide] = w > h ? [w, h] : [h, w];

        if (maxSide > maxWidth) maxWidth = maxSide;
        if (minSide > maxHeight) maxHeight = minSide;
    });

    return maxWidth * maxHeight;
}