const DNA = require("./dna");

class Population {
  constructor(options) {
    this.pool = new DNA(options.pool) || new DNA(100);

  }
}

module.export = Population;
