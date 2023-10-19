const PHOTO_DESCRIPTION = [
  'Закат над океаном.',
  'Портрет старика.',
  'Ночной город.',
  'Цветущее поле.',
  'Абстрактная сюрреалистичная живопись.',
];

const USER_NAME = [
  'Костя',
  'Родион',
  'Игорь',
  'Сергей',
  'Николай',
];

const USER_COMMENTS = [
  'Оранжевый закат над морем.',
  'Мерцающие огоньки в городе.',
  'Поле с разноцветными цветами.',
  'Абстрактные формы и цвета.',
  'Седой старик с бородой.',
];

const getRandomDescriptionArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Проверка
// const randomDescription = getRandomDescriptionArray(PHOTO_DESCRIPTION);

const getRandomInteger = (min, max) => {
  const fraction = (max - min) * Math.random() * min;
  return Math.round(fraction);
};

const getRandomCommentsArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Проверка
// const getRandomComments = getRandomCommentsArray(USER_COMMENTS);

const getRandomNameArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Проверка
// const getRandomName = getRandomNameArray(USER_NAME);

const structure = () => {
  const array = [];
  for (let i = 1; i <= 25; i++) {
    array.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomDescriptionArray(PHOTO_DESCRIPTION),
      likes: getRandomInteger(15, 200),
      comments: getRandomCommentsArray(USER_COMMENTS),
      name: getRandomNameArray(USER_NAME),
    });
  }
  return array;
};
structure();

void (getRandomDescriptionArray, getRandomInteger, getRandomCommentsArray, getRandomNameArray);
