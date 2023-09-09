function solution(s) {
    let arr = s.split(' ');
    let answer = arr.map( word => {
       return word.split('').map((char, index) => {
            if(index % 2 === 0) return char.toUpperCase();
            else return char.toLowerCase();
        }).join('');
    }).join(' ');

    return answer;    
}