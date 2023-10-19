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

const randomDescription = getRandomDescriptionArray(PHOTO_DESCRIPTION);

const getRandomInteger = (min, max) => {
  const fraction = (max - min) * Math.random() * min;
  return Math.round(fraction);
};

const getRandomCommentsArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getRandomComments = getRandomCommentsArray(USER_COMMENTS);

const getRandomNameArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getRandomName = getRandomNameArray(USER_NAME);


