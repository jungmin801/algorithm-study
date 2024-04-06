function solution(participant, completion) {
   let obj = {};
    
    //1. 참가자 리스트를 돌면서 해당 이름을 key로, 인원수를 value로 갖는 obj객체를 만든다. 
    for(let name of participant){
        if(obj[name]){
            obj[name] = obj[name] + 1;
        } else obj[name] = 1;
    }
    
    //2. 완주자 이름이 obj에 있는 경우에 인원 수를 -1 한다.
    for(let name of completion){
        if(obj[name] > 0){
            obj[name] = obj[name] - 1;
        }
    }

    //3. obj에서 0보다 큰 수가 있다면, 완주하지 못한 선수가 된다.
    for(let key in obj){
        if(obj[key] > 0) 
            return key;
    }
    
}