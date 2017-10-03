//object that stores the genetic information for a member of the population
// population will be an array of DNA objects
class DNA {
  // gene is an array of chars
  constructor(options) {
    this.phraseLength =  options.phraseLength || 19;
    this.gene = [];
    for (let i = 0; i < this.phraseLength; i++) {
      let randomChar = Math.floor(Math.random() * 126) + 32;
      this.gene[i] = String.fromCharCode(randomChar);
    }
  }
  // Returns a single random character string





}
