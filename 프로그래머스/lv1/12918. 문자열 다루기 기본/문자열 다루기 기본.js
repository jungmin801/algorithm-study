function solution(s) {
    if(s.length === 4 || s.length === 6) {
      return s.split('').filter(isNaN).length > 0 ? false : true;
    } else return false;
}