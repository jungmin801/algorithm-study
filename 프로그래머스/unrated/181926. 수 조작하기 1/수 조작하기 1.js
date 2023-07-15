function solution(n, control) {
    let obj = { w : 0, s : 0, d : 0, a : 0};
    let arr = [...control];
 
    obj.w = arr.filter( a => a === 'w').length;
    obj.s = arr.filter( a => a === 's').length * -1;
    obj.d = arr.filter( a => a === 'd').length * 10;
    obj.a = arr.filter( a => a === 'a').length * -10;
    
    return answer = n + obj.w + obj.s + obj.d + obj.a 
}