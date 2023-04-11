function cityRecord(...args){
    output = {
        name: args[0],
        population: args[1],
        treasury: args[2]

    }
    //console.log(output);
    return output;
}
cityRecord('Tortuga',
7000,
15000)

cityRecord('Santo Domingo',
12000,
23500)
