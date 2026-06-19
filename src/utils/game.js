export function normalizeGuess(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ');
}

export function getHint(name, revealedLetters) {
  const visible = new Set(revealedLetters.map((letter) => letter.toLowerCase()));

  return name
    .split('')
    .map((char) => {
      if (char === ' ' || char === '-' || /\d/.test(char)) {
        return char;
      }

      return visible.has(char.toLowerCase()) ? char : '_';
    })
    .join('');
}

export function getAvailableLetters(name, revealedLetters) {
  const visible = new Set(revealedLetters.map((letter) => letter.toLowerCase()));
  const letters = name
    .split('')
    .filter((char) => /[a-z]/i.test(char) && !visible.has(char.toLowerCase()));

  return [...new Set(letters.map((letter) => letter.toLowerCase()))];
}

export function pickRandomCar(cars, currentCar) {
  if (cars.length <= 1) {
    return cars[0];
  }

  let nextCar = currentCar;
  while (!nextCar || nextCar.name === currentCar?.name) {
    nextCar = cars[Math.floor(Math.random() * cars.length)];
  }

  return nextCar;
}
