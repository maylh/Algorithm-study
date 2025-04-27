function solution(want, number, discount) {
    let answer = 0;

    const wantObj = {};
    for (let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }

    for (let i = 0; i <= discount.length - 10; i++) {
        const tempObj = {};
        
        for (let j = i; j < i + 10; j++) {
            tempObj[discount[j]] = (tempObj[discount[j]] || 0) + 1;
        }
        
        let isSame = true;
        for (let item in wantObj) {
            if (tempObj[item] !== wantObj[item]) {
                isSame = false;
                break;
            }
        }
        
        if (isSame) answer++;
    }

    return answer;
}
