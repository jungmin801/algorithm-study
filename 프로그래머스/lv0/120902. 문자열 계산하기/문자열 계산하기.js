function solution(my_string) {
    let split = my_string.split(' ');
    let calc = parseInt(split[0]);
    for(let i=1; i<split.length; i+=2){
        if(split[i] === '+') {
            calc += parseInt(split[i+1]);
        } else {
            calc -= parseInt(split[i+1]);
        }
    }
    
    return calc;
}