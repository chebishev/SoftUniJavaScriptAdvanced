function sumOfNumbers(first, second){
    let firstNumber = Number(first);
    let secondNumber = Number(second);
    let result = 0;
    for(i = firstNumber; i <= secondNumber; i++){
        result += i;
    };
    console.log(result)
}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');