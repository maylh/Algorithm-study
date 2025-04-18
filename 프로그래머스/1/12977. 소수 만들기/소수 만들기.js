function solution(nums) {
  let answer = 0;

  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const num = nums[i] + nums[j] + nums[k];
        if (isPrime(num)) {
          answer++;
        }
      }
    }
  }

  return answer
}