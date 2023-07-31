function solution(my_string, num1, num2) {
    let str = [...my_string];
    let newArr = [my_string[num1], my_string[num2]];

    str[num1] = newArr[1];
    str[num2] = newArr[0];
    
    return answer = str.join('');
}