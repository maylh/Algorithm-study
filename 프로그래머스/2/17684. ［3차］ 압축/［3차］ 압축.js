function solution(msg) {
    var answer = [];
    var alpha = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    let i = 0;
    while (i < msg.length) {
        let curr = '';
        let cursor = i;

        // 가능한 가장 긴 alpha에 있는 단어 찾기
        while (cursor <= msg.length) {
            let temp = msg.slice(i, cursor + 1);
            if (alpha.indexOf(temp) === -1) break;
            curr = temp;
            cursor++;
        }

        answer.push(alpha.indexOf(curr));              // 찾은 단어 색인 번호 저장
        alpha.push(msg.slice(i, cursor + 1));            // 다음 조합을 alpha에 등록
        i += curr.length;                           // 다음으로 이동
    }

    return answer;
}
