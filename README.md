# ShakespeareanCat

## Background
One of the most powerful algorithmic process is found in nature itself. Genetic Algorithms are search based algorithms based on the concepts of natural selection and genetics. It is frequently used to find optimal or near-optimal solutions to difficult problems which otherwise would take a lifetime to solve. By evaluating how 'fit' a guess is, the program can "evolve" the answer accordingly.

## Overview
Imagine a cat stepping on random keys on a keyboard. It is theorized, given an infinite amount of time, the cat will eventually type the phrase "to be or not to be".

Using genetics algorithms, this app will teach users how certain parameters (total population and mutation rate) can change the optimization of a solution.

## Functionality & MVP
In ShakespeareanCat, users will be able to :
- Vary the variables: total population and mutation rates
- Start, stop and reset the simulation
- Visually see the each population elements and the current "fittest" phase
- Change the target phase

In addition, this project will include:
- An About modal diving into the specific implementation of ShakespeareanCat

## Wireframes
![alt text](https://raw.githubusercontent.com/carment0/ShakespeareanCat-/master/images/New%20Mockup%201.png "Logo Title Text 1")

![alt text](https://raw.githubusercontent.com/carment0/ShakespeareanCat-/master/images/New%20Mockup%202.png "Logo Title Text 1")

## Architecture and Technologies
There will be three scripts involved in this project:
- population.js - manage the array of all the element of the population, calculate the fitness values, selection functions
- sketch.js - setup initialization state, looping state
- DNA.js - function for mutation, store the character of each phrase


## Implementation Timeline
D1:  Write a basic entry file and the bare bones of all 3 scripts outlined above. Review genetics algorithms.
D2: Build out sketch and population
D3: Build out DNA
D4: Create controls for app and edit css
