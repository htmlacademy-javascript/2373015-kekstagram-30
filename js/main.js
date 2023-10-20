const PHOTOS_DESCRIPTIONS = [
  'Закат над океаном.',
  'Портрет старика.',
  'Ночной город.',
  'Цветущее поле.',
  'Абстрактная сюрреалистичная живопись.',
];

const USERS_NAMES = [
  'Костя',
  'Родион',
  'Игорь',
  'Сергей',
  'Николай',
];

const USERS_COMMENTS = [
  'Оранжевый закат над морем.',
  'Мерцающие огоньки в городе.',
  'Поле с разноцветными цветами.',
  'Абстрактные формы и цвета.',
  'Седой старик с бородой.',
];

const getRandomInteger = (min, max) => {
  const randomInteger = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInteger;
};

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const createCommentsData = (numComments) => {
  const comments = [];
  for (let i = 0; i < numComments; i++) {
    const randomComment = getRandomElement(USERS_COMMENTS);
    comments.push({
      user: getRandomElement(USERS_NAMES),
      text: randomComment,
    });
  }
  return comments;
};

function createPhotosData() {
  const array = [];
  for (let i = 1; i <= 25; i++) {
    const numComments = getRandomInteger(0, 30);
    const comments = createCommentsData(numComments);
    array.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomElement(PHOTOS_DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: comments,
    });
  }
  return array;
}
createPhotosData();

console.log(createPhotosData());

void (getRandomElement, getRandomInteger);

