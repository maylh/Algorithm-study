function solution(wallpaper) {
    var indexes = [];   // # 인덱스 저장
    
    for (let i=0; i<wallpaper.length; i++) {
        for (let j=0; j<wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') indexes.push([i,j])
        }
    }
    
    let x = indexes.map(item => item[0])
    let y = indexes.map(item => item[1])
    
    let answer = [Math.min(...x), Math.min(...y), Math.max(...x)+1, Math.max(...y)+1]

    return answer;
}