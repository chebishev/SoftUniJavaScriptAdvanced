function mathOperations(first, second, operation){
    let result = 0
    switch (operation){
        case "+":
            result = first + second
            break
        case "-":
            result = first - second
            break
        case "*":
            result = first * second
            break
        case "/":
            result = first / second
            break
        case "%":
            result = first % second
            break
        case "**":
            result = first ** second
            break
    }
    console.log(result)
}
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')
