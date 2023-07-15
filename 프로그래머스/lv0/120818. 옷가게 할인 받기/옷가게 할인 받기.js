function solution(price) {
    // 10만원 이상~30만원 미만 -> 5%할인
    // 30만원 이상~50만원 미만 -> 10%할인
    // 50만원 이상 -> 20%할인
    
    let answer = 0;
    switch(true){
        case (price >= 500000) :
            answer = price * 0.8;
            break;
        case (price >= 300000) :
            answer = price * 0.9;
            break;
        case (price >= 100000) :
            answer = price * 0.95;
            break;    
        default : answer = price;
    }
    return parseInt(answer)
}