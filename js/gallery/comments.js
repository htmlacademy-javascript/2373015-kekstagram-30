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

const displayedComments = [];

const onLoaderButtonClick = () => {
  container.append(...createComments(displayedComments.splice(0, 5)));
  shownCounter.textContent = container.childElementCount;
  loaderButton.classList.toggle('hidden', !displayedComments.length);
};

const renderComments = (commentsData) => {
  displayedComments.splice(0, Infinity, ...commentsData);
  container.replaceChildren();
  totalCounter.textContent = commentsData.length;
  loaderButton.addEventListener('click', onLoaderButtonClick);
  loaderButton.click();
};

export { renderComments };
