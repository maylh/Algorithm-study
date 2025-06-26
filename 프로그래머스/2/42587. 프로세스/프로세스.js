function solution(priorities, location) {
    // 이제는 큐에서 문서를 하나 꺼냈을 때:

// 그 문서보다 높은 우선순위가 queue 안에 남아 있으면, 다시 push해서 맨 뒤로 보내고

// 없으면, "출력한 문서"로 간주해서 answer를 1 증가시키면 돼요.

// 그리고 그 출력한 문서의 index가 location이랑 같으면 정답!
    
    
    let queue = priorities.map((priority, index) => [priority, index]);
    let answer = 0
    
    while (true) {
        const current = queue.shift();
        const isHigher = queue.some((q) => q[0] > current[0])
        
        if (isHigher) queue.push(current);
        else {
            answer ++;
            if (current[1] === location) return answer;
        }
        
    }

}