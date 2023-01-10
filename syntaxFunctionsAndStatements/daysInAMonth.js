function daysInAMonth(month, year){
    result = 0
    if (month == 4 || month == 6 || month == 9 || month == 11){
        result = 30
    }
    else if(month == 2){
        if(year % 4 == 0){
            result = 29
        }else{
            result = 28
        }
    }
    else{
        result = 31
    }
    console.log(result)
}
daysInAMonth(1, 2012)
daysInAMonth(2, 2021)