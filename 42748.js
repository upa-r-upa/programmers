function selectionSort(answer, max) {
    for (let i = 0; i < Math.min(answer.length, max); i++) {
        let minimum = i;

        for (let j = i; j < answer.length; j++) {
            if (answer[minimum] > answer[j]) {
                minimum = j;
            }
        }

        const origin = answer[i];

        answer[i] = answer[minimum];
        answer[minimum] = origin;
    }

    return answer;
}


function solution(array, commands) {
    const r = []

    for (let i=0; i<commands.length; i++) {
        r.push(array.slice(commands[i][0] - 1, commands[i][1]));    
    }

    return commands.map(([,,pick], idx) => selectionSort(r[idx], pick)[pick - 1]); 
}
