/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__population__ = __webpack_require__(1);


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start").onclick = function() {new Main;};
});


class Main {
  constructor(target = "To meow, or not to meow",
            population = 200, mutation = 1) {
    this.target = target;
    this.population = population;
    this.mutation = mutation;

    let create = new __WEBPACK_IMPORTED_MODULE_0__population__["a" /* default */](this.target, this.mutation, this.population);
    console.log(create);
    this.draw(create);
  }

  draw(population) {
    // console.log(population);
    console.log(population.isPhraseFound());
    while (!population.isPhraseFound()) {
      population.naturalSelection();
      population.generate();
      population.updateBestFitnessAndPhrase();
      population.getGeneration();
      population.getAverageFitness();
    }
    population.getBestPhrase();
    console.log(population.getBestFitness());
  }


}

/* harmony default export */ __webpack_exports__["default"] = (Main);
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dna__ = __webpack_require__(2);


class Population {
  constructor(targetPhrase, mutationPercentage, populationSize) {
    this.targetPhrase = targetPhrase;
    this.mutationRate = mutationPercentage / 100;
    this.populationSize = populationSize;
    this.currentPopulation = [];
    this.potentialParents = [];
    this.completed = false;
    this.generation = 0;
    this.bestPhrase = "";
    this.bestFitness = 0;
    this.topBestPhrase = [];

    this.createPopulation();
    this.calcPopFitness();
    this.updateBestFitnessAndPhrase();
  }

  createPopulation() {
    for (let i = 0; i < this.populationSize; i++) {
      let dna = new __WEBPACK_IMPORTED_MODULE_0__dna__["a" /* default */](this.targetPhrase.length);
      this.currentPopulation.push(dna);
    }
  }

  calcPopFitness() {
    let target = this.targetPhrase;
    this.currentPopulation.forEach((phrase) => {
      phrase.calculateFitness(target);
    });
    return this;
  }

  updateBestFitnessAndPhrase() {
    this.bestFitness = 0;
    this.bestPhrase = "";
    this.currentPopulation.forEach((phrase, idx) => {
      if (phrase.fitness > this.bestFitness) {

        this.bestFitness = phrase.fitness;
        this.bestPhrase = this.currentPopulation[idx].getPhrase();
        console.log("target:" + phrase.getPhrase());
        console.log(this.targetPhrase);
        if (phrase.getPhrase() === this.targetPhrase) {
          console.log("completed is true");
          this.completed = true;
        }
      }
    });
  }

  naturalSelection() {
    this.potentialParents = [];

    this.currentPopulation.forEach((phrase) => {
      let n = Math.floor(phrase.fitness);
      if (n < 1) n = 1;
      for (let i = 0; i < n; i++) {
        this.potentialParents.push(phrase);
      }
    });
    return this;
  }

  generate() {
    let matingPool = this.potentialParents;
    let matingPop = this.potentialParents.length;
    for (let i = 0; i < this.populationSize; i++) {
      let parentOneIdx = Math.floor(Math.random() * matingPop) + 0;
      let parentTwoIdx = Math.floor(Math.random() * matingPop) + 0;
      let parentA = this.potentialParents[parentOneIdx];
      let parentB = this.potentialParents[parentTwoIdx];
      let offspring = parentA.crossover(parentB);

      offspring = offspring.mutation(this.mutationRate);

      this.currentPopulation[i] = offspring;
    }
    this.calcPopFitness();
    this.updateBestFitnessAndPhrase();
    this.updateTopPhraseAndGen();
    this.generation++;
    return this;
  }

  updateTopPhraseAndGen() {
    if (this.topBestPhrase.length === 30) {
      this.topBestPhrase.pop();
      this.topBestPhrase.unshift(this.bestPhrase);
    } else {
      this.topBestPhrase.unshift(this.bestPhrase);
    }
    console.log(this.topBestPhrase);
    this.updateTable();
  }

  updateTable() {
    const table = document.getElementById("table");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    this.topBestPhrase.forEach((phrase) => {
      let row = document.createElement("tr");
      row.innerHTML = phrase;
      table.appendChild(row);
    });
  }

  isPhraseFound() {
    return this.completed;
  }

  getGeneration() {
    return this.generation;
  }

  getBestPhrase() {
    return this.bestPhrase;
  }

  getBestFitness() {
    document.getElementById("updated-gen").innerHTML = this.generation;
    return this.bestFitness;
  }

  getAverageFitness() {
    let totalFitness = 0;
    this.currentPopulation.forEach((phrase) => {
      totalFitness += phrase.fitness;
    });

    let total = totalFitness / this.populationSize;
    document.getElementById("updated-fitness").innerHTML = total + "%";
  }

  getAllPhrase() {
    let allPhrases = '';
    this.currentPopulation.forEach(function (phrase, idx) {
      allPhrases += phrase.getPhrase() + '\n';
    });
    return allPhrases;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Population);

//testing
// let a = new Population("helfsmjfhksdhlfl askjhlo", 1, 100);
// console.log(a);
// console.log(a.naturalSelection());
// console.log(a.generate());
// console.log(a.naturalSelection());
// console.log(a.generate());
// console.log(a.getAllPhrase());
// console.log(a.getAverageFitness());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// object that stores the genetic information for a member of the population
// population will be an array of DNA objects
class DNA {
  constructor(num) {
    this.genes = [];
    this.fitness = 0;
    for (let i = 0; i < num; i++) {
      let randomChar = Math.floor(Math.random() * 126) + 32;
      this.genes[i] = String.fromCharCode(randomChar);
    }}

  calculateFitness(target) {
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] === target.charAt(i)) {
        score++;
      }
    }
    this.fitness = (score / target.length) * 100;
    return this.fitness;
  }

  getPhrase() {
    return this.genes.join("");
  }

  crossover(partner) {
    let geneLength = this.genes.length;
    let offspring = new DNA(geneLength);
    let divider = Math.floor(Math.random() * (geneLength - 0)) + 0;

    for (let i = 0; i < geneLength; i++) {
      if (i < divider) {
        offspring.genes[i] = this.genes[i];
      } else {
        offspring.genes[i] = partner.genes[i];
      }
    }
    return offspring;
  }

  mutation(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (Math.random() < mutationRate) {
        let randomChar = Math.floor(Math.random() * 126) + 32;
        this.genes[i] = String.fromCharCode(randomChar);
      }
    }
    return this;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (DNA);

// testing
// let a = new DNA(5);
// let b = new DNA(5);
// console.log(a);
// console.log(b);
// console.log("fitness: " + a.calculateFitness("hello"));
// // console.log(a);
// console.log("phrase: " + a.getPhrase());
// console.log("crossover: " + a.crossover(b));
// let c = a.crossover(b);
// console.log("mutation: " + c.mutation(0.60));
// // console.log(a);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map