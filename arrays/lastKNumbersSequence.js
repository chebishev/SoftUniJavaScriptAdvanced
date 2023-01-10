function lastKNumbersSequence(length, numSum) {
    let sequence = [1, 1, 2];
    let currentNumber = 0;
    let index = 3;
    while (sequence.length < length) {
        for (j = 0; j < numSum; j++) {
            currentNumber += sequence[index - numSum];
            index++
        }
        sequence.push(currentNumber);
        currentNumber = 0;
        index -= numSum - 1;
    }
    console.log(sequence);
}
lastKNumbersSequence(6, 1);
lastKNumbersSequence(8, 4);
// it needs totally different approach