function solution(nums) {
    let cnt = 0;
    let sum = [];
    
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1;j<nums.length-1; j++){
            for(let k=j+1;k<nums.length;k++){
                if((nums[i]+nums[j]+nums[k]) % 2 !== 0) sum.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }

    let result = 0;
    for(let value of sum){
        let dividedCnt = 0;
        let check = true;
        for(let x=3; x<=value; x+=2){
            if(dividedCnt < 1 && value % x === 0) {
                dividedCnt++;
            } else if(dividedCnt >= 1 && value % x === 0) {
                check = false;
                break;
            }
        }
        check && dividedCnt === 1 ? result++ : null;
    }
    return result
}