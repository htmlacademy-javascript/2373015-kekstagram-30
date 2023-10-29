const getRandomInteger = (min, max) => {
  const randomInteger = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInteger;
};

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export { getRandomInteger, getRandomElement };
