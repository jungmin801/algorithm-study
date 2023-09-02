function solution(s) {
    if(s.length === 4 || s.length === 6) {
      let arr = s.split('').map( el => parseInt(el));
      return arr.filter(isNaN).length > 0 ? false : true;
    } else return false;
}