function solution(nums) {
    const pick = nums.length / 2;
    let set = new Set(nums);
    const setCnt = [...set].length;
    
    if(setCnt <= pick) return setCnt;
    else return pick;
}