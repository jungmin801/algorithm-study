function solution(food) {
    let result = "";
    for(let i=1; i<food.length; i++){
        let chars = String(i).repeat(Math.trunc(food[i] / 2));
        result += chars;
        if(i === food.length - 1) result += '0';
    }
    
    return result + result.split('').slice(0,result.length-1).reverse().join('');
    
}