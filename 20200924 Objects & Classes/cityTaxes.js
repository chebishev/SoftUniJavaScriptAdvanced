function cityTaxes(...args) {
  let [name, population, treasury] = args
  let output = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes: function () {
      this.treasury += Math.floor(this.population * this.taxRate)
    },
    applyGrowth: function (percentage) {
      percentage = percentage / 100 + 1
      this.population = Math.floor(this.population * percentage)
    },
    applyRecession: function (percentage) {
      percentage = percentage / 100
      this.treasury = Math.floor(this.treasury * (1 - percentage))
    }

  }
  return output
}

// const city =
//   cityTaxes('Tortuga',
//     7000,
//     15000);
// console.log(city);

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

