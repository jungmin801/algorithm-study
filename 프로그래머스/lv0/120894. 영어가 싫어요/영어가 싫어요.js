function solution(numbers) {
    let numObj = {
        "zero" : 0, 
        "one" : 1, 
        "two" : 2, 
        "three" : 3, 
        "four" : 4, 
        "five" : 5, 
        "six" : 6, 
        "seven" : 7, 
        "eight" : 8, 
        "nine" : 9
    };
    
    let keys = Object.keys(numObj);
    keys.forEach((a, i) => {
        if(numbers.includes(a)){
           let replacement = numbers.replaceAll(a, numObj[a]);
           numbers = replacement;
        } 
    })
    return parseInt(numbers);
}