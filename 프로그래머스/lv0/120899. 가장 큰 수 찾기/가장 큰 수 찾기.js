function solution(array) {
    let answer = [0,0];
    answer[0] = Math.max(...array);
    answer[1] = array.findIndex( a => a === answer[0]);
    return answer;
}