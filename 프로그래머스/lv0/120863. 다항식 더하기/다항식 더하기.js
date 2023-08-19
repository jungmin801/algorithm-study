function solution(polynomial) {
    let sumX = 0;
    let sumConst = 0;
    let split = polynomial.split(' + ').map( a => {
        return a === 'x'? '1x' : a;
    });
    

    for(let value of split){
        if(value.includes('x')) {
            let split2 = value.split('x');
            sumX += parseInt(split2[0]);
        } else sumConst += parseInt(value);
    }
    
    let answer = '';
    if(sumConst === 0) {
        return answer = sumX === 1? 'x' : `${sumX}x`;
    }else if(sumX === 0){
        return answer = `${sumConst}`;
    }else if(sumX === 1) {
        return answer = `x + ${sumConst}`;
    }else {
        return answer = `${sumX}x + ${sumConst}`;
    }
}