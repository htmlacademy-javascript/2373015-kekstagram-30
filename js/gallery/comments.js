const container = document.querySelector('.social__comments');
const template = document.querySelector('.social__comment');
const shownCounter = document.querySelector('.social__comment-shown-count');
const totalCounter = document.querySelector('.social__comment-total-count');
const loaderButton = document.querySelector('.social__comments-loader');

const createComments = (commentsData) => commentsData.map(({ avatar, message, name }) => {
  const comment = template.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
});

const currentCommentsData = [];

const onLoaderButtonClick = () => {
  container.append(...createComments(currentCommentsData.splice(0, currentCommentsData.step)));
  shownCounter.textContent = String(container.childElementCount);
  loaderButton.classList.toggle('hidden', !currentCommentsData.length);
};

const renderComments = (commentsData, step = 5) => {
  currentCommentsData.splice(0, Infinity, ...commentsData);
  currentCommentsData.step = step;
  container.replaceChildren();
  totalCounter.textContent = commentsData.length;
  loaderButton.addEventListener('click', onLoaderButtonClick);
  loaderButton.click();
};

export { renderComments };
