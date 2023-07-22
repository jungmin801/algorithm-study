function solution(age) {
    //1. a~j까지의 배열을 만든다.
    //2. age를 문자로 만든 후 한자리씩 쪼개고, 다시 숫자로 만든다.
    //3. age의 값이 인덱스 넘버가 된다.

    let alphabet = ["a","b","c","d","e","f","g","h","i","j"];
    let ageArr = [...String(age)].map( a => parseInt(a));
    return answer = ageArr.map( a => alphabet[a] ).join('');

}