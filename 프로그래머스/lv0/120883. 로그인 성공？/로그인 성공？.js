function solution(id_pw, db) {
    // 1.id_pw[0] === db[i][0]?
    // 2.id_pw[1] === db[i][1]?
    let answer = '';
    for(let i=0; i<db.length; i++){
        if(id_pw[0] === db[i][0]) {
            if (id_pw[1] === db[i][1]) return answer = 'login';
            else return answer = 'wrong pw';
        } else answer = 'fail';
    }
    return answer;
}