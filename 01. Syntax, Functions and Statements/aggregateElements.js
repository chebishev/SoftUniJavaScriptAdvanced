function aggregateElements(input) {
    sum = 0
    inverse = 0
    for (index = 0; index < input.length; index++) {
        sum += input[index]
        inverse += 1 / input[index]
    }
    console.log(sum)
    console.log(inverse)
    console.log(input.join(""))
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])