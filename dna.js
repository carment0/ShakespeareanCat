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
    console.log(offspring);
    return offspring;
  }

  mutation(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (Math.random() < mutationRate) {
        let randomChar = Math.floor(Math.random() * 126) + 32;
        this.genes[i] = String.fromCharCode(randomChar);
      }
    }
  }
}

module.exports = DNA;

//testing
// let a = new DNA(5);
// let b = new DNA(5);
// console.log(a);
// console.log("fitness: " + a.calculateFitness("hello"));
// console.log(a);
// console.log("phrase: " + a.phrase());
// console.log("recombine: " + a.recombine(b));
// console.log("mutation: " + a.mutationLevel(0.60));
// console.log(a);
