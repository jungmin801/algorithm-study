function solution(chicken) {
    let cnt = 0;
    let coupon = 0;
    
    while(chicken > 0) {
        cnt += parseInt(chicken / 10);
        coupon += parseInt(chicken % 10);
        chicken = parseInt(chicken / 10);
    }
    
    while(parseInt(coupon/10) > 0) {
        cnt += parseInt(coupon/10);
        coupon = parseInt(coupon%10) + parseInt(coupon/10);
    } 
    
    return cnt;
    
}