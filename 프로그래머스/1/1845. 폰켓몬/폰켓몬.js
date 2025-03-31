function solution(nums) {
    let selectNum = nums.length / 2;
    let pokemon = [...new Set(nums)];
    
    return pokemon.length > selectNum ? selectNum : pokemon.length;
}