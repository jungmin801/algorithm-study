function solution(s) {
    let numbers = {
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
    }
    
    // const keys = Object.keys(numbers);
    // for(let value of keys){
    //     if(s.includes(value)) {
    //         s = s.replaceAll(value, numbers[value]);
    //     };
    // };
    
    for(let key in numbers){
        s = s.replaceAll(key, numbers[key])
    }
    
    return parseInt(s);
}