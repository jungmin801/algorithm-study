function solution(my_string) {
    let str = [...my_string].map(a => parseInt(a)).join('');
    let arr = str.split('NaN').filter(a => a !== "")
    let answer = 0;
    for(let i=0; i<arr.length; i++){
        answer += parseInt(arr[i])
    }

    return answer;

}