function solution(s) {
    let arr = s.split(' ');
    return answer = arr.map( word => {
       return word.split('').map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }).join(' ');
}

// for문으로 풀기
// function solution(s) {
//     let arr = s.split(' ');
//     let answer = [];
//     for(let i=0; i<arr.length; i++){
//         let word = '';
//         for(let j=0; j<arr[i].length; j++){
//             if(j % 2 === 0) {
//                word += arr[i][j].toUpperCase();   
//             } else word += arr[i][j].toLowerCase();
//         }
//         answer.push(word);
//     }
//     return answer.join(' ');
// } 