const { push } = require("./dinos")

/********************
 * HELPER FUNCTIONS *
 ********************/

 const makeDino = function (species, period, diet, extinct = false) {
  const newDino = {
    species: species,
    period: period,
    carnivore: diet,
    extinct: extinct,
  }
  return newDino
}


const makeSingular = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (dino.species.endsWith('us') === true) {
    newDino.species = newDino.species.slice(0, -2)
  }
  return newDino
}


const truncateSpecies = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.species.length > 10) {
    newDino.species = newDino.species.slice(0, 7) + '...'
    return newDino
  } else {
    return newDino
  }
}


const makeExtinct = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  newDino.extinct = true
  return newDino
}


const isCarnivore = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.carnivore === true) {
    return newDino.carnivore === true
  } else {
    return false
  }
}


const isExtinct = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.extinct === true) {
    return newDino.extinct === true
  } else {
    return false
  }
}


const isTriassic = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.period === 'Triassic') {
    return newDino.period = true
  } else {
    return false
  }
}


const isJurassic = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.period === 'Jurassic') {
    return newDino.period = true
  } else {
    return false
  }
}


const isCretaceous = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.period === 'Cretaceous') {
    return newDino.period = true
  } else {
    return false
  }
}


const isHerbivore = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.carnivore === false) {
    return newDino.carnivore === false
  } else {
  } return false
}


const notExtinctHelper = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.extinct === false) {
    return newDino
  }
}


const notTriassicHelper = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct,)
  if (dino.period !== 'Triassic') {
    return newDino
  } 
}
/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function (dino) {
  const result = []
  for (const fuzzyDinos of dino) {
    result.push(makeSingular(fuzzyDinos))

  }
  return result
}


const truncateDinos = function (dino) {
  const result = [];
  for (const dinos of dino) {
    result.push(truncateSpecies(dinos))
  }
  return result
}


const makeAllExtinct = function (dino) {
  const result = [];
  for (const dinos of dino) {
    result.push(makeExtinct(dinos))
  }
  return result
}


const carnivoresOnly = function (dino) {
  const result = [];
  for (dinos of dino) {
    if (isCarnivore(dinos)) {
      result.push(dinos)
    }
  }
  return result
}


const herbivoresOnly = function (dino) {
  const result = [];
  for (dinos of dino) {
    if (isHerbivore(dinos)) {
      result.push(dinos)
    }
  }
  return result
}


const extinctOnly = function (dino) {
  result = [];
  for (dinos of dino) {
    if (isExtinct(dinos)) {
      result.push(dinos)
    }
  }
  return result
}


const notExtinct = function (dino) {
  result = [];
  for (dinos of dino) {
    if (notExtinctHelper(dinos)) {
      result.push(dinos)
    }
  }
  return result
}


const triassicOnly = function (dino) {
  const result = [];
  for (dinos of dino) {
    if (isTriassic(dinos)) {
      result.push(dinos)
    }
  }
  return result
}


const notTriassic = function (dino) {
  const result = [];
  for (dinos of dino) {
    if (notTriassicHelper(dinos))
    result.push(dinos)
  }
  return result
}



/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

if (typeof makeDino === 'undefined') {
  makeDino = undefined
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined
}

if (typeof isCarnivore === 'undefined') {
  isCarnivore = undefined
}

if (typeof isExtinct === 'undefined') {
  isExtinct = undefined
}

if (typeof isNotExtinct === 'undefined') {
  isNotExtinct = undefined
}

if (typeof isTriassic === 'undefined') {
  isTriassic = undefined
}

if (typeof isJurassic === 'undefined') {
  isJurassic = undefined
}

if (typeof isCretaceous === 'undefined') {
  isCretaceous = undefined
}

if (typeof singularizeDinos === 'undefined') {
  singularizeDinos = undefined
}

if (typeof truncateDinos === 'undefined') {
  truncateDinos = undefined
}

if (typeof makeAllExtinct === 'undefined') {
  makeAllExtinct = undefined
}

if (typeof carnivoresOnly === 'undefined') {
  carnivoresOnly = undefined
}

if (typeof herbivoresOnly === 'undefined') {
  herbivoresOnly = undefined
}

if (typeof extinctOnly === 'undefined') {
  extinctOnly = undefined
}

if (typeof notExtinct === 'undefined') {
  notExtinct = undefined
}

if (typeof triassicOnly === 'undefined') {
  triassicOnly = undefined
}

if (typeof notTriassic === 'undefined') {
  notTriassic = undefined
}


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isNotExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
}
