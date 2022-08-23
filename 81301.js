function solution(s) {
    const set = new Map([['zero','0'],['one','1'],['two','2'],['three','3'],['four','4'],['five','5'],['six','6'],['seven','7'],['eight','8'],['nine','9']]);
    
    let answer = "";
    let save = "";
    
    for (const str of s) {
        
        if (isNaN(Number(str))) {
            save += str;
            
            if (set.get(save)) {
                answer += set.get(save);
                save = "";
            }
        } else answer += str;
    }
    
    return Number(answer);
}
