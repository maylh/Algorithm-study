function solution(s) {
    let answer = '';
    const arr = s.toLowerCase().split('');
    console.log(arr)
    arr.forEach((val, index) => {
        if(arr[index - 1] == ' ' || index == 0){
            answer += val.toUpperCase();
        }else{
            answer += val.toLowerCase();
        }
    })
    return answer;
}