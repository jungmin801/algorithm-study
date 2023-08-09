function solution(spell, dic) {
    // 1. dic의 값에 spell의 알파벳이 포함 되어있는가?
    // 2. 포함되어있다면, 각 글자가 1번만 들어가있는가?
    let answer = 2;
    for(let i = 0; i<dic.length; i++){
        let check = 0;
        for(let j=0; j<spell.length; j++){
            if(dic[i].split(spell[j]).length === 2) check += 1; 
        }
        if(check === spell.length) return answer = 1;
    }
   return answer;
}