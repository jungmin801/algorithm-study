function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;
    
    // 1. sum이 target과 같은지 확인
    // 2. 현재의 index가 length와 같은지 확인(끝까지 depth에 들어갔는지를 확인)
    function dfs (index, sum) {
        if(index === length){
            if(sum === target ){
                answer++;
            }
            return;
        }
        
        dfs(index+1, sum + numbers[index]);
        dfs(index+1, sum - numbers[index]);
    }
    
    dfs(0,0);
    return answer;
}