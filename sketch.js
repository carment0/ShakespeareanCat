initialize() {
  let target = "To be or not to be.";
  let population = 200;
  let mutation = 0.01;
  let start = new Population(target, mutation, population);
}

draw() {
  population.naturalSelection();
  population.generate();
  population.evaluate();
  population.calcPopFitness();
  if (population.isPhraseFound()) {
    noLoop();
  }
}
