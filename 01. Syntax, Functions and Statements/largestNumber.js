function largestNumber(firstNumber, secondNumber, thirdNumber){
    let largestNumber = Number.MIN_SAFE_INTEGER
        if(firstNumber > largestNumber){
        largestNumber = firstNumber
    }
    if(secondNumber > largestNumber){
        largestNumber = secondNumber
    }
    if(thirdNumber > largestNumber){
        largestNumber = thirdNumber
    }
    console.log(`The largest number is ${largestNumber}.`)
};
largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)
