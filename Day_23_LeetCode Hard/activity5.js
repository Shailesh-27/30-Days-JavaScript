// ************************ Word Ladder **************************


// Task 4: Solve the "Word Ladder" problem on LeetCode.
// - Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// - Log the length of the shortest transformation sequence for a few test cases.



function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.has(endWord)) return 0;

    const queue = [[beginWord, 1]]; // Queue holds pairs of [word, length]
    const visited = new Set([beginWord]);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    while (queue.length > 0) {
        const [currentWord, length] = queue.shift();

        if (currentWord === endWord) return length;

        for (let i = 0; i < currentWord.length; i++) {
            for (const char of alphabet) {
                if (char === currentWord[i]) continue; // Skip same character

                const nextWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);
                if (wordList.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push([nextWord, length + 1]);
                }
            }
        }
    }

    return 0; // If no transformation sequence is found
}

const testCases = [
    {
        beginWord: "hit",
        endWord: "cog",
        wordList: new Set(["hot", "dot", "dog", "lot", "log", "cog"]),
        expected: 5
    },
    {
        beginWord: "hit",
        endWord: "cog",
        wordList: new Set(["hot", "dot", "dog", "lot", "log"]),
        expected: 0
    },
    {
        beginWord: "a",
        endWord: "c",
        wordList: new Set(["a", "b", "c"]),
        expected: 2
    },
    {
        beginWord: "a",
        endWord: "b",
        wordList: new Set(["a", "b"]),
        expected: 2
    },
    {
        beginWord: "a",
        endWord: "c",
        wordList: new Set(["a", "b"]),
        expected: 0
    }
];

testCases.forEach(({ beginWord, endWord, wordList, expected }) => {
    const result = ladderLength(beginWord, endWord, wordList);
    console.log(`ladderLength("${beginWord}", "${endWord}", ${Array.from(wordList)}) = ${result}; Expected = ${expected}`);
});

