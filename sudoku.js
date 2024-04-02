function validSolution(board) {
    // Перевірка, чи всі рядки містять унікальні числа від 1 до 9
    for (let i = 0; i < 9; i++) {
        if (!isUniqueSet(board[i])) {
            return false;
        }
    }

    // Перевірка, чи всі стовпці містять унікальні числа від 1 до 9
    for (let j = 0; j < 9; j++) {
        let column = [];
        for (let i = 0; i < 9; i++) {
            column.push(board[i][j]);
        }
        if (!isUniqueSet(column)) {
            return false;
        }
    }

    // Перевірка, чи всі блоки 3x3 містять унікальні числа від 1 до 9
    for (let k = 0; k < 9; k += 3) {
        for (let l = 0; l < 9; l += 3) {
            let block = [];
            for (let i = k; i < k + 3; i++) {
                for (let j = l; j < l + 3; j++) {
                    block.push(board[i][j]);
                }
            }
            if (!isUniqueSet(block)) {
                return false;
            }
        }
    }

    return true;
}

// Допоміжна функція для перевірки, чи містить масив унікальні елементи
function isUniqueSet(arr) {
    let set = new Set();
    for (let num of arr) {
        if (num === 0 || set.has(num)) {
            return false;
        }
        set.add(num);
    }
    return true;
}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // => true

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
])); // => false
