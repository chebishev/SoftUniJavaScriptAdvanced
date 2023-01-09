function equalNeigbors(array) {
    let count = 0;
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            
            let curP = array[row][col];

            let nextR = array[row][col + 1];
            if (curP === nextR) {
                count++;
            }

            if (row + 1 < array.length) {
                let curD = array[row + 1][col];
                if (curP === curD) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
equalNeigbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);

equalNeigbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
equalNeigbors(
 [['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]);





