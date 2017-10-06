const DNA = require("./dna");

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

    this.createPopulation();
    this.calcPopFitness();
    this.updateBestFitnessAndPhrase();
  }

  createPopulation() {
    for (let i = 0; i < this.populationSize; i++) {
      let dna = new DNA(this.targetPhrase.length);
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
        if (phrase === this.targetPhrase) {
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
    this.generation++;
    return this;
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
    return this.bestFitness;
  }

  getAverageFitness() {
    let totalFitness = 0;
    this.currentPopulation.forEach((phrase) => {
      totalFitness += phrase.fitness;
    });
    return totalFitness / this.populationSize;
  }

  getAllPhrase() {
    let allPhrases = '';
    this.currentPopulation.forEach(function (phrase, idx) {
      allPhrases += phrase.getPhrase() + '\n';
    });
    return allPhrases;
  }
}

module.exports = Population;

//testing
// let a = new Population("helfsmjfhksdhlfl askjhlo", 1, 100);
// console.log(a);
// console.log(a.naturalSelection());
// console.log(a.generate());
// console.log(a.naturalSelection());
// console.log(a.generate());
// console.log(a.getAllPhrase());
// console.log(a.getAverageFitness());
