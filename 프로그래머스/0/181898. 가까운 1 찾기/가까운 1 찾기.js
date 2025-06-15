// function solution(arr, idx) {
//     return arr.slice(idx).findIndex(x => x ===1) // 인덱스 보정 필요해서 안됨 !! 
// }

function solution(arr, index){
    for (let i=index; i<arr.length; i++){
        if (arr[i] === 1) return i;
    }
    
    return -1;
}