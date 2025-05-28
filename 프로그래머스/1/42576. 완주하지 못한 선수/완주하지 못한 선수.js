function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    let answer;
    participant.forEach((person, i) => {
        if (person !== completion[i]) {
            if (!answer) answer = person;
        }
    });
    return answer;
}
