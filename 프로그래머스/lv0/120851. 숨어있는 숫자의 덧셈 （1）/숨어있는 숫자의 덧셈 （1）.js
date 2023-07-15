function solution(my_string) {
    let newArr = [...my_string].map( a => parseInt(a) ).filter( b => !isNaN(b) );
    return answer = newArr.reduce( (acc, cur ) => acc += cur);
}