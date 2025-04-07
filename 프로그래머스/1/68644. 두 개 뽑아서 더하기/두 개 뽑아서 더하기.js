function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i += 1) {
        for (let j = 0; j < numbers.length; j += 1) {
            if (i!==j)
                answer.push(numbers[i]+numbers[j])
        }    
    }
    answer = [...new Set((answer))].sort((a, b) => a - b)
    return answer
}