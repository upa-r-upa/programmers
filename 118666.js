function solution(survey, choices) {
    const calc = {"R": 0,"T": 0,"C": 0,"F": 0,"J": 0,"M": 0,"A": 0,"N": 0};

    for (let i = 0; i < survey.length; i ++) {
        const [before, after] = survey[i].split("");
        if (choices[i] < 4) calc[before] += Math.abs(4 - choices[i]);
        else if (choices[i] > 4) calc[after] += Math.abs(4 - choices[i]);
    }
    
    function getType(a, b) {
        if (calc[a] === calc[b]) return a < b ? a : b;
        else return calc[a] > calc[b] ? a : b;
    }   
    
    return getType("R", "T") + getType("C", "F") + getType("J", "M") + getType("A", "N")
}
