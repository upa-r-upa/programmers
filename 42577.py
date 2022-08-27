class Trie:
    def __init__(self):
        self.nodes = {}

    def add_and_catch(self, word):
        curr = self.nodes

        for i in range(len(word)):
            part = word[i]
            is_last = i + 1 == len(word)

            if curr.get(part) is None:
                curr[part] = {}
            elif curr.get("*"):
                return True

            if is_last: 
                curr["*"] = True
            else:
                curr = curr[part]

        return False

    def find(self, word):
        curr = self.nodes

        for i in range(len(word)):
            part = word[i]
            is_last = i + 1 == len(word)

            if is_last is True and len(curr[part].keys()) > 0:
                return True
            else:
                curr = curr[part]

        return False

def solution(phone_book):
    trie = Trie()

    for phone in phone_book:
        if trie.add_and_catch(phone) == True: 
            return False

    for phone in phone_book:
        if trie.find(phone) == True: 
            return False

    return True
