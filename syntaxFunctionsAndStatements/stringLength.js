function stringLength(firstString, secondString, thirdString){
    let allLength = firstString.length + secondString.length + thirdString.length;
    let average = Math.floor(allLength / 3);
    console.log(allLength);
    console.log(average);
};
stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')