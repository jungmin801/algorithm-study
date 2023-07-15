function solution(array) {
    array.sort( (a, b) => a-b);
    return array[((1+array.length) / 2) - 1];
}