function solution(name, yearning, photo) {
    const obj = {};
    for(let i=0; i<name.length; i++){
        obj[name[i]] = yearning[i]
    }

    let answer = [];
    answer = photo.map((i) => i.reduce((arr, cur) => arr + (obj[cur] || 0), 0))

    return answer;
}