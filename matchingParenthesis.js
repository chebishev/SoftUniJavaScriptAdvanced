function matchingParenthesis(input){
    indexStorage = []
    for (let index = 0; index < input.length; index++) {
        if (input[index] == "("){
            indexStorage.push(index)
        }else if(input[index] == ")"){
            startIndex = indexStorage.pop()
            endIndex = index
            currentExpression = input.slice(startIndex, endIndex)
            console.log(currentExpression)
        }
        
    }
    console.log("==============================")
}
matchingParenthesis("1 + (2 - (2 + 3) * 4 / (3 + 1)) * 5")
matchingParenthesis("(2 + 3) - (2 + 3)")