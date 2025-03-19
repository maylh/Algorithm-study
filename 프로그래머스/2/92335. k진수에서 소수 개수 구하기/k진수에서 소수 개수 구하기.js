function isPrime(num) {
    if (num < 2) return false;
    
    for (let i=2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    let numArr = n.toString(k).split('0');
    
    return numArr.filter(item => isPrime(+item)).length;
}