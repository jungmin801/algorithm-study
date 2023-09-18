function solution(s, n) {
    const nums = s.split('').map(el => el.charCodeAt());
    const result = nums.map(el => {
        if(el == 32) return el;
        let copy = el;
        el += n;
        if(copy>=65 && copy<=90){
            if (el>=65 && el<=90) return el;
            else if(el>=91)return el-26;
        } else if(copy>=97 && copy<=122){
            if (el>=97 && el<=122) return el;
            else if(el>=123) return el-26;
        } 
        
    })
    
    const answer = result.map(num => String.fromCharCode(num)).join('');
    return answer;
}