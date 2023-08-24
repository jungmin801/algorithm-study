function solution(s){
    let splitP = s.toLowerCase().split('p');
    let splitY = s.toLowerCase().split('y'); 
    
    return splitP.length === splitY.length? true : false;
}