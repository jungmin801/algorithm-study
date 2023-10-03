function solution(food) {
    let result = "";
    for(let i=1; i<food.length; i++){
        let chars = String(i).repeat(Math.trunc(food[i] / 2));
        result += chars;
    }
    
    return result + "0" + result.split('')
                           .reverse()
                           .join('');
}