function solution(answers) {
    let result = [];
    function checkCorrect(str){
        let arr = str.repeat(Math.ceil(answers.length/str.length))
                     .split('')
                     .map(el => parseInt(el));
        
        let cnt = answers.filter((el,index) =>el === arr[index]).length;
        result.push(cnt);
    }
    
    checkCorrect('12345');
    checkCorrect('21232425');
    checkCorrect('3311224455');
    
    let max = Math.max(...result);
    let answer = result.map((el, index) => el === max? index+1 : undefined )
                       .filter(el => !isNaN(el));
    
    return answer;
}