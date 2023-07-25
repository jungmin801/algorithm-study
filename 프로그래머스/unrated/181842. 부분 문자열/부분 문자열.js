function solution(str1, str2) {
    let split = str2.split(str1);
    return split.length >= 2 ? 1 : 0;
}