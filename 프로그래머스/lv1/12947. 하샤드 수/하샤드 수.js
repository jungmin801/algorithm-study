function solution(x) {
    let sum = x.toString().split('').map(a => parseInt(a)).reduce((acc,cur) => acc + cur); 
    
    return x % sum === 0 ? true: false;
    
}