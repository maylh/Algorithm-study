function solution(s) {
  let result = [];
  let words = s.split(" ");
  for (let word of words) {
    let temp = "";
    for (let i = 0; i < word.length; i++) {
      temp += i % 2 === 0
        ? word[i].toUpperCase()
        : word[i].toLowerCase();
    }
    result.push(temp);
  }
  return result.join(" ");
}