// ************************ N-Queens **************************


// Task 4: Solve the "N-Queens" problem on LeetCode.
// - Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// - Log the distinct solutions for a few test cases.


function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isSafe = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    };

    const placeQueens = (row) => {
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                placeQueens(row + 1);
                board[row][col] = '.';
            }
        }
    };

    placeQueens(0);
    return solutions;
}

const testCases = [
    { n: 4, expected: [
        [".Q..",   // Solution 1
         "...Q",
         "Q...",
         "..Q."],
        ["..Q.",   // Solution 2
         "Q...",
         "...Q",
         ".Q.."]
    ]},
    { n: 1, expected: [
        ["Q"]
    ]},
    { n: 2, expected: []},
    { n: 3, expected: []}
];

testCases.forEach(({ n, expected }) => {
    const result = solveNQueens(n);
    console.log(`solveNQueens(${n}) = ${JSON.stringify(result)}; Expected = ${JSON.stringify(expected)}`);
});

