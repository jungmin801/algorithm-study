function solution(order) {
    var total = 0
    var answer = String(order).split("")
    for(var idx in answer){
        if(eval(answer[idx]) % 3 === 0 && eval(answer[idx])) total++
    }
    return total;
}