const Population = require("./population");

document.addEventListener("DOMContentLoaded", () => {
  const start = new Evolution();
  console.log("dlkfjgld");
  debugger
});

class Evolution {
  constructor(target = "To meow, or not to meow, that is the meowstion.",
            population = 200, mutation = 1) {
    this.target = target;
    this.population = population;
    this.mutation = mutation;

    let create = new Population(this.target, this.mutation, this.population);

    // this.draw(create);
  }

  draw(population) {
    // console.log(population);
    while (!population.isPhraseFound) {
      population.naturalSelection();
      population.generate();
    }
    population.getBestPhrase();
    population.getBestFitness();
  }
}

// module.exports = Evolution;

// function renderRow(phrase) {
//   const table = document.getElementById('table');
//   const newTableRow = document.createElement('tr');
//
//   const tableData1 = document.createElement('td');
//   tableData1.appendChild(document.createTextNode('1'));
//
//   const tableData2 = document.createElement('td');
//   tableData2.appendChild(document.createTextNode('24%'));
//
//   const tableData3 = document.createElement('td');
//   tableData3.appendChild(document.createTextNode(phrase));
//
//   newTableRow.appendChild(tableData1);
//   newTableRow.appendChild(tableData2);
//   newTableRow.appendChild(tableData3);
//
//   table.appendChild(newTableRow);
// }
//
// renderRow("Hello World");
// renderRow("Again");
// renderRow("Again and again");
