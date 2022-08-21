function solution(price, money, count) {
    let answer = money;
    
    for (i=1; i<=count; i++) {
        answer -= price * i;
    }
    
    return answer > 0 ? 0 : -answer;
}
