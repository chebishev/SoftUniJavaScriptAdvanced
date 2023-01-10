function sortingNumbers(array) {
    sortedArray = array.sort()
    console.log(sortedArray)
    outputArray = []

    while (sortedArray.length > 0){
        outputArray.push(sortedArray.shift())
        outputArray.push(sortedArray.pop())
    }
    //return outputArray
    console.log(outputArray)
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);