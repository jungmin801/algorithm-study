function solution(phone_number) {
    let answer = ""
    while (answer.length < phone_number.length-4){
        answer += "*"
    }
    return answer + phone_number.slice(-4);
}