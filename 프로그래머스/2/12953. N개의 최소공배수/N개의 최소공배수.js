function solution(arr) {
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  return arr.reduce((acc, curr) => lcm(acc, curr));
}
