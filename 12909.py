def solution(s):
    count = 0
    
    for i in range(len(s)):
        if s[i] == ")":
            if count <= 0:
                return False
            else:
                count -= 1
        else:
            count += 1
        
    return not count

