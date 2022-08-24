function solution(participant, completion) {
    const data = new Map();
    
    for (const part of participant) {
        if (data.has(part)) data.set(part, data.get(part) + 1);
        else data.set(part, 1);
    }
    
    for (const compl of completion) {
        if (data.get(compl) > 1) data.set(compl, data.get(compl) - 1);
        else data.delete(compl);
    }
    
    return data.keys().next().value;
}
