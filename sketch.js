draw() {
  population.calcFitness();
  population.naturalSelection();
  population.generate();
  population.evaluate();

  if (population.finished()) {
    noLoop();
  }
}
