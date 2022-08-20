function solution(arr)
{
    let before = null;
    const answer = [];
    
    for (const num of arr) {
        if (before !== num) {
            answer.push(num);
            before = num;
        }
    }
    
    return answer;
}
