function solution(answers) {
    
  let s1 = [1, 2, 3, 4, 5];
  let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
  let count = [0, 0, 0]; // 맞힌 갯수 저장

  for (let i = 0; i < answers.length; i++) {
    if (s1[i % s1.length] == answers[i]) {
      count[0]++;
    }
    if (s2[i % s2.length] == answers[i]) {
      count[1]++;
    }
    if (s3[i % s3.length] == answers[i]) {
      count[2]++;
    }
  }

  let max = Math.max(...count);

  return count.flatMap((value, index) => value === max ? index + 1 : []);
}