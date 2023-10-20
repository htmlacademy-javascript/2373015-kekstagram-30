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
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];

const getRandomInteger = (min, max) => {
  const randomInteger = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInteger;
};

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const createCommentsData = () => {
  const numComments = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 1; i <= numComments; i++) {
    const getRandomUserName = getRandomElement(USERS_NAMES);
    const getRandomUserComment = getRandomElement(USERS_COMMENTS);
    comments.push({
      id: i,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomUserComment,
      name: getRandomUserName,
    });
  }
  return comments;
};

const createPhotosData = () => {
  const array = [];
  for (let i = 1; i <= 25; i++) {
    array.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomElement(PHOTOS_DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: createCommentsData(),
    });
  }
  return array;
};
createPhotosData();

void (getRandomElement, getRandomInteger);
